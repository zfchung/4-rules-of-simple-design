export class Location {
  coordinateX: number;
  coordinateY: number;

  constructor(coordinateX: number, coordinateY: number){
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
  }

  coordinate(){
    return [this.coordinateX, this.coordinateY]
  }
}
