export class SystemMemoryModel {
    free: number;
    total: number;

    constructor(free: number, total: number) {
        this.free =  Number.parseInt((free / 1024 / 1024).toFixed());
        this.total = Number.parseInt((total / 1024 / 1024).toFixed());
    }
}
