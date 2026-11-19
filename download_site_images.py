import os
import requests
import hashlib
import csv
import time

from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
from collections import deque
from urllib.robotparser import RobotFileParser

BASE_URL = "https://www.burlesonmonuments.com/"
DOMAIN = urlparse(BASE_URL).netloc

SAVE_FOLDER = "downloaded_images"

os.makedirs(SAVE_FOLDER, exist_ok=True)

visited_pages = set()
downloaded_images = set()

pages_to_visit = deque([BASE_URL])

MAX_PAGES = 80

headers = {
    "User-Agent": "Mozilla/5.0 (compatible; WebsiteAssetReview/1.0)"
}

session = requests.Session()
session.headers.update(headers)

# Check website crawling permissions
robots = RobotFileParser()
robots.set_url(urljoin(BASE_URL, "robots.txt"))

try:
    robots.read()
except Exception:
    robots = None


def allowed_to_visit(url):
    if robots is None:
        return True

    return robots.can_fetch(headers["User-Agent"], url)


def download_image(image_url):

    if image_url in downloaded_images:
        return

    downloaded_images.add(image_url)

    try:
        response = session.get(image_url, timeout=20)

        if response.status_code != 200:
            return

        content_type = response.headers.get("Content-Type", "")

        if not content_type.startswith("image/"):
            return

        image_hash = hashlib.md5(
            response.content
        ).hexdigest()[:10]

        extension = content_type.split("/")[-1].split(";")[0]

        if extension == "jpeg":
            extension = "jpg"

        filename = f"image_{image_hash}.{extension}"

        filepath = os.path.join(SAVE_FOLDER, filename)

        if not os.path.exists(filepath):

            with open(filepath, "wb") as file:
                file.write(response.content)

            print("Downloaded:", filename)

    except Exception as error:
        print("Image error:", error)


while pages_to_visit and len(visited_pages) < MAX_PAGES:

    current_url = pages_to_visit.popleft()

    if current_url in visited_pages:
        continue

    if not allowed_to_visit(current_url):
        print("Skipping disallowed page:", current_url)
        continue

    visited_pages.add(current_url)

    print("\nScanning:", current_url)

    try:

        response = session.get(current_url, timeout=20)

        if response.status_code != 200:
            continue

        soup = BeautifulSoup(response.text, "html.parser")

        # Collect images
        for img in soup.find_all("img"):

            image_url = (
                img.get("src")
                or img.get("data-src")
                or img.get("data-lazy-src")
            )

            if image_url:
                full_url = urljoin(current_url, image_url)

                if urlparse(full_url).netloc == DOMAIN:
                    download_image(full_url)

            # Collect responsive image sources
            srcset = img.get("srcset", "")

            for item in srcset.split(","):

                image_path = item.strip().split(" ")[0]

                if image_path:
                    full_url = urljoin(current_url, image_path)

                    if urlparse(full_url).netloc == DOMAIN:
                        download_image(full_url)

        # Collect internal website pages
        for link in soup.find_all("a", href=True):

            next_url = urljoin(current_url, link["href"])

            parsed = urlparse(next_url)

            if (
                parsed.netloc == DOMAIN
                and parsed.scheme in ("http", "https")
                and parsed.path.lower().endswith(
                    (".html", ".htm", "/")
                )
            ):

                clean_url = parsed._replace(
                    fragment=""
                ).geturl()

                if clean_url not in visited_pages:
                    pages_to_visit.append(clean_url)

        time.sleep(1)

    except Exception as error:
        print("Page error:", error)


print("\nWebsite scanning completed!")
print("Pages scanned:", len(visited_pages))
print("Images found:", len(downloaded_images))
print("Images saved in:", SAVE_FOLDER)