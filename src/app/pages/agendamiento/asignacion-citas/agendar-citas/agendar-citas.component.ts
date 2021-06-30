import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
/* import { NextStepDirective } from 'angular-archwizard'; */
@Component({
  selector: 'app-agendar-citas',
  templateUrl: './agendar-citas.component.html',
  styleUrls: ['./agendar-citas.component.scss']
})

export class AgendarCitasComponent implements OnInit {
  /* @ViewChild('next') next; */
  @ViewChild('next') next: ElementRef;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  
  siguiente(){
    this.next.nativeElement.click();
    
  }
}
