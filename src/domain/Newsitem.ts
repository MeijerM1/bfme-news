export interface NewsItem {
    content: string;
    contentSnippet: string;
    enclosure: Enclosure;
    guid: string;
    isoDate: string;
    link: string;
    pubDate: string;
    title: string;
}

export interface Enclosure {
    length: string;
    type: string;
    url: string;
}