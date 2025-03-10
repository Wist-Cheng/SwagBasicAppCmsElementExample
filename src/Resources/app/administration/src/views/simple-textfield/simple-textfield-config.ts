import {defineComponent, ref, computed, onMounted} from 'vue';
import {data} from "@shopware-ag/meteor-admin-sdk";
import CONSTANTS from "../../base/mainCommands";

export default defineComponent({
    template: `
        <div>
            <h2>Textfeld CMS Element</h2>
            <input v-model="textValue" type="text" placeholder="Gib hier deinen Text ein"/>
        </div>
    `,
    setup() {
        const element = ref(null);
        const textValue = computed({
            get: () => element.value?.config?.textValue?.value || '',
            set: (value) => {
                if (element.value) {
                    element.value.config.textValue.value = value;
                    data.update({id: CONSTANTS.PUBLISHING_KEY, data: element.value});
                }
            }
        });
        onMounted(async () => {
            element.value = await data.get({id: CONSTANTS.PUBLISHING_KEY});
        });
        return {element, textValue};
    }
});
