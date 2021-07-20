import { environment } from '../../../environments/environment';
import { Functionary } from '../interfaces/functioray.interface';
import { Menu } from '../interfaces/menu';

const base_url = environment.base_url;

export class User {

    constructor(

        public id: string,
        public usuario: string,
        public change_password: boolean,
        public functionary: Functionary,
        public menu: Array<any>,
        public password?: string,
        
    ) {}

    get imagenUrl() {
       // src/app/images/users
        if ( !this.functionary.image ) {
            return `assets/images/users/no-image.png`;
        } else if ( this.functionary.image.includes('https') ) {
            return this.functionary.image;
        } else if ( this.functionary.image ) {
            return `${ base_url }/upload/usuarios/${ this.functionary.image }`;
        } else {
            return `${ base_url }/upload/usuarios/no-image`;
        }
    }

}

