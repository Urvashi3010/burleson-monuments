import os
import math
from PIL import Image, ImageDraw
from PIL.ImageOps import contain

SOURCE = "downloaded_images"
OUTPUT = "image_preview"

os.makedirs(OUTPUT, exist_ok=True)

files = []

for filename in os.listdir(SOURCE):
    path = os.path.join(SOURCE, filename)

    try:
        with Image.open(path) as img:
            img.verify()
        files.append(filename)
    except:
        continue

columns = 5
thumb_width = 200
thumb_height = 160
label_height = 35
items_per_sheet = 50

for start in range(0, len(files), items_per_sheet):

    batch = files[start:start + items_per_sheet]

    rows = math.ceil(len(batch) / columns)

    sheet = Image.new(
        "RGB",
        (columns * thumb_width, rows * (thumb_height + label_height)),
        "#eeeae2"
    )

    draw = ImageDraw.Draw(sheet)

    for index, filename in enumerate(batch):

        path = os.path.join(SOURCE, filename)

        with Image.open(path) as img:
            img = img.convert("RGB")
            img.thumbnail((thumb_width - 15, thumb_height - 15))

            x = (index % columns) * thumb_width
            y = (index // columns) * (thumb_height + label_height)

            image_x = x + (thumb_width - img.width) // 2
            image_y = y + (thumb_height - img.height) // 2

            sheet.paste(img, (image_x, image_y))

            draw.text(
                (x + 5, y + thumb_height + 5),
                filename[:25],
                fill="#222222"
            )

    sheet_number = start // items_per_sheet + 1

    sheet.save(
        os.path.join(OUTPUT, f"sheet_{sheet_number}.jpg")
    )

print("Gallery created successfully!")
print("Valid images:", len(files))
print("Preview sheets:", math.ceil(len(files) / items_per_sheet))
print("Location:", OUTPUT)