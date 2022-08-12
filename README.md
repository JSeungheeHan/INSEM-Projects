## INSEM-Projects
Collection of programs created for the website of LED Company INSEM

## Table of Contents

1. [Lightbox](#lightbox)
2. [Luminaire](#luminaire)
3. [Labels](#labels)

## Lightbox

A program created to make invoices based on INSEM LED's database for lightboxes. It is written in Javascript, CSS, and HTML. After inputting the appropriate variables, "Add Estimate" will create an estimate of the price.

The program uses a basic algorithm to maximize the amount of lumens per box. Though it tries to use 6-length LED Bars the most, it will use smaller ones to fill in if there is a way to increase the amount of space covered on each side.

Each estimate can be deleted by pressing the delete button the side. If the invoice looks good, the "Export Table" button on the bottom creates a popup that saves the page as a PDF.

<img src = "https://i.imgur.com/xRfrrPl.png" alt = "Bottom View" height="360">

## Luminaire

A program created to create invoices based on INSEM LED's database for all other products. The estimated prices can be found in the beginning of the Javascript file, and is frequently updated. "Add Estimate", again, will estimate the price.

The program uses an autofill system. Since there are a large number of products, simply clicking on the text box will show a list of all products. As you type, it will only display the remaining viable products.

You can also change each estimate by clicking the name, quantity, or price in the estimate box. Again, you can delete contents using the "delete" button. Once everything looks good, you can export the table.

<img src = "https://i.imgur.com/BU1IbZu.png" alt = "Bottom View" height="360">

## Labels

A program created to create a page of labels to make it easier for workers. Previously, the company had to manually change the width and height of the sticker labels to be printed because of the varying sizes and lengths.

This program takes in the appropriate variables for the labels, and creates a page. If needed, you can skip a number of space in between each label if there is a dead spot on the printer. You can also change the sticker text by clicking on it.

Finally, you can print the page by pressing the "Export Page" Button. It will create a popup, and reformat the page to be able to be printed.

<img src = "https://i.imgur.com/JH5AXQ4.png" alt = "Bottom View" height="360">
