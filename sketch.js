// Set up canvas size and pixel dimensions
const canvasSize = 400;
const pixelSize = 20;
const numPixels = canvasSize / pixelSize;

// Define the two colors
const color1 = [255, 255, 255]; // White
const color2 = [0, 0, 0]; // Black

// Initialize the canvas with color1
let canvas = [];
for (let i = 0; i < numPixels; i++) {
  canvas[i] = [];
  for (let j = 0; j < numPixels; j++) {
    canvas[i][j] = color1;
  }
}
let p5canvas;
// Set up p5.js canvas
function setup() {
  p5canvas = createCanvas(canvasSize, canvasSize);
  background(255);
}

// Draw the canvas
function draw() {
  for (let i = 0; i < numPixels; i++) {
    for (let j = 0; j < numPixels; j++) {
      fill(canvas[i][j]);
      stroke(0);
      rect(i * pixelSize, j * pixelSize, pixelSize, pixelSize);
    }
  }
}

// Change the color of the clicked pixel
function mouseClicked() {
  const x = Math.floor(mouseX / pixelSize);
  const y = Math.floor(mouseY / pixelSize);

  if (x >= 0 && x < numPixels && y >= 0 && y < numPixels) {
    if (canvas[x][y] === color1) {
      canvas[x][y] = color2;
    } else {
      canvas[x][y] = color1;
    }
  }
}

// Save the canvas as a JSON file
function onSaveCanvas() {
  saveCanvas("canvas", "jpg");
  // saveJSON(canvas, 'pixel_canvas.json');
}

// Delete the entire canvas
function deleteCanvas() {
  canvas = [];
  for (let i = 0; i < numPixels; i++) {
    canvas[i] = [];
    for (let j = 0; j < numPixels; j++) {
      canvas[i][j] = color1;
    }
  }
}

// Attach save and delete buttons to HTML elements
function attachButtons() {
  const saveButton = createButton("Save");
  saveButton.mousePressed(onSaveCanvas);

  const deleteButton = createButton("Delete");
  deleteButton.mousePressed(deleteCanvas);
}

// Run the sketch
function setup() {
  createCanvas(canvasSize, canvasSize);
  attachButtons();
}

// Draw the canvas
function draw() {
  background(255);
  for (let i = 0; i < numPixels; i++) {
    for (let j = 0; j < numPixels; j++) {
      fill(canvas[i][j]);
      stroke(0);
      rect(i * pixelSize, j * pixelSize, pixelSize, pixelSize);
    }
  }
}
