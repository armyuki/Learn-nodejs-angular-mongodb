import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from '../ShareService';



@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  customers: any

  customer = {
    name: '',
    code: '',
    _id: ''

  };

  pets: any

  pet = {
    name: '',
    customer_id: '',
    remark: ''
  }

  constructor(private http: HttpClient, private ShareService: ShareService) {

  }
  ngOnInit() {
    this.loadCustomer()
    this.loadPets()
  }

  loadCustomer() {
    this.http.get(this.ShareService.serverpath + '/customerAll').subscribe((res: any) => {
      this.customers = res
    })
  }

  chooseCustomer(customer: any) {
    this.customer = customer
  }

  save() {
    this.pet.customer_id = this.customer._id
    if(confirm('ยืนยันการทำรายการ'))
    this.http.post(this.ShareService.serverpath + '/petSave', this.pet).subscribe((res: any) => {
      this.loadPets()
      this.pet.name = ''
      this.pet.remark = ''
      this.customer.name = ''
    })
  }

  loadPets() {
    this.http.get(this.ShareService.serverpath + '/petAll').subscribe((res: any) => {
      this.pets = res
    })
  }

  deletePet(item: any) {
    if (confirm('ต้องการลบ ใช่หรือไม่ ?'))
      this.http.post(this.ShareService.serverpath + '/petDelete', item).subscribe((res: any) => {
        this.loadPets()
      })
  }

  editPet(item: any) {
    this.pet = item
    this.customer = item.customer[0]
  }
}
