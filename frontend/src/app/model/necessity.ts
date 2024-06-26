import { NecessityCategory } from "./enum/necessity-category";

export class Necessity {
    id: number | null;
    description: string;
    quantity: number;
    category: NecessityCategory;

    constructor(id: number | null, description: string, quantity: number, category: NecessityCategory) {
        this.id = id;
        this.description = description;
        this.quantity = quantity;
        this.category = category;
    }
}
