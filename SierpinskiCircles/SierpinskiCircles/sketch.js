/// <reference path="../TSDef/p5.global-mode.d.ts" />

"use strict";

let size = 200;
let rot = 1;

function setup() {
  createCanvas(800, 800, P2D);
  background(0);
  stroke(0, 255, 0);
  noFill();

  angleMode(DEGREES);

  translate(width / 2, height / 1.8);
  ellipse(0, 0, size, size);
}

function draw() {
  translate(width / 2, height / 2);
  rotate(rot);
  rot += 0.3;
  background(0);
  ellipse(0, 0, size, size);
  generateSierpinskiCircles(size);
}

function generateSierpinskiCircles(size) {

  size /= 2;

  if (size > 2) {

    //Top
    push();
    translate(0, -size * 2);
    ellipse(0, 0, size, size);
    generateSierpinskiCircles(size);
    pop();

    //Right
    push();
    rotate(120);
    translate(0, -size * 2);
    ellipse(0, 0, size, size);
    generateSierpinskiCircles(size);
    pop();

    //Left
    push();
    rotate(240);
    translate(0, -size * 2);
    ellipse(0, 0, size, size);
    generateSierpinskiCircles(size);
    pop();

  }

  if (size <= 2) size = 300;
}