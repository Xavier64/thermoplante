import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
  

  formulaire!: FormGroup;

  constructor(private formBuilder: FormBuilder, public supa: SupabaseService) { }

  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      nom: [null, [Validators.required]],
      macAddress: [null, [Validators.required]],
      plante: [null, [Validators.required]],
      alerte: [null, [Validators.required]],
    });
  }

  // Méthode utilisé dans le (ngSubmit) du formulaire 
  async onSubmit() {
    console.log(this.formulaire.value);
    const newEntry = {
      nom: this.formulaire.value.nom,
      macAddress: this.formulaire.value.macAddress,
      plante: this.formulaire.value.plante,
      alerte: this.formulaire.value.alerte
    };
    await this.supa.createCapteur(newEntry); // Appelle de la méthode supabase
    this.formulaire.reset();    
  }

}
