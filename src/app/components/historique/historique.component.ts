import { Component, OnInit, ViewChild } from '@angular/core';
import { HistoriqueService } from './historique.service';
import { HistoriqueI } from 'src/app/modeles/Types';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {
  histo: HistoriqueI[] = [];

  constructor(public historiqueService:HistoriqueService) { }

  async ngOnInit(): Promise<void> {
    this.fetchHistorique();
    //this.renderChart(); Pas utilisé car je l'appelle dans fetchHistorique
    Chart.defaults.color = '#ffffff';
  }

  async fetchHistorique() {
    const { data, error } = await this.historiqueService.getHistorique(); // Fetch sur supabase
    if (data) {
      // Si des data j'attribue les valeur de l'interface HistoriqueI
      this.histo = data.map((item: { [x: string]: any }) => ({
        id: item['id'],
        created_at: item['created_at'],
        humidite: item['humidite'],
        macAddress: item['macAddress']
      }));
        console.log(this.histo.map((item) => item['humidite']));
        this.renderChart(); // J'appelle ici pour pouvoir lui attribuer des valeurs dynamiques dans data (ligne 43 et 56)
    }
    if (error) {
      console.log("Erreur de fetch" , error);      
    }
  }

  renderChart() {
    const myChart = new Chart("linechart", {
      type: 'line',
      data: { 
        labels: this.histo.map((item) => { const date = new Date(item.created_at); // Valeurs dynamiques
          return date.toLocaleString('fr-FR', { // pour formater la date au format Français
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          });
        }),              
        datasets: [{
          label: 'Humidité',
          data: this.histo.map((item) => item['humidite']), // Valeurs dynamiques 
          /* [100, 80, 65, 50, 40, 35, 20], */
          borderWidth: 4,  
          borderColor: "#3575D6",
          backgroundColor: "#3575D6",                                   
        }],        
      },
      options: {
        responsive: true, // Permet au graphique de s'adapter à la taille du conteneur
        maintainAspectRatio: false, // Désactive le maintien du ratio d'aspect
        scales: {          
          y: {
            beginAtZero: true,
            ticks: { // La couleur du texte vertical
              color: '#ffffff',
              //stepSize: 20, // Espacement entre les valeurs             
            },
            grid: {
              color: "#4ECB71" // mettre la couleur de la grille en blanc
            }
          },
          x: {
            max:12, // Pour afficher pas plus de 12 valeurs sur l'axe X
            ticks: { // La couleur du texte horizontal
              color: '#ffffff'
            },
            grid: {
              color: "#4ECB71" // mettre la couleur de la grille en blanc
            }
          }
        }
      }
    });
  }

}





/* ['01/05/23', '02/05/23', '03/05/23', '04/05/23', '05/05/23', '06/05/23', '07/05/23'], */  