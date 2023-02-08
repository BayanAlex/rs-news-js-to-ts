import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { ApiSourcesData, ApiArticlesData } from '../api/api';

class App {
    private controller: Readonly<AppController>;
    private view: Readonly<AppView>;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const element: HTMLElement | null = document.querySelector('.sources');
        if (element)
            element.addEventListener('click', (e: Event) =>
                this.controller.getNews(e, (data): void => this.view.drawNews(<ApiArticlesData>data))
            );
        this.controller.getSources((data): void => this.view.drawSources(<ApiSourcesData>data));
    }
}

export default App;
