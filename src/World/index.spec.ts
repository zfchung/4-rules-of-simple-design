import { World } from "./index";

describe("Test World class", () => {
  it("should be empty when initialized", () => {
    let world = new World();
    expect(world.livingCells().count()).toEqual(0);
  })


})
