import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api';
import { NotifcationEvents } from '../shared/events';
import { duration } from '../shared/config';

export const NotifyController = {
    send(player: alt.Player, type: number, duration: duration, title: string, message: string): void {
        if (!player?.valid) {
            return;
        }

        Athena.webview.emit(player, NotifcationEvents.CREATE, {
            type: type,
            duration: duration,
            title: title,
            message: message,
        });

        Athena.player.emit.sound2D(player, `@plugins/sounds/fnky-notifications/come-here-notification.ogg`, 1);
    },

    clearAll(player: alt.Player) {
        Athena.webview.emit(player, NotifcationEvents.CLEAR_ALL);
    },
};
