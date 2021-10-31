import {Location} from "./index";


describe("Testing Location class", () => {
  it("should return a list of locations that are considered neighbours", () => {
    // Given
    const location = new Location(1, 1);
    // When
    // Then
    /*
    (0,0) (1,0) (2,0)
    (0,1) (1,1) (2,1)
    (0,2) (1,2) (2,2)
    */
    const expectedResult = [
      new Location(0, 0),
      new Location(1, 0),
      new Location(2, 0),
      new Location(0, 1),
      new Location(2, 1),
      new Location(0, 2),
      new Location(1, 2),
      new Location(2, 2),
    ]
    expect(location.getNeighbours()).toEqual(expect.arrayContaining(expectedResult));
  })
})
