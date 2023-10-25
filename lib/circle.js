const Shape = require("./shape");

class Circle extends Shape{
    constructor(shapeColor = "green", text, textColor = "black"){
        super(text, textColor);
        this.shapeColor = shapeColor;
    }
    
    render() {
        return `<circle cx="150" cy="100" r="90" fill="${this.shapeColor}"/>`
    }
}

module.exports = Circle;