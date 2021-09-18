import { World } from "./index";

describe("Test World class", () => {
  it("should be empty when initialized", () => {
    let world = new World();
    expect(world.isEmpty()).toEqual(true);
  })

  it("should be not empty after adding a new cell", () => {
    let world = new World();
    world.setLivingAt(1,1);
    expect(world.isEmpty()).toEqual(false);
  })
})
