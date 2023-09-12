import Router from './Router.js';
import Component from './core/Component.js';
import CounterPage from './pages/CounterPage.js';
import FetchPage from './pages/Fetchpage.js';
import createPage from './pages/index.js';

export default class App extends Component {
    template() {
        return `
            <header>
                <a href="#/">Home</a>
                <a href="#/counter">Counter</a>
                <a href="#/fetch">Fetch</a>
            </header>
            <main class="counter-app"></main>
        `;
    }

    mounted() {
        const $main = this.$target.querySelector('main');
        const pages = createPage($main);

        const router = new Router($main);
        router.addRoute('#/', pages.home);
        router.addRoute('#/counter', pages.counter);
        router.addRoute('#/fetch', pages.fetch);
        router.start();
    }
}
