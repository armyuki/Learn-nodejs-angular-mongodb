import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from '../ShareService';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {

  name = ''
  tel = ''
  tax = ''
  address = ''
  _id = ''

  constructor(private http: HttpClient, private ShareService: ShareService) { }

  ngOnInit() {
    this.loadInfo();
  }

  loadInfo() {
    this.http.get(this.ShareService.serverpath + '/clinicInfo').subscribe((res: any) => {
      this.name = res.name;
      this.tel = res.tel;
      this.tax = res.tax;
      this.address = res.address;
      this._id = res._id;
    })
  }

  save() {
    const params = {
      name: this.name,
      tel: this.tel,
      tax: this.tax,
      address: this.address,
      _id: this._id
    }

    var path = this.ShareService.serverpath + '/clinicSave';

    if (this._id !== "") {
      path = this.ShareService.serverpath + '/clinicUpdate';
      alert('อัพเดตข้อมูลสำเร็จ')
    } else {

      this.http.post(path, params).subscribe((res: any) => {
        console.log(res.data);
        alert('บันทึกข้อมูลสำเร็จ')
      })
    }
  }
}
