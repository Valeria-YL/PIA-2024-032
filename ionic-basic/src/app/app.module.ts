import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import{enableIndexedDbPersistence, getFirestore, provideFirestore} from '@angular/fire/firestore';


import { IonicModule } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import{ list} from '@angular/fire/database';


import {AppComponent} from './app.component';

import { routes } from './app.routes';

import config from 'capacitor.config';
import { Firestore } from 'firebase/firestore';

@NgModule({
  imports: [
   
    CommonModule,
    FormsModule,
    IonicModule,
    routes,
    
  ],
  declarations: [AppComponent]


})
export class AppModule {}

function connectEmulator(firestore: Firestore, arg1: string, arg2: number) {
  throw new Error('Function not implemented.');
}
