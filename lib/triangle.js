const Shape = require("./shape");

class Triangle extends Shape{
    constructor(shapeColor = "green", text, textColor = "black"){
        super(text, textColor);
        this.shapeColor = shapeColor;
    }
    
    render() {
        return `<polygon points="25, 50 150, 200 275, 50" fill="${this.shapeColor}"/>`
    }
}

module.exports = Triangle;