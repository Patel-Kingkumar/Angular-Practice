import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private http: HttpClient
  ) { }

  getStudents() {
    return this.http.get<any>("http://localhost:3000/students");
  }

  addStudents(data: any) { 
    return this.http.post<any>("http://localhost:3000/students", data);
  }

  editStudents(id: string, data: any) {
    return this.http.put<any>("http://localhost:3000/students/" + id, data);
  }

  deleteStudents(id: string) {
    return this.http.delete<any>("http://localhost:3000/students/" + id);
  }

  getStudentsById(id: string) {
    return this.http.get<any>("http://localhost:3000/students/" + id);
  }
}
