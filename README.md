## Examples

### Test Names Should Influence Object's API

<details>
<summary>Click to expand!</summary>

```javascript
it("should be empty when initialized", () => {
  let world = new World();
  expect(world.livingCells().count).toEqual(0);
})

it("should be able to add new a cell", () => {
  let world = new World();
  world.setLivingAt(1, 1);
  expect(world.livingCells().count).toEqual(1);
})
```

The test name talks about an empty world. The test code, however, has no concept of an empty world.

When we write our test, we should be spending time on our test names. We want them to describe both the behavior of the
system and the way we expect to use the component under test.

```javascript
it("should be empty when initialized", () => {
  let world = new World();
  expect(world.isEmpty()).toEqual(true);
})

it("should be not empty after adding a new cell", () => {
  let world = new World();
  let location = new Location(1, 1).coordinate;
  world.setLivingAt(location);
  expect(world.isEmpty()).toEqual(false);
})
```

The above sample hides the internals of the object, while building up a usable API for the rest of the system to
consume.

Focusing on the symmetry between a good test name and the code under tests is a subtle design technique. Next time when
we are flying through our TDD cycle, take a moment to make sure that we are actually testing what we say we are testing.
</details>

### Duplication of Knowledge about Topology

<details>
<summary>Click to expand!</summary>

```javascript
class World {
  setLivingAt(coordinateX: number, coordinateY: number) {
    const newLivingCell = new LivingCell();
    newLivingCell.positionAt(coordinateX, coordinateY);
    return newLivingCell;
  }
}
```

```javascript
export class World {
  setLivingAt(location: number[]) {
    const newLivingCell = new LivingCell();
    newLivingCell.positionAt(location);
    return newLivingCell;
  }
}
```

</details>

### Behavior Attractors

<details>
<summary>Click to expand!</summary>

```javascript
class Location {
  neighbours() {
    let neighbourCoordinateList = getNeighbourCoordinates(this.coordinateX, this.coordinateY);
    return neighbourCoordinateList;
  }
}
```

</details>
