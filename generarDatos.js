//Llenar un arreglo de objetos dentro de un ciclo
export function generarDatos(){

    let nombresAlimentos=['chocolatina','tomate','lechuga','jamon','cucaracha']
    let tiposAlimentos=['animal','vegetal','insecto']
    let nivelesEnergia=[200,100,250,500,1000]
    let alimentos=[]

    //repetir algo 50 veces
    for(let i=0; i<50;i++){

        let alimento={}

        alimento.nombre=nombresAlimentos[Math.floor(Math.random()*nombresAlimentos.length)]
        alimento.tipo=tiposAlimentos[Math.floor(Math.random()*tiposAlimentos.length)]
        alimento.nivel=nivelesEnergia[Math.floor(Math.random()*nivelesEnergia.length)]

        alimentos.push(alimento)

    }
    return alimentos
}

