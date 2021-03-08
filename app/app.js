import Vue from 'nativescript-vue';

import PetShop from './components/App';

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

    template: `
        <Frame>
            <PetShop />
        </Frame>`,

    components: {
        PetShop
    }
}).$start();