import {
    changeAttackState as changeAttackStateAction
} from './../actions';
import store from '../store/index';

class AttackProvider {

    /**
     *
     * @param {*boolean} canAttack Affiche ou non la modal des attacks
     */
    static setCanAttack(canAttack) {
        store.dispatch(changeAttackStateAction(canAttack));
    }

    /**
     *
     * @param {*Number} attackId Id of the attack to use
     */
    static launchAttack(attackId) {
        this.setCanAttack(false);
        let connector = require('./../providers/connector.provider').default.prototype;
        let roomProvider = require('./../providers/room.provider').default.prototype;
        let params = {
            roomId: roomProvider.room.id,
            attackerId: roomProvider.room.player.id,
            targetId: roomProvider.room.enemy.id,
            skillId: Number(attackId)
        };
        connector.sendRequest(
            'attack',
            params,
            true,
            ''
        ).then(
            (room) => {
                roomProvider.updateInfos(room);
            }
        );
    }
}

export default AttackProvider;