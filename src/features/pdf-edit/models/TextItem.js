class TextItem {
    constructor(id, name, xPos, yPos, rotation, fontSize, isBold, isCursive, isUnderlined, isHidden) {
      this.id = id;
      this.name = name;
      this.xPos = xPos;
      this.yPos = yPos;
      this.rotation = rotation;
      this.fontSize = fontSize;
      this.isBold = isBold;
      this.isCursive = isCursive;
      this.isUnderlined = isUnderlined;
      this.isHidden = isHidden;
    }
  }

  export default TextItem;