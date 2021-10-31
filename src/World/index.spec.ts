import {World} from "./index";
import {Location} from "../Location";

describe("Test World class", () => {
  it("should be empty when initialized", () => {
    let world = new World();
    expect(world.isEmpty).toEqual(true);
  });

  describe("Test World.empty() method", () => {
    it("should return empty world", () => {
      // Given
      let world = new World();
      world.setLivingAt(new Location(1, 1));
      expect(world.isEmpty).toEqual(false);
      // When
      world.empty;
      // Then
      expect(world.isEmpty).toEqual(true);
    })
  })

  it("should stays empty after a tick", () => {
    let world = new World().empty;
    const nextWorld = world.tick();
    expect(nextWorld.isEmpty).toEqual(true);
  });

  it("should be not empty after adding a new cell", () => {
    let world = new World();
    world.setLivingAt(new Location(1, 1));
    expect(world.isEmpty).toEqual(false);
  })

  it("should be able to add new cells", () => {
    let world = new World();
    world.setLivingAt(new Location(1, 1));
    expect(world.aliveAt(new Location(1, 1))).toEqual(true);
  })
})
