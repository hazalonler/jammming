import assert from 'assert';
import fs from 'fs';
import { object } from 'prop-types';
let path,obj;

describe('Spotify' , () => {
    describe('getTrack', () => {
      it('getTrack function has to return an object', () => {

        path = './Spotify.js';
        obj= {id: '1234', name:'new', artist: "new", album:'new', uri: '1234'}
  
        fs.appendFileSync(path, obj);
  
        const content = fs.readFileSync(path);
        assert.equal(typeof(content), object);

        fs.unlinkSync(path);
      });
    });
  });