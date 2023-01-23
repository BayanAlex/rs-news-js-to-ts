import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '2f1e22a1617140548a75681617121ca8', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
