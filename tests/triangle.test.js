const Triangle = require("../lib/triangle");

describe("Triangle", ()=> {
    it("should render properly", () => {
        let testHtml = `<polygon points=" 150, 0 275,200 25,200" fill="green"/>`;
        let triangle = new Triangle();
        expect(triangle.render()).toEqual(testHtml);
    })
    it("should change color to blue", () => {
        let testHtml = `<polygon points=" 150, 0 275,200 25,200" fill="blue"/>`
        let triangle = new Triangle();
        triangle.setColor("blue");
        expect(triangle.render()).toEqual(testHtml);
    })
    it("should renderInnerHtml properly", () => {
        let testHtml = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="black"></text>`;
        let triangle = new Triangle();
        expect(triangle.renderInnerHtml()).toEqual(testHtml);
    })
    it("should initialize properly", () => {
        let testRender = `<polygon points=" 150, 0 275,200 25,200" fill="blue"/>`;
        let testInner = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="red">svg</text>`;
        let triangle = new Triangle("blue", "svg", "red");
        expect(triangle.render()).toEqual(testRender);
        expect(triangle.renderInnerHtml()).toEqual(testInner);
    })
})