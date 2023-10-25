const Circle = require("../lib/circle");

describe("Circle", ()=> {
    it("should render properly", () => {
        let testHtml = `<circle cx="150" cy="100" r="90" fill="green"/>`;
        let circle = new Circle();
        expect(circle.render()).toEqual(testHtml);
    })
    it("should change color to blue", () => {
        let testHtml = `<circle cx="150" cy="100" r="90" fill="blue"/>`
        let circle = new Circle();
        circle.setColor("blue");
        expect(circle.render()).toEqual(testHtml);
    })
    it("should renderInnerHtml properly", () => {
        let testHtml = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="black"></text>`;
        let circle = new Circle();
        expect(circle.renderInnerHtml()).toEqual(testHtml);
    })
    it("should initialize properly", () => {
        let testRender = `<circle cx="150" cy="100" r="90" fill="blue"/>`;
        let testInner = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="red">svg</text>`;
        let circle = new Circle("blue", "svg", "red");
        expect(circle.render()).toEqual(testRender);
        expect(circle.renderInnerHtml()).toEqual(testInner);
    })
})