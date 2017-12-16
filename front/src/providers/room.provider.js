import AttackProvider from './attack.provider';
import {
  updateFightroomData as updateFightroomDataAction
} from './../actions';
import store from '../store/index';

class RoomProvider {

  room;
  pageId;

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
          this.pageId = pageId;
          this.updateInfos(data.room);
          connector.setWaitingForPlayer2Listener();
          connector.setAttackListener();
          AttackProvider.setCanAttack(true);
          return this.room;
        } else {
          Promise.reject(data);
        }
      })
  }

  updateInfos(newRoomInfos) {
    this.room = this.parseRoomBddToFront(newRoomInfos, this.pageId);
    store.dispatch(updateFightroomDataAction(this.room));
    return this.room;
  }

  // leaveRoom() {
  //   this.room = null;
  //   let connector = require('./../providers/connector.provider').default.prototype;
  //   connector.sendRequest(
  //     'butterfly',
  //     {
  //       roomId: this.room.id
  //     },
  //     false,
  //     ''
  //   ).then(
  //     (data) => {
  //     })
  // }

  parseRoomBddToFront(roomData, pageId) {
    let battleLog = [];
    if (this.room && this.room.battleLog.length !== 0) {
      this.room.battleLog.map(
        (roomBattleLog) => {
          battleLog.push(roomBattleLog);
        }
      );
    }
    if (roomData.battleLog) {
      battleLog.push(roomData.battleLog);
    }
    console.log(battleLog);
    let parsedRoom;
    parsedRoom = {
      id: roomData.id || 0,
      player: this.parseButterflyBddToFront((pageId ? roomData.butterfly1 : roomData.butterfly2), pageId),
      enemy: this.parseButterflyBddToFront((!pageId ? roomData.butterfly1 : roomData.butterfly2), !pageId),
      battleLog: battleLog || [],
      cashpool: roomData.cashpool
    }

    // if (roomData.battleLog != null) {
    //   parsedRoom.battleLog.push(roomData.battleLog);
    // } else {
    //   parsedRoom.battleLog = [];
    // }

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