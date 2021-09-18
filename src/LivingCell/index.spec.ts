import {LivingCell} from './index'
import {Location} from "../Location";

describe('Test Living Cell class', () => {

  it('should have location information', () => {
    const cell = new LivingCell();
    let location = new Location(1,1).coordinate();
    expect(cell.positionAt(location)).toEqual([1, 1]);
  });

  // it('should die when there are 0 neighbour', () => {
  //   expect(LivingCell.positionAt(1,1).state).toEqual("dead");
  // })
})
