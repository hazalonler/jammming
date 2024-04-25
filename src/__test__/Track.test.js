
import { equal } from 'assert';

describe('Track' , () => {
  describe('check if the track has correct length', () => {
    it('should have just 5 properties', () => {

      const track = {name: 'test1', id: '123m', artist: 'ndksan', album: 'dsajs', uri: 'ndksd'};
      const trackArray = Object.keys(track);

      // One track object has to just have 5 properties 

      equal(trackArray.length, 5)

    });
  });
});