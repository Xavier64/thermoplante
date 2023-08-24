import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    //Le code ci-dessous empêche un utilisateur déja identifié de retourner sur la page login
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['accueil']);
    }
  }

  onSubmitForm(): void {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      // Je subscribe à la méthode login() pour lui transmettre les values du formulaire
      // Si les values correspondent à celle de la méthode login() je suis ok
      this.auth.login(this.loginForm.value).subscribe(
        {
          next: result => 
          {
            console.log(result); // Affiche les values renseignés dans le formulaire
            this.router.navigate(['/accueil']);
          },

          error: (error:Error) => alert(error.message) // Sinon erreur
        }        
      );
    }    
  }

}




/* (result) => {
  console.log(result); 
  this.router.navigate(['/accueil']);
},

(err: Error) => {
  alert(err.message);
} */