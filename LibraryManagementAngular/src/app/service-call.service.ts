import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceCallService {
  sid:string=""
  spass:string=""
  constructor(private httpClient:HttpClient) {
  }
  getAllBooks():Observable<any[]>{
    const url='http://localhost:8080/library/book/getAll';
    return this.httpClient.get<any[]>(url);
  }
  studentAuth(body:any){
    const url='http://localhost:8080/library/student/login';
    return this.httpClient.post(url,body);
  }
  adminAuth(body:any){
    const url="http://localhost:8080/library/admin/login";
    return this.httpClient.post(url,body);
  }
  addStudent(body:any){
    const url="http://localhost:8080/library/student/add";
    return this.httpClient.post(url,body);
  }
  addAdmin(body:any){
    const url="http://localhost:8080/library/admin/addAdmin";
    return this.httpClient.post(url,body);
  }
  AddFine(body:any){
    const url="http://localhost:8080/library/student/addFine";
    return this.httpClient.post(url,body);
  }
  Deactivate(url:any){
    let body={};
    return this.httpClient.post(url,body);
  }
  AddBook(body:any){
    const url="http://localhost:8080/library/book/addBook";
    return this.httpClient.post(url,body);
  }
  RemoveBook(body:any){
    const url="http://localhost:8080/library/book/removeBook";
    return this.httpClient.post(url,body);
  }
  ShowAllIssues():Observable<any[]>{
    const url="http://localhost:8080/library/issue/allIssues";
    return this.httpClient.get<any[]>(url);
  }
  IssuesByStudent(body:any){
    const url="http://localhost:8080/library/issue/booksByOneStudent";
    return this.httpClient.post(url,body);
  }
  BookABook(body:any){
    const url="http://localhost:8080/library/issue/addIssue";
    return this.httpClient.post(url,body);
  }
  ChangeAdminPass(body:any){
    const url="http://localhost:8080/library/admin/changePass";
    return this.httpClient.post(url,body);
  }
  ChangeStudentPass(body:any){
    const url="http://localhost:8080/library/student/changePassword";
    return this.httpClient.post(url,body);
  }
  ShowOverDue(url:any){
    return this.httpClient.post(url,"");
  }
}
