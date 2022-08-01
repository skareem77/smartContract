import * as fs from 'fs';
import { join } from 'path';
import Client from 'fabric-client';

import { IEnrollmentRequest, IRegisterRequest } from 'fabric-ca-client';

export type UserParams = IRegisterRequest;
export type AdminParams = IEnrollmentRequest;

export namespace SelfGenContext {

    interface IdentityFiles {
      privateKey: string;
      signedCert: string;
    }

    export async function getClient() {
        const contextPath = join(__dirname, process.env.KEYSTORE + '/' + process.env.USERCERT);
        let keyStore:string = process.env.KEYSTORE!;
        
        fs.readFile(contextPath, 'utf8', async function (err) {
          if (err) {
            // doesnt exist! Create it.
            const client = new Client();
    
            console.log('Setting up the cryptoSuite ..');
            // ## Setup the cryptosuite (we are using the built in default s/w based implementation)
            const cryptoSuite = Client.newCryptoSuite();
            
            cryptoSuite.setCryptoKeyStore(Client.newCryptoKeyStore({
                path: keyStore
            }));
    
            client.setCryptoSuite(cryptoSuite);
    
            console.log('Setting up the keyvalue store ..');
    
            // ## Setup the default keyvalue store where the state will be stored
            const store = await Client.newDefaultKeyValueStore({
              path: keyStore
            });
    
            client.setStateStore(store);
    
            console.log('Creating the admin user context ..');
            const path = '/Users/kshaik/hyperledger-fabric-network/artifacts/crypto-config/peerOrganizations/org1.hurley.lab/users/Admin@org1.hurley.lab/msp'
            const privateKeyFile = fs.readdirSync(path + '/keystore')[0];
    
            // ###  GET THE NECESSRY KEY MATERIAL FOR THE ADMIN OF THE SPECIFIED ORG  ##
            const cryptoContentOrgAdmin: IdentityFiles = {
              privateKey: path + '/keystore/' + privateKeyFile,
              signedCert: path + '/signcerts/Admin@org1.hurley.lab-cert.pem'
            };
    
            await client.createUser({
              username: process.env.USERCERT!,
              mspid: `${process.env.ORGCERT}MSP`,
              cryptoContent: cryptoContentOrgAdmin,
              skipPersistence: false
            });
    
            return client;
          } else {
            console.log('Context exists');
          }
        });
    
      }
}