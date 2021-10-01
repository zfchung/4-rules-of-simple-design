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

### Testing State vs Testing Behavior

<details>
<summary>Click to expand!</summary>
Focus on the behavior rather than the state of the objects. It is about only building the things that are absolutely
needed and only at the time they are needed. This way, we end up with a system that has just enough code to support our
use cases.

What behaviour of my system require this? -

```javascript
it("should be empty when initialized", () => {
  let world = new World();
  expect(world.isEmpty()).toEqual(true);
});
```

The empty world should tick into another empty world.

```javascript
it("should stays empty after a tick", () => {
  // Write test
})
```

Since the test dictates that we start with an empty world, we should probably postpone this test and make sure that a
new world is empty, so we can write the above (origin) test

```javascript
it("should be empty when initialized", () => {
  let world = new World();
  expect(world.isEmpty()).toEqual(true);
});

it("should stays empty after a tick", () => {
  let world = new World();
  const nextWorld = world.tick();
  expect(nextWorld.isEmpty()).toEqual(true);
})
```

</details>

### Don't Have Tests Depend on Previous Tests

```javascript
it("should stays empty after a tick", () => {
  let world = new World();
  const nextWorld = world.tick();
  expect(nextWorld.isEmpty()).toEqual(true);
})
```

How do we know that a newly-initialized World is empty? The test name indicates that we are starting with an empty
world, but the test code does not specify this explicitly. This Test implicitly depends on the validity of a different,
previous test: there is an assumption here that new worlds are empty. This causes a subtle, but important, problem; that
lack of explicitness, combined with the coupling to the previous test, makes this test contribute to a fragile test
suite.

```javascript

```

Ask for an empty world explicitly.

Guideline: There must be an explicitly named builder method on the class to create an object in a specific, valid state.
