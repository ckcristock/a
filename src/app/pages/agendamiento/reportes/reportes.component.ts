import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DataDinamicService } from '../../../data-dinamic.service';
import { ReportesService } from './reportes.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})

export class ReportesComponent implements OnInit {
  companies: Array<any>
  specialities: Array<any>
  typeRegimens: Array<any>
  epss: Array<any>


  fromNGDate: NgbDate;
  toNGDate: NgbDate;
  hoveredDate: NgbDate;
  date: { year: number, month: number };
  selected: any;
  hidden: boolean = true;
  loading = false;
  fromDate: Date;
  toDate: Date;
  /* @Output() dateRangeSelected: EventEmitter<{}> = new EventEmitter();
 */
  typeReportDefault = 'Reporte de atenciones'
  typeReports = [
    'Reporte de atenciones',
    'Reporte de agendas',
    'Reporte de estado de agendas',
    'Reporte de lista de espera',
  ]
  constructor(private _dataDinamic: DataDinamicService, private _reportes: ReportesService) {
    this.getCompanies();
    this.getSpecialities();
    this.getRegimens();
    this.getEpss();
    this.gettypeReportes();
  }

  ngOnInit(): void {
  }

  getCompanies() {
    this._dataDinamic.getCompanies().subscribe((r: any) => {
      this.companies = r.data
      this.companies.unshift({ text: 'Todas', value: '' });
    })
  }

  gettypeReportes() {
    this._dataDinamic.gettypeReportes().subscribe((r: any) => {
      this.typeReports = r
    })
  }

  getSpecialities() {
    this._dataDinamic.getSpecialties('', '').subscribe((r: any) => {
      this.specialities = r.data
      this.specialities.unshift({ text: 'Todas', value: '' });
    })
  }

  getRegimens() {
    this._dataDinamic.getRegimens().subscribe((req: any) => {
      this.typeRegimens = req.data
      this.typeRegimens.unshift({ text: 'Todos', value: '' })
    })
  }
  getEpss() {
    this._dataDinamic.getEps().subscribe((req: any) => {
      this.epss = req.data
      this.epss.unshift({ text: 'Todas', value: '' })
    })
  }

  download(form: NgForm) {

    this.loading = true;

    this._reportes.download(form.value).subscribe((response: BlobPart) => {

      let blob = new Blob([response], { type: "application/xlsx" });

      // var headers = response['headers'].get('content-disposition');
      // var filename = headers.match(/filename="(.+)"/)[1];

      var filename = 'Reporte' + new Date;

      // console.log([

      //   headers,
      //   filename

      // ]);


      let link = document.createElement("a");
      // const filename = 'InformeCompras'

      link.href = window.URL.createObjectURL(blob);

      link.download = `${filename}.xlsx`;
      link.click();
      this.loading = false
    }), error => { console.log('Error downloading the file'); this.loading = false },
      () => { console.info('File downloaded successfully'); this.loading = false };



  }

  /* Date */

  /**
  * @param date date obj
  */
  isInside(date: NgbDate) {
    return date.after(this.fromNGDate) && date.before(this.toNGDate);
  }

  /**
  * @param date date obj
  */
  isRange(date: NgbDate) {
    return date.equals(this.fromNGDate) || date.equals(this.toNGDate) || this.isInside(date) || this.isHovered(date);
  }

  /**
 * Is hovered over date
 * @param date date obj
 */
  isHovered(date: NgbDate) {
    return this.fromNGDate && !this.toNGDate && this.hoveredDate && date.after(this.fromNGDate) && date.before(this.hoveredDate);
  }

  /**
 * on date selected
 * @param date date object
 */
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromNGDate = date;
      this.fromDate = new Date(date.year, date.month - 1, date.day);
      this.selected = '';
    } else if (this.fromDate && !this.toDate && !date.before(this.fromNGDate)) {
      this.toNGDate = date;
      this.toDate = new Date(date.year, date.month - 1, date.day);
      this.hidden = true;
      this.selected = this.fromDate.toLocaleDateString() + '-' + this.toDate.toLocaleDateString();

      //this.dateRangeSelected.emit({ fromDate: this.fromDate, toDate: this.toDate });

      this.fromDate = null;
      this.toDate = null;
      this.fromNGDate = null;
      this.toNGDate = null;

    } else {
      this.fromNGDate = date;
      this.fromDate = new Date(date.year, date.month - 1, date.day);
      this.selected = '';
    }
  }
}
