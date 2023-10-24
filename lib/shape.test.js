const Shape = require("./shape");

describe("Shape", () => {
    const shape = new Shape();
    it("should render returns error", () =>{
        const err = new Error(`Children must create own render()`);
        expect(shape.render).toThrow(err);
    })
    it("should have an empty string for text", () => {
        expect(shape.text).toBe("");
    })
    it("should return falsy for shapeColor", () => {
        expect(shape.shapeColor).toBe("green");
    })
    const shape2 = new Shape();
    shape2.setColor("blue");
    it("should return truthy for shapeColor", ()=> {
        expect(shape2.shapeColor).toBe("blue");
    })
})