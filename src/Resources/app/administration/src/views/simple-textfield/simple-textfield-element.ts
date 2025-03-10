import {defineComponent} from 'vue';

export default defineComponent({
    template: `
        <div>
            <h2>CMS Element: Einfaches Textfeld</h2>
            <p>{{ textValue }}</p>
        </div>
    `,
    props: {
        textValue: String
    }
});
