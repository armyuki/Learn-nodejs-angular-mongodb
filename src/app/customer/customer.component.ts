import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from '../ShareService';
// import { __param } from 'tslib';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  code = ''
  name = ''
  email = ''
  address = ''
  tel = ''
  lineid = ''
  _id = ''

  customers: any

  constructor(
    private http: HttpClient,
    private ShareService: ShareService
  ) { }
  ngOnInit() {
    this.loaddata()
  }

  loaddata() {
    this.http.get(this.ShareService.serverpath + '/customerAll').subscribe((res: any) => {
      this.customers = res
    })
  }
  save() {
    if (confirm('ยืนยันการบันทึก')) {
      const param = {
        code: this.code,
        name: this.name,
        email: this.email,
        address: this.address,
        tel: this.tel,
        lineid: this.lineid,
        _id: this._id
      }

      var path = this.ShareService.serverpath + '/customerSave'
      if (this._id) {
        path = this.ShareService.serverpath + '/customerUpdate'
        param._id = this._id
        this.loaddata()
      }
      this.http.post(path, param).subscribe((res: any) => {
        alert('บันทึกข้อมูลสำเร็จ')
        this.loaddata()
      })

    }
  }

  customerDelete(item: any) {
    if (confirm('ยืนยันการลบ')) {
      const param = {
        _id: item._id,
      }
      this.http.post(this.ShareService.serverpath + '/customerDelete', param).subscribe((res: any) => {
        alert('ลบรายการแล้ว')
        this.loaddata()
      })
    }
  }

  customerInfo(item: any) {
    this.code = item.code
    this.name = item.name
    this.tel = item.tel
    this.lineid = item.lineid
    this.email = item.email
    this.address = item.address
    this._id = item._id

  }

}
