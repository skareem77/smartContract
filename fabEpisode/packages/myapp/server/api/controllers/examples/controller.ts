import { EpisodeController } from '../../../smartContractControllers';
import { Request, Response } from 'express';

export class Controller {

  async all(_: Request, res: Response): Promise<void> {
    let contrl = await EpisodeController.init();
    let results = await contrl.getAllEpisode();
    console.log("Get All Episodes", results)
    res.send(results)
  }

  async byId(req: Request, res: Response): Promise<void> {
    let cntrl = await EpisodeController.init();
    let result = await cntrl.getEpisode(req.params.id);
    console.log("Id:", req.params.id, "Result:", result)
    res.json(result)
  }

  async create(req: Request, res: Response): Promise<void> {
    let cntrl = await EpisodeController.init();
    let result = await cntrl.createEpisode(req.body);
    console.log("create:", result)
    res.send(201)
  }

  async update(req: Request, res: Response): Promise<void> {
    let cntrl = await EpisodeController.init();
    await cntrl.updateEpisode(req.params.id, req.body);
    res.send("success")
  }
}
export default new Controller();
