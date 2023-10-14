import * as AthenaClient from '@AthenaClient/api';

import { onTicksStart } from '@AthenaClient/events/onTicksStart';
import { ConsoleCommander } from '@AthenaShared/utility/consoleCommander';
import { NotifcationEvents } from '../shared/events';
import { registerPersistentPage } from '@AthenaClient/webview';

import './api';

const PAGE_NAME = 'Notifications';

const Internal = {
    init() {
        const _page = new AthenaClient.webview.Page({
            name: PAGE_NAME,
            callbacks: {
                onReady: async () => {},
                onClose: () => {},
            },
        });

        registerPersistentPage(PAGE_NAME);
        ConsoleCommander.registerConsoleCommand('/history', Internal.getHistory);
    },
    getHistory() {
        AthenaClient.webview.emit(NotifcationEvents.GET_HISTORY);
    },
};

onTicksStart.add(Internal.init);
