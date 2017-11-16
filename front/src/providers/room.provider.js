import mocks from './../mocks/mocks'


class RoomProvider {
    
    room;
    
    getRoom() {
        // TODO: Requete de recup des logs de combat de la room en cours
        this.room = mocks.room;
        return this.room;
    }
    
    updateInfos(newRoomInfos) {
        this.room = newRoomInfos;
        return this.room;
    }

    leaveRoom() {
        this.room = null;
        // TODO: requete de leaveRoom
    }
}

export default RoomProvider;