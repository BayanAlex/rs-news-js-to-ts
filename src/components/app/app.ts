import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { ApiSourcesData, ApiArticlesData } from '../api/api';

class App {
    controller: Readonly<AppController>;
    view: Readonly<AppView>;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const element = document.querySelector('.sources');
        if (element)
            element.addEventListener('click', (e: Event) =>
                this.controller.getNews(e, (data) => this.view.drawNews(<ApiArticlesData>data))
            );
        this.controller.getSources((data): void => this.view.drawSources(<ApiSourcesData>data));
    }
}

export default App;
