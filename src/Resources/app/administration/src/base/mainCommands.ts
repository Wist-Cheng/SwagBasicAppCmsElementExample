import {cms} from '@shopware-ag/meteor-admin-sdk';

const CMS_ELEMENT_NAME = 'simple-textfield';
const CONSTANTS = {
    CMS_ELEMENT_NAME,
    PUBLISHING_KEY: `${CMS_ELEMENT_NAME}__config-element`,
};

void cms.registerCmsElement({
    name: CONSTANTS.CMS_ELEMENT_NAME,
    label: 'Einfaches Textfeld',
    defaultConfig: {
        textValue: {
            source: 'static',
            value: '',
        },
    },
});

export default CONSTANTS;
