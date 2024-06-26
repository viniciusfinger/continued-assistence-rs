import { Necessity } from "./necessity";
import { Person } from "./person";
import { HomeStructure } from "./home-structure";

export class Home {
  id: number | null;
  complement: string;
  isRented: boolean;
  necessities: Necessity[];
  persons: Person[];
  averageFamilyIncome: number;
  structure: HomeStructure;

  constructor(
    id: number | null,
    complement: string,
    isRented: boolean,
    necessities: Necessity[],
    persons: Person[],
    averageFamilyIncome: number,
    structure: HomeStructure
  ) {
    this.id = id;
    this.complement = complement;
    this.isRented = isRented;
    this.necessities = necessities;
    this.persons = persons;
    this.averageFamilyIncome = averageFamilyIncome;
    this.structure = structure;
  }
}
