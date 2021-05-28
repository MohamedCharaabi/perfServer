import express from 'express';
import mongoose from 'mongoose';

import Session from '../models/Session.js'
import Partticipant from '../models/participant.js'

const router = express.Router();



export const monthStat = async (req, res) => {

    const topTheme = await Session.aggregate([
        {
            $group: {
                _id: '$theme',
                count: { $sum: 1 },

            },

        },
        {
            $sort: { count: -1 },
        },
        { $limit: 5 }
    ]);

    const monthSesion = await Session.aggregate([
        {
            $group: {
                _id: { $substr: ['$date', 5, 2] },
                nubr: { $sum: 1 }
            }
        },
        {
            $sort: { _id: 1 }
        }
    ]);

    res.status(200).json({ monthSesion, topTheme })
}


export default router;