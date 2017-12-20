import AttackProvider from './attack.provider';
import {
  updateFightroomData as updateFightroomDataAction,
  setWinner as setWinnerAction
} from './../actions';
import store from '../store/index';

class RoomProvider {

  room;
  isFirstPlayer;

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
        switch (data.code) {
          case 201:
            this.isFirstPlayer = true;
            this.updateInfos(data.room);
            connector.setWaitingForPlayer2Listener();
            connector.setAttackListener();
            return this.room;
          case 202:
            this.isFirstPlayer = false;
            this.updateInfos(data.room);
            connector.setAttackListener();
            return this.room;
          default:
            Promise.reject(data);
        }
      })
  }

  updateInfos(newRoomInfos) {
    console.log(this.isFirstPlayer);
    this.room = this.parseRoomBddToFront(newRoomInfos, this.isFirstPlayer);
    console.log(this.room);
    store.dispatch(updateFightroomDataAction(this.room));
    if (newRoomInfos.winner) {
      const won = (newRoomInfos.winner === this.room.player.id);
      AttackProvider.setCanAttack(false);
      store.dispatch(setWinnerAction(true, won));
    }
    return this.room;
  }

  parseRoomBddToFront(roomData, isFirstPlayer) {
    let battleLog = [];
    if (this.room && this.room.battleLog.length !== 0) {
      this.room.battleLog.forEach(
        (roomBattleLog) => {
          battleLog.push(roomBattleLog);
        }
      );
    }
    if (roomData.battleLog) {
      battleLog.push(roomData.battleLog);
    }
    let parsedRoom;

    const player = this.parseButterflyBddToFront((isFirstPlayer ? roomData.butterfly1 : roomData.butterfly2), isFirstPlayer);
    const enemy = roomData.butterfly2 ? this.parseButterflyBddToFront((!isFirstPlayer ? roomData.butterfly1 : roomData.butterfly2), !isFirstPlayer) : null;

    parsedRoom = {
      id: roomData.id || 0,
      player: player,
      enemy: enemy,
      battleLog: battleLog || [],
      winner: roomData.winner || null,
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