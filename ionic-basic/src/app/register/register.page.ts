import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
  
})
export class RegisterPage implements OnInit {

  user: User = new User();


  constructor(private router: Router,
    private autSvc: AuthService) { }

  ngOnInit() {
  }
  async onRegister(){
    this.autSvc.onRegister(this.user).then(user=>{
      if(user){
        console.log('Se ha creado un nuevo usuario con exito!!!');
        this.router.navigate(['/login']);
      }
    }).catch(error=>{
      console.log('Error al crear usuario!');
    })

  } 
}