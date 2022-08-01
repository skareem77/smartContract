// tslint:disable:no-unused-expression
import { join } from 'path';
import { expect } from 'chai';
import * as uuid from 'uuid/v4';
import { MockControllerAdapter } from '@worldsibu/convector-adapter-mock';
import { ClientFactory, ConvectorControllerClient } from '@worldsibu/convector-core';
import 'mocha';

import { Episode, EpisodeController } from '../src';

describe('Episode', () => {
  let adapter: MockControllerAdapter;
  let episodeCtrl: ConvectorControllerClient<EpisodeController>;
  
  before(async () => {
    // Mocks the blockchain execution environment
    adapter = new MockControllerAdapter();
    episodeCtrl = ClientFactory(EpisodeController, adapter);

    await adapter.init([
      {
        version: '*',
        controller: 'EpisodeController',
        name: join(__dirname, '..')
      }
    ]);

    adapter.addUser('Test');
  });
  
  it('should create a default model', async () => {
    const modelSample = new Episode({
      id: uuid(),
      name: 'Test',
      created: Date.now(),
      modified: Date.now()
    });

    await episodeCtrl.$withUser('Test').create(modelSample);
  
    const justSavedModel = await adapter.getById<Episode>(modelSample.id);
  
    expect(justSavedModel.id).to.exist;
  });
});