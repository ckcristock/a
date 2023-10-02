import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { CompanyService } from '../../../../services/company.service';

@Component({
  selector: 'app-companies-to-work',
  templateUrl: './companies-to-work.component.html',
  styleUrls: ['./companies-to-work.component.scss']
})
export class CompaniesToWorkComponent implements OnInit {
  @Input('personId') personId: string = ''
  companies: any[] = [];
  companiesSelected: any[] = [];
  saving: boolean

  constructor(
    private _company: CompanyService,
    private _user: UserService
  ) { }

  ngOnInit(): void {
    this.getCompaniesWorked()
    this.getCompanies()
  }

  getCompaniesWorked() {
    this._company.getPersonCompanies(this.personId).subscribe((d: any) => {
      this.companiesSelected = d.data.reduce((acc, el) => [...acc, parseInt(el.company_id)], [])
    });
  }
  getCompanies() {
    this._company.getCompanies({ owner: 1 }).toPromise().then((d: any) => {
      this.companies = d.data;
    });
  }

  save() {
    this.saving = true;
    this._company.setCompanies(this.personId, { companies: this.companiesSelected }).subscribe(r => {
      this.saving = false;
      this._user.user.person.id == this.personId ? location.reload() : null
    })
  }
}
