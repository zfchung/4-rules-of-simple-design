import { addition } from "./index";

describe("Test addition function", () => {
  it("should return empty string as 0", () => {
    expect(addition("")).toBe(0);
  });
});
