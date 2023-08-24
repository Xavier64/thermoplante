import { Component, OnInit } from '@angular/core';
import { AcceuilService } from './acceuil.service';
import { CapteurI } from 'src/app/modeles/Types';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  
  today!: Date;
  selectedCapteur!: CapteurI;
    
  constructor(public mesPlantes:AcceuilService) { }

  async ngOnInit():  Promise<any> {
    //this.renderChart();
    //Chart.defaults.color = '#ffffff';
    this.today = new Date;
    this.mesPlantes.getHumidite();    
  }
  
  // Méthode pour afficher les données du capteur choisi uniquement - Utiliser dans le select
  onSelect(value: CapteurI) {
    this.selectedCapteur = value;
    console.log("La méthode onSelect, j'ai sélectionné : " + this.selectedCapteur.nom);
  }

  
  
  

}











/* renderChart() {
    const myChart = new Chart("linechart", {
      type: 'line',
      data: {
        labels: ['01/05/23', '02/05/23', '03/05/23', '04/05/23', '05/05/23', '06/05/23', '07/05/23'],        
        datasets: [{
          label: 'Humidité',
          data:  //this.fleur.map(plante => plante.humidite),
          [100, 80, 65, 50, 40, 35, 20],
          borderWidth: 4,  
          borderColor: "#3575D6",
          backgroundColor: "#3575D6",                                   
        }],        
      },

      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: { // La couleur du texte vertical
              color: '#ffffff'
            },
            grid: {
              color: "#4ECB71" // mettre la couleur de la grille en blanc
            }
          },
          x: {
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
  } */





/* const fleur = this.mesPlantes.getPlante(); 
    console.log(fleur);      
    
    if (fleur && fleur.length > 0 && fleur[0].humidite) {
      const humidite = fleur[0].humidite;
      console.log("miaou ", humidite); 
    
      
      const myChart = new Chart("linechart", {
        type: 'line',
        data: {
          labels: ['01/05/23', '02/05/23', '03/05/23', '04/05/23', '05/05/23', '06/05/23', '07/05/23'],        
          datasets: [{
            label: 'Humidité',
            data: humidite,            
            borderWidth: 4,  
            borderColor: "#3575D6",
            backgroundColor: "#3575D6",
                                   
          }],        
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: { // La couleur du texte vertical
                color: '#ffffff'
              },
              grid: {
                color: "#4ECB71" // mettre la couleur de la grille en blanc
              }
            },
            x: {
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
    } else {
      console.error('Erreur: la plante est introuvable ou ne contient pas de données d\'humidité.');
    } */