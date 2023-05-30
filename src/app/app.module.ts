
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './modules/user/user.component';
import { UserheaderComponent } from './modules/user/userheader/userheader.component';
import { UserfooterComponent } from './modules/user/userfooter/userfooter.component';
import { RproyectoComponent } from './modules/user/rproyecto/rproyecto.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './modules/user/main/main.component';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserheaderComponent,
    UserfooterComponent,
    RproyectoComponent,
    MainComponent
   
   


 
   

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
