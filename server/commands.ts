import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api';

import { icons } from '../shared/config';

Athena.commands.register('notify', '/notify message', ['admin'], async (player: alt.Player) => {
    const NotifyAPI = await Athena.systems.plugins.useAPI('notify');

    NotifyAPI.send(
        player,
        icons['icon-warning'],
        2,
        'Hello World',
        'This is a long test message through the Athena Framework which uses a debug command.',
    );
});
