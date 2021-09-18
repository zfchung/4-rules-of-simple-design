import { World } from '../index';

// describe('Test World class', () => {
//   it('should have no cells in a New world', () => {
//     const world = new World();
//     expect(world.countOf.Cell).toBe(0);
//   });
// });

describe('Test Living Cell class', () => {
  it('should die when there are 0 neighbour', () => {
    expect(LivingCell.positionAt(1,1).state).toEqual("dead");
  })
})
