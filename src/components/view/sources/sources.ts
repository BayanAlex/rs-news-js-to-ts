import './sources.css';
import { ApiSource } from '../../api/api';

class Sources {
    public draw(data: Array<ApiSource>): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector(
            '#sourceItemTemp'
        ) as HTMLTemplateElement | null;
        if (!sourceItemTemp) return;
        let element: HTMLElement | null;

        data.forEach((item: ApiSource) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;
            element = sourceClone.querySelector('.source__item-name');
            if (element) element.textContent = item.name;
            element = sourceClone.querySelector('.source__item');
            if (element) element.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        element = document.querySelector('.sources');
        if (element) element.append(fragment);
    }
}

export default Sources;
