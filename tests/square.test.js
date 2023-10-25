const Square = require("../lib/square");

describe("Square", ()=> {
    it("should render properly", () => {
        let testHtml = `<polygon points=" 50, 0 250,0 250,200 50,200" fill="green"/>`;
        let square = new Square();
        expect(square.render()).toEqual(testHtml);
    })
    it("should change color to blue", () => {
        let testHtml = `<polygon points=" 50, 0 250,0 250,200 50,200" fill="blue"/>`
        let square = new Square();
        square.setColor("blue");
        expect(square.render()).toEqual(testHtml);
    })
    it("should renderInnerHtml properly", () => {
        let testHtml = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="black"></text>`;
        let square = new Square();
        expect(square.renderInnerHtml()).toEqual(testHtml);
    })
    it("should initialize properly", () => {
        let testRender = `<polygon points=" 50, 0 250,0 250,200 50,200" fill="blue"/>`;
        let testInner = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="red">svg</text>`;
        let square = new Square("blue", "svg", "red");
        expect(square.render()).toEqual(testRender);
        expect(square.renderInnerHtml()).toEqual(testInner);
    })
})