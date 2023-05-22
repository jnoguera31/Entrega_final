import { UsercolumComponent } from './modules/user/usercolum/usercolum.component';
import { UsereditorComponent } from './modules/user/usereditor/usereditor.component';
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




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserheaderComponent,
    UserfooterComponent,
    UsereditorComponent,
    UsercolumComponent,
    RproyectoComponent
   
   


 
   

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
