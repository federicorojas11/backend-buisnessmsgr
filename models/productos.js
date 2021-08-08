const productos = [{
    id: '1',
    nombre: "gaseossa de 1 litro",
    precio: 150,
    categoria: 1,
    estado: "ACTIVO"
},
{
    id: '2',
    nombre: "gaseossa de 2 litro",
    precio: 150,
    categoria: 1,
    estado: "ACTIVO"
},
{
    id: '3',
    nombre: "jugo de 1 litro",
    precio: 150,
    categoria: 1,
    estado: "INACTIVO"
},
{
    id: '4',
    nombre: "harina leudante",
    precio: 150,
    categoria: 2,
    estado: "INACTIVO"
},
{
    id: '5',
    nombre: "harina comun",
    precio: 150,
    categoria: 2,
    estado: "ACTIVO"
}
]

const findById=(id)=>{
    let prod 
    prod =  productos.find(product =>{
       return product.id == id;
    })
    console.log(prod)
    return prod
}

const find=({nombre,estado})=>{
    let product
    if(estado){
        product= productos.filter(productos => productos.estado === estado)
    }
    return product;
}

module.exports = { 
    findById,
    find
 }