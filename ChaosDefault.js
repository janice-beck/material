// === Simple random number function ===
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// === Random page size in mm ===
var pageWidth = randomBetween(100, 420);   // width between 120mm and 300mm
var pageHeight = randomBetween(100, 420);  // height between 200mm and 420mm


var marginTop = randomBetween(5, 40);
var marginBottom = randomBetween(5, 40);
var marginLeft = randomBetween(5, 40);
var marginRight = randomBetween(5, 40);


var preset = app.documentPresets.add({
    pageWidth: pageWidth,
    pageHeight: pageHeight,
    top: marginTop,
    bottom: marginBottom,
    left: marginLeft,
    right: marginRight
});

// === Create document with the preset ===
var doc = app.documents.add(true, preset);


// === Random Font Setup ===
var allFonts = app.fonts.everyItem().name;
var chosenFont = allFonts[Math.floor(Math.random() * allFonts.length)];
var fontSize = Math.floor(Math.random() * 40) + 8; // 8–48pt

// Add a text frame with random font + size
var tf = doc.pages[0].textFrames.add({
    geometricBounds: [marginTop, marginLeft, "150mm", "150mm"],
    contents: "is this hacking?"
});
var text = tf.parentStory.texts[0];
text.appliedFont = chosenFont;
text.pointSize = fontSize;



var doc = app.activeDocument;
var swatches = doc.swatches;

for (var i = swatches.length - 1; i >= 0; i--) {
    var swatch = swatches[i];

    try {
        var name = swatch.name;

        // Skip protected swatches (German names)
        if (
            name === "Keine" ||
            name === "Papier" ||
            name === "Schwarz" ||
            name === "[Registrierung]"
        ) {
            continue; // skip this swatch
        }

        // Try to remove if valid
        if (swatch.isValid) {
            swatch.remove();
        }

    } catch (e) {
        // do nothing, safe to ignore
    }
}

function randomColorValue() {
    return Math.floor(Math.random() * 256);
}

for (var i = 0; i < 4; i++) {
    var color = app.activeDocument.colors.add();
    color.space = ColorSpace.RGB;
    color.model = ColorModel.process;
    color.colorValue = [randomColorValue(), randomColorValue(), randomColorValue()];
    color.name = "RGB_" + (i + 1);
}

