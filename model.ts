import { model, Schema, Document } from "mongoose";


interface ISubProduct {
    name: string;
    price: number;
    date: Date;
    description: string;
    imageUrl: string; 
}


const subProductSchema = new Schema<ISubProduct>(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        date: { type: Date, required: true },
        description: { type: String, required: true },
        imageUrl: { type: String, required: true } 
    }
);

// Define the interface for Product
export interface IProduct extends Document {
    name: string;
    price: number;
    date: Date;
    description: string;
    subProducts: ISubProduct[]; 
}


const productSchema = new Schema<IProduct>(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        date: { type: Date, required: true },
        description: { type: String, required: true },
        subProducts: { type: [subProductSchema], required: false } 
    }
);

export const productsModel = model<IProduct>('Product', productSchema);
