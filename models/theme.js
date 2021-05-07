import mongoose from 'mongoose';
import { formerSchema } from './former.js';


export const themeSchema = new mongoose.Schema({
    name: String,
    days: Number,
    formers: [
        {
            type: String,
            ref: 'Former'
        }
    ],
});


export default mongoose.model('Theme', themeSchema);