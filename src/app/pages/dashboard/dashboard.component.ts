import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  /* public board: any; */

  constructor(public _user: UserService, private router: Router) {}

  ngOnInit(): void {
    this.validarTablero();
  }
  board: any;
  validarTablero() {
    this.board = 0;
    return this.board;
  }
}
