export type PayloadPagination<T = any> = {
    count: number;
    results: T;
    next: string;
    previous: string;
}