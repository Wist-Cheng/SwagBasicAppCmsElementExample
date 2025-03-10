import 'regenerator-runtime/runtime';
import {location} from '@shopware-ag/meteor-admin-sdk';

console.log('yalla');

if (location.is(location.MAIN_HIDDEN)) {
    import('./base/mainCommands');
} else {
    import('./viewRenderer');
}
