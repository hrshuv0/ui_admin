export class Pagination<T> {
    count: number;
    pageIndex: number;
    pageSize: number;
    data!: T
}

export class Filter {
    pageIndex: number;
    pageSize: number;
    search: string;
    sort: string;
    sortDirection: string;

    constructor(index = 1, size = 10, search?: string, sort?: string, direction?: string) {
        this.pageIndex = index;
        this.pageSize = size;
        this.search = search!;
        this.sort = sort!;
        this.sortDirection = direction!;
    }
}
