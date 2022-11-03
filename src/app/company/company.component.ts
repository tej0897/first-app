import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Company } from './company';
import { CompanyService } from './company.service';

 
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private companyService:CompanyService, private http:HttpClient) { }

  ngOnInit(): void {
  }

  companyOb:Company = new Company();
  companyarr:Array<Company>=[];

  data:{}|any;

  addCompanyDetails(){
    this.companyService.addCompany(this.companyOb).subscribe(data =>
      {
        this.data = JSON.stringify(this.data);
        this.companyarr.push(this.data);
      }, 
      error => {
        console.log(error);
        })
      }
  
  getCompanyList(){
    this.companyService.getAllCompany().subscribe(data =>
      {
        this.companyarr = Object.values(data);
        console.log(this.companyarr);
      }, error =>{
        console.log(error);
      })
  }

  updateCompany(){

  }

  companym: Company = new Company();
  companyData: Array<Company> = [];
  response:any;

  getCompanyByID(companyID:number){
    this.companyService.getCompanyByID(this.companym.companyID).subscribe(data =>
      {
          this.companyData = Object.values(data);
          console.log(this.companyData);
          this.data = JSON.stringify(data);
          alert("Success");
      })
  }
}
