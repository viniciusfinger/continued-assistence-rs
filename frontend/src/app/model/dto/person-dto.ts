import { BiologicalSex } from "../enum/biological-sex";
import { PersonRace } from "../enum/person-race";
import { Schooling } from "../enum/schooling";

export class PersonDTO {
    id: number;
    name: string;
    cpf: string;
    birthDate: Date;
    race: PersonRace;
    biologicalSex: BiologicalSex;
    phone: string;
    hasDocuments: boolean;
    collaborateFamilyIncome: boolean;
    profession: string;
    schooling: Schooling;
    dependentsNumber: number;
    isPCD: boolean;

    constructor(
        id: number,
        name: string,
        cpf: string,
        birthDate: Date,
        race: PersonRace,
        biologicalSex: BiologicalSex,
        phone: string,
        hasDocuments: boolean,
        collaborateFamilyIncome: boolean,
        profession: string,
        schooling: Schooling,
        dependentsNumber: number,
        isPCD: boolean
    ) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.birthDate = birthDate;
        this.race = race;
        this.biologicalSex = biologicalSex;
        this.phone = phone;
        this.hasDocuments = hasDocuments;
        this.collaborateFamilyIncome = collaborateFamilyIncome;
        this.profession = profession;
        this.schooling = schooling;
        this.dependentsNumber = dependentsNumber;
        this.isPCD = isPCD;
    }
}
