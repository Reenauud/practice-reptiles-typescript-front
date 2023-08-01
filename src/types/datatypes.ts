
export type Images = {
    key : number,
    uri : string;
}

export type EquipmentForSale = {
    id: number;
    equipmentName: string;
    equipmentDescription: string;
    equipmentDetails: string;
    equipmentPrice: number;
    equipmentPicture: string;
}

export type AnimalsIds = {
    id: number;
    name: string;
}

export type AnimalForSale = {
    id: number;
    name: string;
    description: string;
    animalPicture: string;
    quantity: number;
    price: number;
}