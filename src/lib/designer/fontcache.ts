import opentype from "opentype.js";
import hash from "object-hash";
import path from "path";
import { Dictionary } from "dictionary-types";

const fontPath = "assets/fonts/Roboto/Roboto-Regular.ttf";

export function CalcFontPath(pathToFont: string) {
  //return `./assets/nodes/${node}.png`;
  if (process.env.NODE_ENV == "production")
    return "file://" + path.join(process.env.BASE_URL, pathToFont);
  return path.join(process.env.BASE_URL, pathToFont);
}

async function loadFont(url): Promise<any> {
  return await new Promise((resolve, reject) =>
    opentype.load(url, (err, font) => (err ? reject(err) : resolve(font)))
  );
}

export class FontCache {
  private static _instance: FontCache = new FontCache();
  private _fonts: Dictionary<any> = {};
  private _fallbackFont: any;

  constructor() {
    //let fontPath = CalcFontPath("fonts/open-sans-latin-400.33543c5c.woff2");
    //let fontkit = require("fontkit");
    //let font = fontkit.openSync(fontPath);

    let self = this;
    opentype.load(fontPath, function(err, font) {
      if (err) {
        alert("Font could not be loaded: " + err);
      } else {
        self._fallbackFont = font;
      }
    });
  }

  static getInstance() {
    if (!FontCache._instance) {
      FontCache._instance = new FontCache();
    }
    return FontCache._instance;
  }

  get fallbackFont() {
    return this._fallbackFont;
  }

  async getFont(fontUrl: string): Promise<any> {
    const key = hash(fontUrl);

    // use if font exits on the cache
    if (this._fonts[key]) {
      return this._fonts[key];
    } else {
      let font = await loadFont(fontUrl);
      if (font) {
        this._fonts[key] = font;
        return this._fonts[key];
      } else {
        return this._fallbackFont;
      }
    }
  }
}
