import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from '../ShareService';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  healths: any;
  totalPrice = 0;

  search = {
    from: '',
    to: '',
  }

  constructor(private http: HttpClient, private ShareService: ShareService) { }

  ngOnInit() {

  }

  showReport() {
    console.log(this.search);
    this.http.post(this.ShareService.serverpath + '/showreport', this.search).subscribe((res: any) => {
      this.healths = res

      for(let i = 0; i < res.length; i++) {
        this.totalPrice += res[i].price
      }
    })

  }

}
