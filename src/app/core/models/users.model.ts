import { environment } from '../../../environments/environment';

const base_url = environment.base_url;

export class User {

    constructor(
        public first_name: string,
        public second_name : string,
        public first_surname: string,
        public second_surname : string,
        public email : string,
        public password?: string,
        public image?: string,
    ) {}

    get imagenUrl() {
       // src/app/images/users
        if ( !this.image ) {
            return `assets/images/users/no-image.png`;
        } else if ( this.image.includes('https') ) {
            return this.image;
        } else if ( this.image ) {
            return `${ base_url }/upload/usuarios/${ this.image }`;
        } else {
            return `${ base_url }/upload/usuarios/no-image`;
        }
    }
}

