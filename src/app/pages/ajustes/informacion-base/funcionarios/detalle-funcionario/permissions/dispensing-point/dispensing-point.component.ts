import { Component, OnInit, Input } from '@angular/core';
import { DispensingPointsService } from '../../../../services/dispensingPoints.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dispensing-point',
  templateUrl: './dispensing-point.component.html',
  styleUrls: ['./dispensing-point.component.scss']
})
export class DispensingPointComponent implements OnInit {

  @Input('personId') personId: string = '';

  points: any[] = [];
  public dispensing_point_id: Number;
  saving: boolean;

  constructor(
    private _user: UserService,
    private _dispensing: DispensingPointsService
  ) {}

  ngOnInit(): void {
    this.getDispensingPoint();
  }

  getDispensingPoint() {
    this._dispensing.getDispensingPoint().subscribe((resp: any) => {
      this.points = resp.data;
      this.dispensing_point_id = parseInt(
        this._user.user.person.dispensing_point_id
      );
    });
  }

  save() {
    this.saving = true;
    this._dispensing
      .setgetDispensingPoint(this.personId, {
        dispensing_point_id: this.dispensing_point_id,
      })
      .subscribe((r) => {
        this.saving = false;
        this._user.user.person.id == this.personId ? location.reload() : null;
      });
  }/*  */

}
