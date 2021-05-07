import mongoose from 'mongoose';
import { formerSchema } from './former.js';

const ToySchema = new Schema({ name: String, });

export const themeSchema = new mongoose.Schema({
    name: String,
    days: Number,
    formers: [
        formerSchema
    ],
});


export default mongoose.model('Theme', themeSchema);