class Shape {
    constructor(text = "", textColor = "black"){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = "green";
    }
    
    render() {
        throw new Error(`Children must create own render()`);
    }

    renderInnerHtml() {
        return `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }

    setColor(newColor){
        this.shapeColor = newColor;
    }
}

module.exports = Shape;