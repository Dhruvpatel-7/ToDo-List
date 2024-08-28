export class Todo {
    sno: number;
    title: string;
    desc: string;
    active: boolean;

    constructor() {
        this.sno = 0; // Initialize with default values
        this.title = '';
        this.desc = '';
        this.active = false;
    }

}