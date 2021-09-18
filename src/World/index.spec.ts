import { World } from "./index";

describe("Test World class", () => {
  it("should be empty when initialized", () => {
    let world = new World();
    expect(world.livingCells().count).toEqual(0);
  })

  it("should be able to add new a cell", () => {
    let world = new World();
    world.setLivingAt(1,1);
    expect(world.livingCells().count).toEqual(1);
  })
})
