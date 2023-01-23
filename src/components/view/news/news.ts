import './news.css';
import { ApiArticle } from '../../api/api';

class News {
    public draw(data: ApiArticle[]): void {
        const news: ApiArticle[] = data.length >= 10 ? data.filter((_item: ApiArticle, idx: number) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement | null;
        if (!newsItemTemp) return;
        let element: HTMLElement | null;

        news.forEach((item: ApiArticle, idx: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;
            if (!newsClone) return;

            if (idx % 2) {
                element = newsClone.querySelector('.news__item');
                if (element) element.classList.add('alt');
            }

            element = newsClone.querySelector('.news__meta-photo');
            if (element) {
                element.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }
            element = newsClone.querySelector('.news__meta-author');
            if (element) element.textContent = item.author || item.source.name;
            element = newsClone.querySelector('.news__meta-date');
            if (element) element.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            element = newsClone.querySelector('.news__description-title');
            if (element) element.textContent = item.title;
            element = newsClone.querySelector('.news__description-source');
            if (element) element.textContent = item.source.name;
            element = newsClone.querySelector('.news__description-content');
            if (element) element.textContent = item.description;
            element = newsClone.querySelector('.news__read-more a');
            if (element) element.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        element = document.querySelector('.news');
        if (element) element.innerHTML = '';
        element = document.querySelector('.news');
        if (element) element.appendChild(fragment);
    }
}

export default News;
