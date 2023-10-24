const Shape = require("./shape");

class Circle extends Shape{
    constructor(shapeColor = "blue", text, textColor = "black"){
        super(text, textColor);
        this.shapeColor =shapeColor;
    }
    
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/> ${this.renderInnerHtml()}`
    }
}

module.exports = Circle;