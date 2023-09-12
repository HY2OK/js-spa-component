import Component from './core/Component.js';
import CounterPage from './pages/CounterPage.js';
import FetchPage from './pages/Fetchpage.js';

export default class App extends Component {
    template() {
        return `
            <main class="counter-app"></main>
        `;
    }

    mounted() {
        const $counterApp = this.$target.querySelector(`.counter-app`);
        //new CounterPage($counterApp);
        new FetchPage($counterApp);
    }
}
