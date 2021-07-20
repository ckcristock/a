import { Injectable } from '@angular/core';

import { UserService } from './user.service';
import { PermissionComponent } from '../interfaces/permissionComponent';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private _user: UserService) { }

  validatePermissions(perms) {
    let menu_ = this._user.user.menu.find(p => p.name == perms.menu);
    if (menu_) {
      menu_.permissons.some(d => {
        if ((d.name in perms.permissons)) {
          perms.permissons[d.name] = true
          return true
        }
        return false
      })
    }
    return perms
  }

}
