import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#4caf50',
                secondary: '#8bc34a',
                accent: '#cddc39',
                error: '#f44336',
                warning: '#ff9800',
                info: '#607d8b',
                success: '#3f51b5'
            }
        }
    },
    icons: {
        iconfont: 'fa',
    },
});
