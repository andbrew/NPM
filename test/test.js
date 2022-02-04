const assert = require("assert");
const add = require("../index");
describe("Testing add function", () => {
	it("5 + 8 = 13", () => {
		assert.equal(13, add(5, 8));
	});
	it("2 + 2 != 3", () => {
		assert.notEqual(3, add(2, 2));
	});
});
