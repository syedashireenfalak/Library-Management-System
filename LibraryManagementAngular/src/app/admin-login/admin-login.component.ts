import { Component, OnInit } from '@angular/core';
import { ServiceCallService } from '../service-call.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminId:any
  adminPass:any
  adminLogin=true
  adminBody=false
  addStudent=false
  addAdmin=false
  addFine=false
  deactivateStudent=false
  loginFail=false
  constructor(public serviceCall:ServiceCallService) { }

  ngOnInit(): void {
  }
  AdminHomePage(){
    let body={
      "emailId" : this.adminId,
      "password" : this.adminPass
    }
    this.serviceCall.adminAuth(body).subscribe((res:any)=>{
      console.log(res);
      if (res==true) {
        alert("Login Successful");
        this.adminLogin=false
        this.adminBody=true
        this.loginFail=false
      }
      else{
        alert("Login Failed");
        this.loginFail=true
      }
    })
  }
  showAddStudent(){
    this.addStudent=!this.addStudent
  }
  showAddAdmin(){
    this.addAdmin=!this.addAdmin
  }
  showAddFine(){
    this.addFine=!this.addFine
  }
  showDeactivate(){
    this.deactivateStudent=!this.deactivateStudent
  }
  studentName:any
  studentEmail:any
  studentYear:any
  department:any
  studentStatus:any
  AddStudent(){
    let body={
      "studentName" : this.studentName,
      "emailId" : this.studentEmail,
      "year" : this.studentYear,
      "department" : this.department,
      "status" : this.studentStatus
    }
    this.serviceCall.addStudent(body).subscribe((res:any)=>{
      console.log("student add res "+res)
      if(res){
        alert("Student added successfully");
        this.addStudent=!this.addStudent
      }
      else{
        alert("Student add failed");
      }
    })
  }
  adminName:any
  adminEmail:any
  contact:any
  adminStatus:any
  AddAdmin(){
    let body={
      "adminName" : this.adminName,
    "contactNo" : this.contact,
    "emailId" : this.adminEmail,
    "status" : this.adminStatus
    }
    this.serviceCall.addAdmin(body).subscribe((res:any)=>{
      console.log("Admin add res "+res)
      if(res){
        alert("Admin added successfully");
        this.addAdmin=!this.addAdmin
      } 
      else{
        alert("Admin add failed");
      }
    })
  }
  fineStudentId:any
  fineAmount:any
  AddFine(){
    let body={
      "id" : this.fineStudentId,
    "fineAmount": this.fineAmount
    }
    this.serviceCall.AddFine(body).subscribe((res:any)=>{
        if(res!=null){
          console.log("Fine Added Sucessfully")
          alert("Added Fine Successfully");
          this.addFine=!this.addFine
        }
        else{
          alert("Add Fine Failed");
        }
    })
  }
  deactivateId:any
  Deactivate(){
    const url="http://localhost:8080/library/student/deactivate?id="+this.deactivateId;
    this.serviceCall.Deactivate(url).subscribe((res:any)=>{
      if(res){
        console.log("student deactivate");
        alert("Deactivate Successful")
        this.deactivateStudent=!this.deactivateStudent

      }
      else{
        console.log("Student deactivate fail");
      }
    })
  }
  addBook=false
  showAddBook(){
    this.addBook=!this.addBook;
  }
  bookName:any
  author:any
  edition:any
  category:any
  serialNo:any
  AddBook(){
    let body  = {
      "bookName" : this.bookName,
      "author" : this.author,
      "edition" : this.edition,
      "serialNo" : this.serialNo,
      "category" : this.category
    }

    this.serviceCall.AddBook(body).subscribe((res:any)=>{
      if(res){
        alert("Book Added Successfully");
        this.addBook=!this.addBook;
      }
      else{
        alert("Add Book Failed");
      }
    })
  }
  removeBook=false
  showRemoveBook(){
    this.removeBook=!this.removeBook
  }
  bookNameR:any
  RemoveBook(){
      let body={
        "bookName" : this.bookNameR
      }
      this.serviceCall.RemoveBook(body).subscribe((res:any)=>{
        if(res){
          alert("Book Removed Successfully")
          this.removeBook=!this.removeBook;
        }
        else{
          alert("Book Remove Failed");
        }
      })
  }
  boolShowIssues=false
  data:any
  ShowAllIssues(){
    this.boolShowIssues=!this.boolShowIssues
    this.serviceCall.ShowAllIssues().subscribe((res:any)=>{
      this.data=res
      console.log(res);
    })
  }
  boolIssuesSt=false
  tabe=false
  ShowIssuesBySt(){
    this.boolIssuesSt=!this.boolIssuesSt
    
  }
  issuesSt:any
  stIssues:any
  ShowIssesSt(){
    this.tabe=!this.tabe
    let body={
      "studentId" : this.issuesSt
    }
    this.serviceCall.IssuesByStudent(body).subscribe((res:any)=>{
      this.stIssues=res;

      console.log(res)
    })
  }
  changePass=false
  showChangePassword(){
      this.changePass=!this.changePass
  }
  newPass:any
  adminId1:any
  ChangePass(){
    let body={
      "id":this.adminId1,
      "password":this.newPass
    }
    this.serviceCall.ChangeAdminPass(body).subscribe((res:any)=>{
      if (res){
        alert("Password Changed Successfully")
        console.log("New Pass "+this.newPass);
      }
      else{
        alert("Password Change Failed")
      }
    })
  }
}
