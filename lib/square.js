const Shape = require("./shape");

class Square extends Shape{
    constructor(shapeColor = "green", text, textColor = "black"){
        super(text, textColor);
        this.shapeColor = shapeColor;
    }
    
    render() {
        return `<polygon points=" 50, 0 250,0 250,200 50,200" fill="${this.shapeColor}"/>` 
    }
}


module.exports = Square;