type ApiArticle = {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
};

type ApiSource = {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
};

interface ApiData {
    status: string;
}

interface ApiSourcesData extends ApiData {
    sources: Array<ApiSource>;
}

interface ApiArticlesData extends ApiData {
    totalResults: number;
    articles: Array<ApiArticle>;
}

type ApiDataType = ApiSourcesData | ApiArticlesData;

type ApiOptions = {
    apiKey: string;
    sources: string;
};

enum ApiEndpoint {
    Everything = 'everything',
    Sources = 'sources',
}

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Unauthorized = 401,
}

enum ApiMethod {
    Get = 'GET',
}

type Callback = <T>(data: T) => void;

export {
    ApiArticle,
    ApiSource,
    ApiSourcesData,
    ApiArticlesData,
    ApiDataType,
    ApiOptions,
    ApiEndpoint,
    StatusCodes,
    ApiMethod,
    Callback,
};
