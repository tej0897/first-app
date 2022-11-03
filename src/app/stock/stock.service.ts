import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http:HttpClient) { }

  stockList: Stock[]|any;

  private apiGetAllStock:string = 'http://localhost:8081/api/stocks/getAllStocks';
  private apiAddStock:string = 'http://localhost:8081/api/stocks/add';

  addStock(companyID:number, stock:Stock):Observable<Stock>{
    return this.http.post<Stock>('${this.apiAddStock}/${companyID}', Stock);
  }

  getAllStock(companyID:number):Observable<Array<Stock>>{
    return this.http.get<Array<Stock>>('${this.apiGetAllStock}/${companyID}');
  }
}
