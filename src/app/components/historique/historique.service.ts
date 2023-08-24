import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
export class HistoriqueService {
  private supabase: SupabaseClient;
  _session: AuthSession | null = null;

  constructor() { this.supabase = createClient(environment.supabaseUrl,environment.supabaseKey) }

  // Méthode pour faire un fetch sur supabase
  async getHistorique() {
    const { data, error } = await this.supabase
      .from('historique')
      .select('*');
    if (data) {
      console.log("data", data);
    }
    if (error) {
      console.log('Erreur de fetch', error);
    }
    return { data, error };
  }


}
