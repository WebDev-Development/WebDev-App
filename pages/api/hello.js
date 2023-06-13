// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sendEmail from './sendEmail'; 

import { Router } from 'express';

const router = Router();

router.use('/sendEmail', sendEmail);

export default router;

// export default function handler(req, res) {
//   // res.status(200).json({ name: 'John Doe' })
// }
