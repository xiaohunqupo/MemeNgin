//import settings from "electron-settings";
import {
  readProperty,
  readPropertyAsColor,
  readPropertyAsNumber,
} from "./utils/scsshelper";

export class ApplicationSettings {
  colorPrimary: string = "#21252b";
  colorSecondary: string = "#282c34";
  colorBorder: string = "#3e4146";
  colorAccent1: string = "#d52015";
  colorAccent2: string = "#2196f3";
  colorAccent3: string = "#4caf50";
  colorFont: string = "#f8f4f4";

  lineWidthNormal: number = 2;
  lineWidthThick: number = 3;

  widgetRadius: number = 7;
  colThicknessLine: number = 10;
  colThicknessCircle: number = 3;

  colorWidget: string = "#ffffff";
  colorWidgetHighlight: string = "#3282b8";
  colorWidgetShadow: string = "#1e1e1e";
  colorSelectedItem: string = "#bbe1fa";
  colorSelectedItemBackground: string = "#3282b84c";

  widgetThickness: number = 3.0;
  widgetShadowThickness: number = 2.0;

  // for lazy loading after scss available
  load() {
    this.colorWidget = readProperty("colorWidget");
    this.colorWidgetHighlight = readProperty("colorWidgetHighlight");
    this.colorWidgetShadow = readProperty("colorWidgetShadow");
    this.colorSelectedItem = readProperty("colorSelectedItem");
    this.colorSelectedItemBackground = readProperty(
      "colorSelectedItemBackground"
    );
    this.widgetThickness = readPropertyAsNumber("widgetThickness");
    this.widgetShadowThickness = readPropertyAsNumber("widgetShadowThickness");
  }

  static _instance: ApplicationSettings;
  static getInstance(): ApplicationSettings {
    if (!ApplicationSettings._instance) {
      ApplicationSettings._instance = new ApplicationSettings();
    }
    return ApplicationSettings._instance;
  }
}
