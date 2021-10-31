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

<details>
<summary>Click to expand!</summary>

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
it("should stays empty after a tick", () => {
  let world = new World().empty;
  const nextWorld = world.tick();
  expect(nextWorld.isEmpty).toEqual(true);
});
```

Ask for an empty world explicitly.

Guideline: There must be an explicitly named builder method on the class to create an object in a specific, valid state.

</details>

### Breaking Abstraction Level [review required]

- Code sample using Jest Mock required

<details>
<summary>Click to expand!</summary>

```javascript
it("should be not empty after adding a new cell", () => {
  let world = new World();
  let location = new Location(1, 1).coordinate;
  world.setLivingAt(location);
  expect(world.isEmpty).toEqual(false);
})
```

In the example above, we are testing the behavior of the world, but we are including details that it isn't concerned
with. By typing the test to the implementation of the 2 dimensions (1,1) rather than the Location abstraction, we are
laying the groundwork for fragile tests. Change the topology (e.g. to 3 dimensions) and the tests fail.

To hide the details of the topology from the world object is to use a stand-in, a test double for the location object.
This can be as simple as creating a new, plain object.

```javascript
it("should be not empty after adding a new cell", () => {
  let world = new World();
  const dummyLocation = [1, 1];
  world.setLivingAt(dummyLocation);
  expect(world.isEmpty).toEqual(false);
})
```

</details>

### Naive Duplication

<details>
<summary>Click to expand!</summary>

```javascript
export class Cell {
  get aliveInNextGeneration() {
    if (this.isAlive) {
      return this.numberOfNeighbours == 2 || this.numberOfNeighbours == 3;
    } else {
      return this.numberOfNeighbours == 3
    }
  }
}
```

Refactoring from above to below code by eliminating "duplication of code" without understanding the knowledge behind
introduces confusion of the expression of the code. DRY principle states:
> Every piece of _knowledge_ has one and only one representation

Knowledge ≠ Code. Just combining code that appears similar and combining them misses the point of the DRY principle.

The 3s are not the same.

```javascript
export class Cell {
  get aliveInNextGeneration() {
    return (this.isAlive && this.numberOfNeighbours == 2) || this.numberOfNeighbours == 3;
  }
}
```

After refactoring to below, we can see clearly that hte 3s represent different things. This is the power of paying close
attention to the expressiveness of our code before blindly trying to eliminate duplication.

```javascript
export class Cell {
  get aliveInNextGeneration() {
    if (this.isAlive) {
      return this.isStableNeighborhood();
    } else {
      return this.isGeneticallyFertileNeighbourhood();
    }
  }
}
```

</details>

### Procedural Polymorphism

<details>
<summary>Click to expand!</summary>

```javascript
class Cell {
  aliveInNextGeneration() {
    if (this.isAlive) {
      return this.isStableNeighborhood();
    } else {
      return this.isGeneticallyFertileNeighbourhood();
    }
  }
}
```

In the above example, we are providing a form of polymorphism with aliveInNextGeneration(). When this method is called,
the caller can expect one of two different behaviors: either the ruleset for living cells or ruleset for dead cells.
Which ruleset gets run is based on an internal state, hidden from the outside world. In a way, this is good; the caller
shouldn't have to care.

When we use a branching construct inside a method like this, we run into several problems. We talked about the
expressiveness problem, but we lso have issues with changing this code. If we are going to add a state, or change rules
around the states, we will find ourselves modifying existing code. Not just existing code, but code that is unrelated to
the change we are making. If we add a state, why would we force ourselves to modify the code related to the other
states? When we begin to overload concepts in our system, especially method names, we run into this "everything goes
here" situation.

In general, if statements (or other branching constructs) are imperative, procedural mechanisms. While they do provide a
form of polymorphism, they provide a form that author call Procedural Polymorphism. It satisfies our need for selecting
a behavior, but their procedural background leads to tightly-coupled code, joining these often unrelated behaviors
together.

Luckily, object-based and object-oriented languages provide a preferred method for polymorphism, what author calls
Type-Based Polymorphism. The idea is one central to object-oriented design: use different types for the different
branches. The general approach is to analyze what the branching condition is, identify the concepts, and reify them into
first-class concepts in our system.

In our example, we can take our state and raise it to types: LivingCell and DeadCell.

```javascript
class LivingCell {
  isALiveInNextGeneration() {
    return this.isStableNeighborhood();
  }
}

class DeadCell {
  isALiveInNextGeneration() {
    return this.isGeneticallyFertileNeighbourhood();
  }
}
```

A huge benefit of this is that we also have provided ourself a safer method for adjusting the different states a call
can be in. If we need to add a new one, we add a new class. We extend our system, rather than modify it. This is an
example of *open-closed principle*.

```javascript
// example of a new state
class ZombieCell {
  isALiveInNextGeneration() {
    // new, possibily more complex rules
  }
}
```

It also provides a clear method for fixing the names of our methods to match the actual concepts in our system, focusing
on specific behaviors, rather than a generic idea of isAliceInNextGeneration().

```javascript
class LivingCell {
  public isStayingAlive() {
    return this.numberOfNeighbours == 2 || this.numberOfNeighbours == 3;
  }
}

class DeadCell {
  public isComingToLive() {
    return this.numberOfNeighbours == 3;
  }
}
```

At this point, we now have very explicit statements of the intent of the types and their behaviors. But, changing these
names takes away the polymorphism! We no longer can call a single method and have the appropriate rules applied. This is
true. This could be an indication that the idea of having initially-desired polymorphism isn't a good design. Naturally
it depends on how we end up using the cells, but focusing heavily on explicitness in this fashion can raise flags about
desired or "planned" designs.

</details>
