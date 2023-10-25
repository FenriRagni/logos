const Shape = require("./shape");

class Triangle extends Shape{
    constructor(shapeColor = "green", text, textColor = "black"){
        super(text, textColor);
        this.shapeColor = shapeColor;
    }
    
    render() {
        return `<polygon points=" 150, 0 275,200 25,200" fill="${this.shapeColor}"/>`
    }
}

module.exports = Triangle;