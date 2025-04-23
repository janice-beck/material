// === Export as PDF ===
var doc = app.activeDocument;
var filePath = new File(Folder.desktop + "/Exported_" + new Date().getTime() + ".pdf");
var preset = app.pdfExportPresets.item("[Druckausgabequalität]");
doc.exportFile(ExportFormat.PDF_TYPE, filePath, false, preset);

// === Clear All Pages Except First ===
while (doc.pages.length > 1) {
    doc.pages[1].remove(); // Always remove the 2nd page until only one remains
}

// === Remove all items from the remaining page ===
var pageItems = doc.pages[0].allPageItems;
for (var i = pageItems.length - 1; i >= 0; i--) {
    pageItems[i].remove();
}