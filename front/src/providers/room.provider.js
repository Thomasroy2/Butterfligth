import mocks from './../mocks/mocks';
import ConnectorProvider from './connector.provider';
import LoaderProvider from './loader.provider';

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
        if (data.code === 201) {
          this.room = this.parseRoomBddToFront(data.room);
          connector.default.prototype.setWaitingForPlayer2Listener();
        }
        console.log(data);
      })
    this.room = mocks.room;
    return this.room;
  }

  updateInfos(newRoomInfos) {
    this.room = newRoomInfos;
    return this.room;
  }

  leaveRoom() {
    this.room = null;
    let connector = require('./../providers/connector.provider');
    connector.default.prototype.sendRequest(
      'butterfly',
      {
        roomId: this.room.id
      },
      false,
      ''
    ).then(
      (data) => {
        console.log(data);
      })
  }

  parseRoomBddToFront(roomData) {
    let parsedRoom;
    parsedRoom = {
      id: roomData.id || 0,
      player: this.parseButterflyBddToFront(roomData.butterfly1),
      enemy: this.parseButterflyBddToFront(roomData.butterfly2),
      cashpool: roomData.cashpool
    }

    return parsedRoom;
  }

  parseButterflyBddToFront(butterflyData) {
    
  }

}

export default RoomProvider;