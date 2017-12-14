import mocks from './../mocks/mocks';
import ConnectorProvider from './connector.provider';


class RoomProvider {
  
  room;
  constructor() {
    
  }
  
  getRoom() {
    let connector = require('./../providers/connector.provider');
    connector.default.prototype.sendRequest(
      'room',
      {
        combat: true
      },
      true,
      'Recherche d\'une salle de combat'
    )
    .then(
      (data) => {
        console.log(data);
      }
    )
    this.room = mocks.room;
    return this.room;
  }
  
  updateInfos(newRoomInfos) {
    this.room = newRoomInfos;
    return this.room;
  }
  
  leaveRoom() {
    this.room = null;
    ConnectorProvider.sendRequest(
      'butterfly',
      'DELETE',
      {
        roomId: this.room.id
      },
      false,
      ''
    ).then(
      (data) => {
        console.log(data);
      }
    )
  }
}

export default RoomProvider;