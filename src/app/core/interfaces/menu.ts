import { PermissionComponent } from './permissionComponent';
export interface Menu {
    name: String;
    icon: String;
    url: String;
    permissons:Array<PermissionComponent>
}

