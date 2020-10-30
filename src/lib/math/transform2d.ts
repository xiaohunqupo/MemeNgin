import { Vector2, Matrix3 } from "@math.gl/core";

export class Transform2D {
  position: Vector2;
  scale: Vector2;
  rotation: number;

  constructor(p: Vector2, s: Vector2, r: number) {
    this.position = new Vector2(p);
    this.scale = new Vector2(s);
    this.rotation = r;
  }

  clone(): Transform2D {
    return new Transform2D(this.position, this.scale, this.rotation);
  }

  setPosition(pos: Vector2) {
    this.position = new Vector2(pos);
  }

  setScale(s: Vector2) {
    this.scale = new Vector2(s);
  }

  setRotation(r: number) {
    this.rotation = r;
  }

  toMatrix(): Matrix3 {
    return new Matrix3()
      .translate([this.position[0], this.position[1]])
      .rotate(this.rotation)
      .scale([this.scale[0], this.scale[1]]);
  }
}