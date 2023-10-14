import * as Athena from '@AthenaServer/api';

import './api';
import './commands';

const PLUGIN_NAME = 'fnky-notifications';
Athena.systems.plugins.registerPlugin(PLUGIN_NAME, () => {});
