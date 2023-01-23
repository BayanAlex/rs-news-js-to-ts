import AppLoader from './appLoader';
import { ApiEndpoint, Callback } from '../api/api';

class AppController extends AppLoader {
    public getSources(callback: Callback) {
        super.getResp(
            {
                endpoint: ApiEndpoint.Sources,
            },
            callback
        );
    }

    public getNews(e: Event, callback: Callback): void {
        let target: Readonly<EventTarget> | null = e.target;
        const newsContainer: EventTarget | null = e.currentTarget;
        if (!(newsContainer instanceof Element)) return;
        while (target !== newsContainer) {
            if (target instanceof Element) {
                if (target.classList.contains('source__item')) {
                    const sourceId: string | null = target.getAttribute('data-source-id');
                    if (sourceId) {
                        if (newsContainer.getAttribute('data-source') !== sourceId) {
                            newsContainer.setAttribute('data-source', sourceId);
                            super.getResp(
                                {
                                    endpoint: ApiEndpoint.Everything,
                                    options: {
                                        sources: sourceId,
                                    },
                                },
                                callback
                            );
                        }
                        return;
                    }
                }
                target = target.parentNode;
            } else return;
        }
    }
}

export default AppController;
