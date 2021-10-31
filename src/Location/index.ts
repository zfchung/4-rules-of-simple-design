export class Location {

  constructor(private coordinateX: number, private coordinateY: number) {
  }

  public coordinate() {
    return [this.coordinateX, this.coordinateY];
  }

  public getNeighbours(): Location[] {
    const neighbourCoordinateList = getNeighbourCoordinates(this.coordinateX, this.coordinateY);
    return neighbourCoordinateList;
  }

}

function getNeighbourCoordinates(coordinateX: number, coordinateY: number): Location[] {
  const coordinateList: Location[] = [];

  for (let x = (coordinateX - 1); x <= (coordinateX + 1); x++) {
    for (let y = (coordinateY - 1); y <= (coordinateY + 1); y++) {
      if (x !== coordinateX || y !== coordinateY) {
        const neighbourCoordinate = new Location(x, y);
        coordinateList.push(neighbourCoordinate);
      }
    }
  }

  return coordinateList;
}
