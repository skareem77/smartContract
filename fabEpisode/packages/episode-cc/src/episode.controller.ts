import * as yup from 'yup';
import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core';

import { Episode } from './episode.model';

@Controller('episode')
export class EpisodeController extends ConvectorController<ChaincodeTx> {

  @Invokable()
  public async initiageLedger( @Param(Episode) episode: Episode) {
    await episode.save();
  }

  @Invokable()
  public async getEpisode(@Param(yup.string()) id: string) {
    let mockData = []
    return Episode.getOne(id);
  }

  @Invokable()
  public async getAllEpisode() {
    return Episode.getAll();
  }

  @Invokable()
  public async createEpisode(@Param(Episode) episode: Episode) {
      await episode.save();
  }

  @Invokable()
  public async updateEpisode(@Param(yup.string()) id: string, @Param(Episode) episode: Episode) {
    let oldEpisode = await Episode.getOne(id);
    let newEpisode = episode.clone();
    oldEpisode.bundleName = newEpisode.bundleName;
    //copy all
    return episode.save()
  }

}