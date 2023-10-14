import * as alt from 'alt-client';
import * as AthenaClient from '@AthenaClient/api';
import { NotifcationEvents } from '../shared/events';
import { icons, duration } from '../shared/config';

export const NotifyFunctions = {
    send,
    clearAll,
};

function send(type: icons, duration: duration, title: string, message: string) {
    return AthenaClient.webview.emit(NotifcationEvents.CREATE, {
        type: type,
        duration: duration,
        title: title,
        message: message,
    });
}

function clearAll() {
    return AthenaClient.webview.emit(NotifcationEvents.CLEAR_ALL);
}

declare global {
    export interface ClientPluginAPI {
        ['notify']: typeof NotifyFunctions;
    }
}

AthenaClient.systems.plugins.addAPI('notify', NotifyFunctions);

alt.on('enteredVehicle', (veh: alt.Vehicle, seat: number) => {
    send(icons['icon-checkmark'], 10, 'ClientAPI-Test', 'You entered a vehicle.');
});
