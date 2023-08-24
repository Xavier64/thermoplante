import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { HistoriqueComponent } from './components/historique/historique.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component:LoginComponent },
  // Avec canActivate: [AuthGuard] seul un user authentifié peut accéder à ces routes
  { path: 'accueil', component:AccueilComponent, canActivate: [AuthGuard] },
  { path: 'gestion', component:GestionComponent, canActivate: [AuthGuard] },
  { path: 'historique', component:HistoriqueComponent, canActivate: [AuthGuard] },
  // Ci-dessous dans le cas d'une URL vide je redirige vers la page login
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
