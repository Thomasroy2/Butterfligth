import Settings from './../settings/settings';
import io from 'socket.io-client';
import LoaderProvider from './loader.provider';
import AttackProvider from './attack.provider';
import { setInterval } from 'timers';

class ConnectorProvider {

  socket;

  setConnection() {
    this.socket = io(Settings.API_URL + ':' + Settings.API_PORT);
    console.log('1?');
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
    // LoaderProvider.setLoader(true, 'En attente d\'un autre joueur')
    this.socket.on('playerJoined', () => {
      LoaderProvider.setLoader(false, 'En attente d\'un autre joueur')
      this.socket.removeListener('playerJoined');
    });
  }

  setAttackListener() {
    console.log('1');
    this.socket.on('attackUsed', () => {
      console.log('2?');
      AttackProvider.setCanAttack(false);
    })
  }
}

export default ConnectorProvider;