export class Location {
  coordinateX: number;
  coordinateY: number;
  coordinate: number[];

  constructor(coordinateX: number, coordinateY: number){
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
    this.coordinate = [this.coordinateX, this.coordinateY];
  }

}
