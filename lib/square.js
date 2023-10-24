const Shape = require("./shape");

class Square extends Shape{
    constructor(shapeColor = "blue", text, textColor = "black"){
        super(text, textColor);
        this.shapeColor = shapeColor;
    }
    
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points=" 50, 0 250,0 250,200 50,200" fill="${this.shapeColor}" />
                ${this.renderInnerHtml()}
                </svg>`
    }
}


module.exports = Square;