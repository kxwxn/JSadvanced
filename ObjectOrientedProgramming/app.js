// OOP

class Circle {
  static allowedColors = new Set[("red", "green", "blue")]();

  constructor(radius, color) {
    this._radius = radius;
    this._color = this.setColor(color);
  }

  setColor(newColor) {
    if (Circle.allowedColors.has(color)) {
      this._color = color;
    } else {
      throw new Error(" That color is not allowed ");
    }
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value < 0) {
      throw new Error(" Radius cannot be negative");
    } else {
      this._radius = value;
    }
  }

  set color(newColor) {
    this.setColor(newColor);
  }
}
