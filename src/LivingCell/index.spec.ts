import {LivingCell} from './index'

describe('Test Living Cell class', () => {

  it('should have location information', () => {
    const cell = new LivingCell();
    expect(cell.positionAt(1, 1)).toEqual([1, 1]);
  });

  // it('should die when there are 0 neighbour', () => {
  //   expect(LivingCell.positionAt(1,1).state).toEqual("dead");
  // })
})
