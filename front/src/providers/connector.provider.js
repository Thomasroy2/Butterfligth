import Settings from './../settings/settings';
import io from 'socket.io-client';
import LoaderProvider from './loader.provider';
import AttackProvider from './attack.provider';

class ConnectorProvider {

  socket;

  setConnection() {
    this.socket = io(Settings.API_URL + ':' + Settings.API_PORT);
  }

  sendRequest(requestName, requestParams, useLoader, loaderMessage) {
    return new Promise((resolve, reject) => {
      if (useLoader) {
        LoaderProvider.setLoader(useLoader, loaderMessage);
      }
      this.socket.emit(requestName, requestParams,
        (data) => {
          if (useLoader) {
            LoaderProvider.setLoader(false, '');
          }
          resolve(data);
        }
      );
    });
  }

  setWaitingForPlayer2Listener() {
    const roomProvider = require('./room.provider').default.prototype;
    LoaderProvider.setLoader(true, 'En attente d\'un autre joueur')
    this.socket.on('newPlayer', (newRoomInfos) => {
      roomProvider.updateInfos(newRoomInfos);
      AttackProvider.setCanAttack(true);
      LoaderProvider.setLoader(false, 'En attente d\'un autre joueur')
      this.socket.removeListener('newPlayer');
    });
  }

  setAttackListener() {
    const roomProvider = require('./room.provider').default.prototype;
    this.socket.on('attackUsed', (roomInfo) => {
      roomProvider.updateInfos(roomInfo);
      // roomProvider.updateBetRoomInfos(roomInfo);
      if (!roomInfo.winner) {
        AttackProvider.setCanAttack(true);
      }
    })
  }

  setChatListener()
  {
    const roomProvider = require('./room.provider').default.prototype;
    this.socket.on('newMessage', (message) =>{
      
    })
  }
}

export default ConnectorProvider;