import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../../persons/person.service';
import { PermissionService } from '../../../../../../core/services/permission.service';
interface NavItem {
  name: string;
  link: boolean;
  id: string;
  child: NavItem[];
}
@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {

  temporalMenues: Array<NavItem> = [];
  menues: Array<NavItem> = [];
  constructor(private _person: PersonService, private _permissions: PermissionService) { }

  ngOnInit(): void {
    this.getMenues();
  }

  getMenues() {
    this._permissions.getMenu().subscribe((r: any) => {
      this.menues = r;

     
      /*  console.log(this.menues.reduce(this.indexMenu,{})); */

    })
  }

  save() {
    //copy object
 /*    let menuesFilter: any = JSON.parse(JSON.stringify(this.menues))
    console.log(menuesFilter === this.menues);
    console.log(this.filtertData(menuesFilter));
 */


    let m = this.filtertData(JSON.parse(JSON.stringify(this.menues)))
    console.log(
      this.filterGrandpa(m)
    );
  }

  public indexMenu = (acc, els) => {
    console.log(els);

    /*  let els: any = Object.assign({}, el) */
    /* let els:any = [...el] */

    if (els.child.length > 0) {
      console.log(els.child);

      els.child.reduce(this.indexMenu, els.child, {})
    }
    if (els.permissions) {
      els.permissions = els.permissions.reduce(this.indexPermissons, {})
      console.log(els);

    }
    return ({ ...acc, [els.name]: els })
  }

  public indexPermissons = (acc, el) => ({ ...acc, [el.name]: el });

  /* 
    public extractData(menu: any) {
      for (let element of menu) {
        if (element.child) {
          this.extractData(element.child)
        }
        if (element.link) {
          this.temporalMenues.push(element)
        }
      };
    }
   */
  public filtertData(menu: any, parent: any = {}, x = -1) {
    for (let element of menu) {
      x++;
      if (element.child) {
        this.filtertData(element.child, element)
      }

      try {
        if (element.child.length == 0 && !element.link && element.parent_id) {
          console.log('padreeeeeeeeeeees', element, parent, x);
          let pos = parent.child.findIndex(f => f.id == element.id)
          throw (pos);
          /* this. */
        }

        if (element.link) {
          element.permissions.forEach(ele => {
            if (ele.name == 'show' && !ele.Activo) {
              throw (x);
            }
          });

        }
      } catch (posDel) {
        console.log(element, parent, posDel);
        parent.child.splice(posDel, 1)
        this.filtertData(menu, parent)
      }
    };
    return menu
  }

  filterGrandpa(menu: Array<NavItem>) {
    return menu.filter(d => (d.child.length > 0 || d.name == 'Tablero') );
  }

  public setPermit(item, pos, permit) {
    console.log(permit);

    permit.Activo = !permit.Activo

    this.setData(this.menues, permit.id, permit.Activo);
  }


  public setData(menu: any, id, state) {
    console.log(id);

    try {
      for (let element of menu) {
        if (element.child) {
          this.setData(element.child, id, state)
        }
        if (element.id == id) {
          element.Activo = state;
          throw '';
        }
      };
    } catch (error) { }
  }
  x = 0;

  filterArrayx(arra: any, el = []) {
    arra.reduce((acc, el) => {
      if (el.child.length > 0) {
        this.filterArrayx(el.child)
      }
      if (el.child.length == 0 && !el.link) {
        /*   this.filterArrayx(el.child) */
      }
      console.log(el, 'in');
      if (el.permissions) {
        console.log(el, 'permissions');
        return ({})

      }

      return ({ ...acc, [el.name]: el })
    }, []);
  }
}
