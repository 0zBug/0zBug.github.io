
function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  textureGraphic = createGraphics(400, 400);
  textureGraphic.background(0, 11, 19);
  textureGraphic.textSize(400);
  textureGraphic.text('😡', -75, 340);
}

function draw() {
  let tick = millis() / 350;
  background(1, 11, 19);

  translate(sin(tick / 2) * (width / 3), cos(tick / 3) * (height / 3), -height / 2);
  rotateZ(tick / 2);
  rotateY(tick);
  texture(textureGraphic);

  box(height / 2);
}
