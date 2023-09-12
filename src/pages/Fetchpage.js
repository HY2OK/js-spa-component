import Component from '../core/Component.js';
import List from '../components/LIst.js';
import http from '../api/http.js';

export default class FetchPage extends Component {
    setup() {
        this.$state = {
            dummyList: [],
        };
    }

    template() {
        return `
            <h1>Fetch page</h1>
            <div class="fetch-api"></div>`;
    }

    mounted() {
        const fetchDummy = async () => {
            const dummyPosts = await http.get(`https://jsonplaceholder.typicode.com/posts`);
            this.setState({ dummyList: [...dummyPosts] });
        };

        if (this.$state.dummyList.length === 0) {
            fetchDummy();
        } else {
            const $fetchApi = this.$target.querySelector('.fetch-api');
            new List($fetchApi, this.$state);
        }
    }
}
