import mongoose from 'mongoose';
import { formerSchema } from './former.js';

const ToySchema = new Schema({ name: String, ref: 'Former' });

export const themeSchema = new mongoose.Schema({
    name: String,
    days: Number,
    formers: [
        { ref: 'Former' }
    ],
});


export default mongoose.model('Theme', themeSchema);