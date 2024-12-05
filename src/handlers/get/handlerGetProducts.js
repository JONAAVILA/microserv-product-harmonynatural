import { models } from '../../db.js'
 
const { Product } = models 

const handlerGetProduct = async ()=>{
    const product = await Product.findAll()
    if(!product) throw new Error('No hay productos')
    
    return product  
}

export default handlerGetProduct