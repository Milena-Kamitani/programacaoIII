import express, {Request, Response} from 'express';
import Makemodel from './schema/make.schema'
import makeSchema from './schema/make.schema';

const router = express.Router()

router.post('/makes', async( req: Request, res: Response) => {
  const maquiagem = await Makemodel.create(req.body)
  res.status(201).json(maquiagem)
})

router.get('/makes', async( req: Request, res: Response)=>  {
  const findedMake = await Makemodel.findById(req.params.id)
  res.json(findedMake)
  return findedMake
})

router.put('/makes:id',  async (req: Request, res: Response) => {
  const updatedMake = await Makemodel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedMake);
})

router.put ('/makes',async (req: Request, res: Response) =>{
  await Makemodel.findByIdAndDelete(req.params.id)
  return 'Maquiagem removida com Sucesso'
})



export default router