import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from '../ShareService';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit  { 

  medicines: any

  medicine = {
    code:'',
    name:'',
    buy:'',
    sell:'',
    remark:''
  }

  constructor(private http: HttpClient, private ShareService: ShareService){

  }

  ngOnInit() {
      
  }

  save(){
    this.http.post(this.ShareService.serverpath+'/medicineSave', this.medicine).subscribe((res: any)=>{
      alert('บันทึกข้อมูล')
    })
  }
}
