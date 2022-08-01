import { BaseStorage } from '@worldsibu/convector-core-storage';
import { CouchDBStorage } from '@worldsibu/convector-storage-couchdb';
import { Episode as EpisodeModel } from 'episode-cc/client';

BaseStorage.current = new CouchDBStorage({
    host: process.env.COUCHDB_HOST,
    protocol: process.env.COUCHDB_PROTOCOL,
    port: process.env.COUCHDB_PORT
}, process.env.COUCHDBVIEW);

export namespace Models {
    EpisodeModel.getAll
    export const Episode = EpisodeModel;
}