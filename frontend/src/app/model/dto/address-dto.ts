import { HomeZone } from "../enum/home-zone";
import { HomeDTO } from "./home-dto";

export class AddressDTO {
    id: number;
    street: string;
    number: string;
    cep: string;
    neighbourhood: string;
    city: string;
    zone: HomeZone;
    observation: string;
    homes: HomeDTO[];

    constructor(
        id: number,
        street: string,
        number: string,
        cep: string,
        neighbourhood: string,
        city: string,
        zone: HomeZone,
        observation: string,
        homes: HomeDTO[]
    ) {
        this.id = id;
        this.street = street;
        this.number = number;
        this.cep = cep;
        this.neighbourhood = neighbourhood;
        this.city = city;
        this.zone = zone;
        this.observation = observation;
        this.homes = homes;
    }
}
