export class Items {
    public itemid!: number
    public introduccion! : string
    public desarrollo!: string
    public conclusion! : string
    public proyecto! : number

    set(data : any){
        this.itemid = data.itemid
        this.introduccion = data.introduccion
        this.desarrollo = data.desarrollo
        this.conclusion = data.conclusion
        this.proyecto = data.proyecto
    

        
    }
}
