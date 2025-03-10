import { createApp } from 'vue';
import { location } from '@shopware-ag/meteor-admin-sdk';
import SimpleTextFieldElement from './views/simple-textfield/simple-textfield-element';
import SimpleTextFieldConfig from './views/simple-textfield/simple-textfield-config';
import SimpleTextFieldPreview from './views/simple-textfield/simple-textfield-preview';

location.startAutoResizer();

const app = createApp({
    components: {
        SimpleTextFieldElement,
        SimpleTextFieldConfig,
        SimpleTextFieldPreview
    },
    template: `
        <SimpleTextFieldElement v-if="location.is('simple-textfield-element')"/>
        <SimpleTextFieldConfig v-else-if="location.is('simple-textfield-config')"/>
        <SimpleTextFieldPreview v-else-if="location.is('simple-textfield-preview')"/>
    `
});

app.mount('#app');
