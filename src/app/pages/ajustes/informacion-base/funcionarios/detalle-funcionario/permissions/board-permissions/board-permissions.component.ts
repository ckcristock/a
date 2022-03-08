import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { BoardsService } from '../../../../services/boards.service';

@Component({
  selector: 'app-board-permissions',
  templateUrl: './board-permissions.component.html',
  styleUrls: ['./board-permissions.component.scss']
})
export class BoardPermissionsComponent implements OnInit {

  @Input('personId') personId: string = ''
  boards: any;
  boardsSelected: any;
  saving: boolean

  constructor(private _board: BoardsService,
    private _user: UserService) { }

  ngOnInit(): void {
    this.getBoardsWorked()
    this.getBoards()
  }

  getBoards() {
    this._board
      .getBoards({ owner: 1 })
      .toPromise()
      .then((b: any) => {
        this.boards = b.data;
      });
  }

  getBoardsWorked() {
    this._board
      .getPersonBoards(this.personId)
      .subscribe(
        (d: any) => {
          var r = d.data.reduce((acc, el) => [...acc, el.name_board]);
          if (r != null){
            this.boardsSelected =
            d.data.reduce((acc, el) => [...acc, el.name_board]);
          } else if (r == null){
            this.boardsSelected = 'No se ha asignado un tablero';
          } 
          
                   
        });
  }

  save() {
    this.saving = true;
    this._board
      .setBoards(this.personId, this.boardsSelected.id)
      .subscribe(r => {
        this.saving = false;
        this._user.user.person.id == this.personId ? location.reload() : null
      })
  }
}
