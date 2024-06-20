import { HomeZone } from "./enum/home-zone";
import { Home as Home } from "./home";

export class Address {
    id: number | null;
    street: string;
    number: string;
    cep: string;
    neighbourhood: string;
    city: string;
    zone: HomeZone;
    observation: string;
    homes: Home[];

    constructor(
        id: number | null,
        street: string,
        number: string,
        cep: string,
        neighbourhood: string,
        city: string,
        zone: HomeZone,
        observation: string,
        homes: Home[]
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
