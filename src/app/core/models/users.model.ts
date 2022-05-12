import { environment } from '../../../environments/environment';
import { Person } from '../interfaces/person.interface';
import { Menu } from '../interfaces/menu';
import { Board } from '../interfaces/board.interface';
import { Task } from '../interfaces/task.interface';

const base_url = environment.base_url;

export class User {

    constructor(

        public id: string,
        public usuario: string,
        public change_password: boolean,
        public person: Person,
        public menu: Array<any>,
        public board: Board,
        public task: Task,
        public password?: string,

    ) { }

    get imagenUrl() {
        if (!this.person.image) {
            return `assets/images/users/no-image.png`;
        } else if (this.person.image.includes('https') || this.person.image.includes('http')) {
            return this.person.image;
        } else if (this.person.image) {
            return `${base_url}/upload/usuarios/${this.person.image}`;
        } else {
            return `${base_url}/upload/usuarios/no-image`;
        }
    }

}

