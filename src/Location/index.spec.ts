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
    const expectedResult = [[0, 0], [1, 0], [2, 0], [0, 1], [2, 1], [0, 2], [1, 2], [2, 2]]
    expect(location.neighbours()).toEqual(expect.arrayContaining(expectedResult));
  })
})
