import express from 'express'
import * as controller from './controller.js'

export const router = express.Router();

router.get('/',controller.getbyall);
router.get('/:id',controller.getbyid);
router.post('/',(req,res)=>res.json('inserimento gioiello'));
router.put('/:id',(req,res)=>res.json('modifica totale gioiello'));
router.patch('/:id',(req,res)=>res.json('modifica parziale gioiello'));
router.delete('/:id',controller.deletebyid);