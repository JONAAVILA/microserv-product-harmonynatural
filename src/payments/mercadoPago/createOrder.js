import { Preference } from "mercadopago";
import client from "./createPreferenc.js";

const Order = (items)=>{
    try {
        const preference = new Preference(client)
        
        preference.create({
            body:{
                items:items.map(item =>({
                    tittle:item.tittle,
                    quantity:item.stock,
                    unit_price:item.price
                }))
            }
        })

        return response.body.init_point
    } catch (error) {
        console.log(error)
        return {error:error.message}
    }
}

export default Order