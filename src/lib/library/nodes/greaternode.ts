import { LogicDesignerNode, LogicType } from "@/lib/designer/logicdesignernode";
import { Property, PropertyType } from "@/lib/designer/properties";
export class GreaterNode extends LogicDesignerNode {
  aProp: Property;
  bProp: Property;

  init() {
    this.title = "Greater";
    this.logicType = LogicType.Property;
    this.outputType = PropertyType.Bool;

    this.aProp = this.addFloatProperty("valueA", "A", 0.0, 0.0, 1.0);
    this.bProp = this.addFloatProperty("valueB", "B", 1.0, 0.0, 1.0);
    this.aProp.setExposed(true);
    this.bProp.setExposed(true);
  }

  calculated() {
    let valA = this.getPropertyValue(0);
    let valB = this.getPropertyValue(1);
    return valA > valB ? true : false;
  }
}