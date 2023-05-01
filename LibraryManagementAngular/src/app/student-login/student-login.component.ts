import { Component, OnInit } from '@angular/core';
import { ServiceCallService } from '../service-call.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
  studentId:any
  studentPass:any
  isLoggedIn:any
  loginfail=false
  loginbar=true
  constructor(public serviceCall:ServiceCallService) { }

  ngOnInit(): void {
  }
  data:any
  StudentHomePage(){
    // this.serviceCall.getAllBooks().subscribe((res:any)=>{
    //   console.log(res)
    //   this.data=res
    // })
    this.loginfail=false
    let body={
      "emailId" : this.studentId,
    "password" : this.studentPass
    }
    this.serviceCall.studentAuth(body).subscribe((res:any)=>{
      console.log(res);
      if (res==true) {
        alert("Login Successfull");
        this.isLoggedIn=true;
        this.loginbar=false;
      }
      else{
        this.loginfail=true
        // alert("Login Failed");
      }
    })
  }
  showBooks=false
  showAllBooks(){
    this.showBooks=!this.showBooks
    this.serviceCall.getAllBooks().subscribe((res:any)=>{
      console.log(res)
      
      this.data=res
    });
  }
  isEnable=false
  EnableBook(){
    this.isEnable=!this.isEnable;
  }
  studentIdB:any
  bookId:any
  BookABook(){
    let body={
      "studentId" : this.studentIdB,
      "bookId" : this.bookId
    }
    this.serviceCall.BookABook(body).subscribe((res:any)=>{
      console.log("Borrow Book res "+ res);
      alert("Borrow Book Successfull");
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
    this.serviceCall.ChangeStudentPass(body).subscribe((res:any)=>{
      if (res){
        alert("Password Changed Successfully")
        console.log("New Pass "+this.newPass);
      }
      else{
        alert("Password Change Failed")
      }
    })
  }
  boolShowIssues=false
  showtab=false
  dataD:any
  stId:any
  bb(){
    this.boolShowIssues=!this.boolShowIssues
  }
  showOverDue(){
    this.showtab=!this.showtab
    const url="http://localhost:8080/library/student/overDue?id="+this.stId;
    this.serviceCall.ShowOverDue(url).subscribe((res:any)=>{
        this.dataD=res;
        console.log(res);
    })
  }
}
