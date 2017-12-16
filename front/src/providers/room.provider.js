import mocks from './../mocks/mocks';
import LoaderProvider from './loader.provider';
import AttackProvider from './attack.provider';

class RoomProvider {

  room;

  constructor() {
  }


  getRoom(pageId) {
    let connector = require('./../providers/connector.provider').default.prototype;
    return connector.sendRequest(
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
          this.room = this.parseRoomBddToFront(data.room, pageId);
          connector.setWaitingForPlayer2Listener();
          connector.setAttackListener();
          AttackProvider.setCanAttack(true);
          return this.room;
        } else {
          console.log(data);
          Promise.reject(data);
        }
      })
  }

  updateInfos(newRoomInfos) {
    this.room = this.parseRoomBddToFront(newRoomInfos);
    return this.room;
  }

  leaveRoom() {
    this.room = null;
    let connector = require('./../providers/connector.provider').default.prototype;
    connector.sendRequest(
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

  parseRoomBddToFront(roomData, pageId) {
    let parsedRoom;
    parsedRoom = {
      id: roomData.id || 0,
      player: this.parseButterflyBddToFront((pageId ? roomData.butterfly1 : roomData.butterfly2), pageId),
      enemy: this.parseButterflyBddToFront((!pageId ? roomData.butterfly1 : roomData.butterfly2), !pageId),
      battleLog: roomData.battleLog || [],
      cashpool: roomData.cashpool
    }

    return parsedRoom;
  }

  parseButterflyBddToFront(butterflyData, me) {
    let parsedButterfly;
    parsedButterfly = {
      id: butterflyData.id || 0,
      name: butterflyData.butterfly.name || '',
      catchphrase: butterflyData.butterfly.catchphrase || '',
      hp: butterflyData.hp || 0,
      maxHp: butterflyData.butterfly.hp || 0,
      attack: butterflyData.butterfly.attack || 0,
      defense: butterflyData.butterfly.defense || 0,
      luck: butterflyData.butterfly.luck || 0,
      speed: butterflyData.butterfly.speed || 0,
      mortality: butterflyData.butterfly.mortality || 0,
      unique_skill: butterflyData.butterfly.unique_skill || 0,
      pic: me ? 'image2.png' : 'image4.png',
      attacks: []
    }
    parsedButterfly.attacks.push({
      attackId: butterflyData.skill1 ? (butterflyData.skill1.id || 0) : 0,
      label: butterflyData.skill1 ? butterflyData.skill1.name || 'attack 1' : 'attack 1',
    })
    parsedButterfly.attacks.push({
      attackId: butterflyData.skill2 ? (butterflyData.skill2.id || 0) : 0,
      label: butterflyData.skill2 ? butterflyData.skill2.name || 'attack 2' : 'attack 2',
    })
    parsedButterfly.attacks.push({
      attackId: butterflyData.skill3 ? (butterflyData.skill3.id || 0) : 0,
      label: butterflyData.skill3 ? butterflyData.skill3.name || 'attack 3' : 'attack 3',
    })
    parsedButterfly.attacks.push({
      attackId: butterflyData.skill4 ? (butterflyData.skill4.id || 0) : 0,
      label: butterflyData.skill4 ? butterflyData.skill4.name || 'attack 4' : 'attack 4',
    })
    return parsedButterfly;
  }

}

export default RoomProvider;