import { Document, Schema, Model, model } from 'mongoose';
import shortid from 'shortId';
import { getRandomInt } from '../utils';

export interface StoreType {
    date: Date,
    original: string;
    shortened: string;
    visits: number;
}
  
export type StoreDoc = StoreType & Document
  
type StoreModel = Model<StoreDoc>

const StoreSchema = new Schema<StoreDoc, StoreModel>({
    date: {
        type: Date,
        default: () => new Date()
    },
    original: {
        type: String,
        required: true,
        unique: true,
    },
    shortened: {
        type: String,
        default: shortid.generate, 
        unique: true,
    },
    visits: {
        type: Number,
        default: 0
    }
});

export default model("Store", StoreSchema);
