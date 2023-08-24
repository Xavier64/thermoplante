// Interface inutile ?
export interface PlanteI {
    id: number,
    nom: string,
    description?: string,
    humidite?: number,
    seuil: number,
    date?: string
}

export interface CapteurI {
    id?: number,
    macAddress: string,
    humidite: number,
    plante?: string,
    nom?: string,
    alerte: number
}

export interface HistoriqueI {
    id: number,
    created_at: string,
    humidite: number,
    macAddress: string
}