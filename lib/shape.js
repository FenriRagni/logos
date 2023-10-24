class Shape {
    constructor(text, textColor = "black"){
        this.text = text;
        this.textColor = textColor;
    }
    
    render() {
        return `<text> x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }

    setColor(color){
        this.textColor = color;
    }
}