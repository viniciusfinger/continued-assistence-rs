import { HomeMaterial } from "../enum/home-material";
import { FloorMaterial } from "../enum/floor-material";
import { NecessityDTO } from "./necessity-dto";
import { PersonDTO } from "./person-dto";

export class HomeDTO {
    id: number;
    complement: string;
    isRented: boolean;
    necessities: NecessityDTO[];
    persons: PersonDTO[];
    averageFamilyIncome: number;
    material: HomeMaterial;
    floorMaterial: FloorMaterial;
    hasWaterTank: boolean;
    hasWaterPipe: boolean;
    hasSepticTank: boolean;
    roomsNumber: number;
    bathroomsNumber: number;

    constructor(
        id: number,
        complement: string,
        isRented: boolean,
        necessities: NecessityDTO[],
        persons: PersonDTO[],
        averageFamilyIncome: number,
        material: HomeMaterial,
        floorMaterial: FloorMaterial,
        hasWaterTank: boolean,
        hasWaterPipe: boolean,
        hasSepticTank: boolean,
        roomsNumber: number,
        bathroomsNumber: number
    ) {
        this.id = id;
        this.complement = complement;
        this.isRented = isRented;
        this.necessities = necessities;
        this.persons = persons;
        this.averageFamilyIncome = averageFamilyIncome;
        this.material = material;
        this.floorMaterial = floorMaterial;
        this.hasWaterTank = hasWaterTank;
        this.hasWaterPipe = hasWaterPipe;
        this.hasSepticTank = hasSepticTank;
        this.roomsNumber = roomsNumber;
        this.bathroomsNumber = bathroomsNumber;
    }
}
