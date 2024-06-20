import { FloorMaterial } from "./enum/floor-material";
import { HomeMaterial } from "./enum/home-material";

export class HomeStructure {
  material: HomeMaterial;
  floorMaterial: FloorMaterial;
  hasWaterTank: boolean;
  hasWaterPipe: boolean;
  hasSepticTank: boolean;
  roomsNumber: number;
  bathroomsNumber: number;

  constructor(
    material: HomeMaterial,
    floorMaterial: FloorMaterial,
    hasWaterTank: boolean,
    hasWaterPipe: boolean,
    hasSepticTank: boolean,
    roomsNumber: number,
    bathroomsNumber: number
  ) {
    this.material = material;
    this.floorMaterial = floorMaterial;
    this.hasWaterTank = hasWaterTank;
    this.hasWaterPipe = hasWaterPipe;
    this.hasSepticTank = hasSepticTank;
    this.roomsNumber = roomsNumber;
    this.bathroomsNumber = bathroomsNumber;
  }
}
