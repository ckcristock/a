import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../../persons/person.service';
import { PermissionService } from '../../../../../../core/services/permission.service';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {

  temporalMenues: any = []
  menues: any = []
  constructor(private _person: PersonService, private _permissions: PermissionService) { }

  ngOnInit(): void {
    this.getMenues();
  }

  getMenues() {
    this._permissions.getMenu().subscribe((r: any) => {
      this.menues = r;
      this.menues.map(r => console.log(r))
      this.extractData(r);
      console.log(this.temporalMenues);
      this.filterArrayx(this.menues);
    })
  }

  save() {
    let menues: any = [...this.menues];
    /*  const menuIndexed = menues.reduce(this.indexMenu, {}) */
    console.log(this.filtertData(this.menues));
    /* console.log( menuIndexed ); */

  }

  public indexMenu = (acc, el) => {
    console.log(el);

    let els: any = Object.assign({}, el)
    /* let els:any = [...el] */
    els.permissions = els.permissions.reduce(this.indexPermissons, {})
    return ({ ...acc, [els.name]: els })
  }

  public indexPermissons = (acc, el) => ({ [el.name]: el });


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

  public filtertData(menu: any, parent: any = {}, x = -1) {

    for (let element of menu) {
      x++;
      if (element.child) {

        this.filtertData(element.child, element)
      }
      if (element.link) {
        try {
          element.permissions.forEach(ele => {
            if (ele.name == 'show' && !ele.Activo) {
              throw ("");
            }
          });

        } catch (except) {
          console.log(element, parent, x);
          parent.child.splice(x, 1)
          this.filtertData(menu, parent)

        }

      }
    };
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
  filterArrayx(arra: any) {
    console.log(this.x++, arra);

    console.log(arra.reduce((acc, el) => {
      if (el.child.length > 0) {
        this.filterArrayx(el.child)
      }
      console.log(el, 'in');

      return ({ ...acc, el })
    }, []));

  }
}
