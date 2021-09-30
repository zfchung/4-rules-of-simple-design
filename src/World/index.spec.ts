import {World} from "./index";
import {Location} from "../Location";
import {LivingCell} from "../LivingCell";

describe("Test World class", () => {
  it("should be empty when initialized", () => {
    let world = new World();
    expect(world.isEmpty()).toEqual(true);
  });

  describe("Test World.empty() method", () => {
    it("should return empty world", () => {
      let world = new World();
      let location_1 = new Location(1, 1).coordinate;
      let location_2 = new Location(1, 0).coordinate;
      world.setLivingAt(location_1);
      world.setLivingAt(location_2);
      expect(world.isEmpty()).toEqual(false);
      world.empty();
      console.log("After world.empty(): ", world.livingCells().count);
      expect(world.isEmpty()).toEqual(true);
    })
  })

  it("should stays empty after a tick", () => {
    let world = new World();
    const nextWorld = world.tick();
    expect(nextWorld.isEmpty()).toEqual(true);
  })

  it("should be not empty after adding a new cell", () => {
    let world = new World();
    let location = new Location(1, 1).coordinate;
    world.setLivingAt(location);
    expect(world.isEmpty()).toEqual(false);
  })

  it("should be able to add new cells", () => {
    let world = new World();
    let location = new Location(1, 1).coordinate;
    world.setLivingAt(location);
    expect(world.aliveAt(location)).toEqual(true);
  })
})
