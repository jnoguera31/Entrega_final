export class Proyecto {

    public id! : number
    public titulo!: string
    public descripcion!: string
 
    set(data : any){
        this.id = data.id
        this.titulo = data.titulo
        this.descripcion = data.tesis
        
    }
}
