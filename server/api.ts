import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api';
import { NotifyController } from './controller';
import { duration, icons } from '../shared/config';

export const NotifyFunctions = {
    send,
    clearAll,
};

function send(player: alt.Player, type: icons, duration: duration, title: string, message: string) {
    return NotifyController.send(player, type, duration, title, message);
}

function clearAll(player: alt.Player) {
    return NotifyController.clearAll(player);
}

declare global {
    export interface ServerPluginAPI {
        ['notify']: typeof NotifyFunctions;
    }
}

Athena.systems.plugins.addAPI('notify', NotifyFunctions);
