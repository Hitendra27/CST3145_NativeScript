import Vue from 'nativescript-vue';

import WebShop from './components/App';

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

    template: `
        <Frame>
            <WebShop />
        </Frame>`,

    components: {
        WebShop
    }
}).$start();