export class World {

}

export class Cell {
  state: Cell.State;
  constructor() {
    this.state = Cell.State.ALIVE;
  }
  location(coordinateX: number, coordinateY: number) {
    return [coordinateX, coordinateY];
  }
}

export namespace Cell {
  export const enum State {
    DEAD = 'DEAD',
    ALIVE = 'ALIVE',
  }
}

let hello = new Cell();

// if (hello.state === 'ALIVE') {
//   console.log(hello.state);
// } else {
//   console.log('LOL');
// }

console.log(hello.location(1, 2));
