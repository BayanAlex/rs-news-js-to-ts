import { ApiOptions, ApiEndpoint, StatusCodes, ApiMethod, Callback } from '../api/api';

class Loader {
    constructor(private readonly baseLink: string, private readonly options: Pick<ApiOptions, 'apiKey'>) {}

    public getResp(
        { endpoint, options = {} }: { endpoint: ApiEndpoint; options?: Partial<ApiOptions> },
        callback: Callback = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load(ApiMethod.Get, endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === StatusCodes.Unauthorized || res.status === StatusCodes.NotFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: Partial<ApiOptions>, endpoint: ApiEndpoint): string {
        const urlOptions: Partial<ApiOptions> = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string): void => {
            url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
        });

        return url.slice(0, -1);
    }

    private load(
        method: ApiMethod,
        endpoint: ApiEndpoint,
        callback: Callback,
        options: Partial<ApiOptions> = {}
    ): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: Callback) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
