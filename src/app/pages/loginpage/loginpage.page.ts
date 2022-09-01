import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {

  
  usuario={
    username:'',
    password:''
  }

  
  constructor(private router:Router) { }

  ngOnInit() {
  }


  onSubmit()
  {
    if(this.usuario.username=="waco" && this.usuario.password=="123")
    {
      let navigationExtras:NavigationExtras={
        state:{
          usr:this.usuario,
        }
      }
      console.log("Usuario valida");
      console.log(this.usuario);

      this.router.navigate(['/home',navigationExtras]);
    }
    else{
      console.log("Acceso denegado");
    }
    
  


  }
}
