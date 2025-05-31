import scribus
import random

def load_text(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return f.read().strip()

if scribus.haveDoc():
    page_width, page_height = scribus.getPageSize()

    # Load text content from files
    headline = load_text("/Users/janicebeck/Desktop/Janice/04 Studium_MA/04/02_EXP/I/05_Hierarchy/headline.txt")
    subline = load_text("/Users/janicebeck/Desktop/Janice/04 Studium_MA/04/02_EXP/I/05_Hierarchy/subline.txt")
    copytext = load_text("/Users/janicebeck/Desktop/Janice/04 Studium_MA/04/02_EXP/I/05_Hierarchy/copy.txt")

    # HEADLINE
    width1, height1 = 200, 50
    x1 = random.randint(0, max(0, int(page_width - width1)))
    y1 = random.randint(0, max(0, int(page_height - height1)))
    frame1 = scribus.createText(x1, y1, width1, height1)
    scribus.insertText(headline, 0, frame1)
    scribus.setStyle("HEAD", frame1)

    # SUBLINE
    width2, height2 = 200, 30
    x2 = random.randint(0, max(0, int(page_width - width2)))
    y2 = random.randint(0, max(0, int(page_height - height2)))
    frame2 = scribus.createText(x2, y2, width2, height2)
    scribus.insertText(subline, 0, frame2)
    scribus.setStyle("SUB", frame2)


    # COPYTEXT
    width3, height3 = 200, 200
    x3 = random.randint(0, max(0, int(page_width - width3)))
    y3 = random.randint(0, max(0, int(page_height - height3)))
    frame3 = scribus.createText(x3, y3, width3, height3)
    scribus.insertText(copytext, 0, frame3)
    scribus.setStyle("COPY", frame3)
