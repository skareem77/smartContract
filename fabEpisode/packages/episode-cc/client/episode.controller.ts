import * as yup from 'yup';
import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core';

import { Episode } from '../src/episode.model';
import { ControllerAdapter } from '@worldsibu/convector-core-adapter';


export class EpisodeControllerClient extends ConvectorController<ChaincodeTx> {
  public name = 'episode';

  constructor(public adapter: ControllerAdapter, public user?: string) {
    super()
  }

  
  public async initiageLedger( episode: Episode) {

          return await this.adapter.invoke(this.name, 'initiageLedger', this.user, episode);
        
  }

  
  public async getEpisode(id: string) {

          return await this.adapter.invoke(this.name, 'getEpisode', this.user, id);
        
  }

  
  public async getAllEpisode() {

          return await this.adapter.invoke(this.name, 'getAllEpisode', this.user, );
        
  }

  
  public async createEpisode(episode: Episode) {

          return await this.adapter.invoke(this.name, 'createEpisode', this.user, episode);
        
  }

  
  public async updateEpisode(id: string, episode: Episode) {

          return await this.adapter.invoke(this.name, 'updateEpisode', this.user, id, episode);
        
  }
}