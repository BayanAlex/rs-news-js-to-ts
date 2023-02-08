import News from './news/news';
import Sources from './sources/sources';
import { ApiArticle, ApiSource, ApiSourcesData, ApiArticlesData } from '../api/api';

export class AppView {
    private news: Readonly<News>;
    private sources: Readonly<Sources>;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: ApiArticlesData): void {
        const values: Array<ApiArticle> = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: ApiSourcesData): void {
        const values: Array<ApiSource> = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
