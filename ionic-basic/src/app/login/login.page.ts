
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  user: User = new User();

  constructor(private router: Router,
    private autSvc: AuthService) { }

  ngOnInit() {
  }

  async onLogin(){
    this.autSvc.onLogin(this.user).then((user:any)=>{
      if(user!=null && user.code ==undefined){
        console.log('LogIn se ha realizado con exito !!');
        this.router.navigate(['/admin']);
      }
      else{
        if(user.code){
          if(user.code=='auth/wrong-password' || user.code =='auth/invalid-email' || user.code=='auth/argument-error'){
            console.log(user.code);
          }
        }
      }
    }).catch((error: any)=>{
      console.log(error);
    })

  } 

}