import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CapteurI } from 'src/app/modeles/Types';
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AcceuilService {
  private supabase: SupabaseClient;
  _session: AuthSession | null = null;
  
  capteur: CapteurI[] = [];

  constructor(private http:HttpClient) {this.supabase = createClient(environment.supabaseUrl,environment.supabaseKey);}

  //http://localhost:3000/v1/humidite  Adresse API en localhost
  //http://107.22.213.72:3000/v1/humidite  Adresse API pour AWS
  getHumidite() {
    this.http.get<CapteurI[]>('http://107.22.213.72:3000/v1/humidite').subscribe(
      {
        next: response => this.capteur = response,
        error: err => console.log(err),
        complete: () => console.log("getHumidite" , this.capteur)
      }
    );
    return this.capteur;        
  };

  
  
 
   

}






