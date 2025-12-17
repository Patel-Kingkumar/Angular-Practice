import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NestedFormArrayService {

  constructor(
      private http: HttpClient
    ) { }
  
    getemployees() {
      return this.http.get<any>("http://localhost:3000/employee");
    }
  
    addemployees(data: any) { 
      return this.http.post<any>("http://localhost:3000/employee", data);
    }
  
    editemployees(id: string, data: any) {
      return this.http.put<any>("http://localhost:3000/employee/" + id, data);
    }
  
    deleteemployees(id: string) {
      return this.http.delete<any>("http://localhost:3000/employee/" + id);
    }
  
    getemployeesById(id: string) {
      return this.http.get<any>("http://localhost:3000/employee/" + id);
    }
}
