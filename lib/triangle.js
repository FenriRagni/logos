const Shape = require("./shape");

class Triangle extends Shape{
    constructor(shapeColor = "green", text, textColor = "black"){
        super(text, textColor);
        this.shapeColor = shapeColor;
    }
    
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points=" 150, 0 275,200 25,200" fill="${this.shapeColor}"/> 
                ${this.renderInnerHtml()}
                </svg>`
    }
}

module.exports = Triangle;