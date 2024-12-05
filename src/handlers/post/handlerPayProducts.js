import Order from "../../payments/mercadoPago/createOrder"

const handlerPayProducts = async (items)=>{
    const point = await Order(items)
    if(!point) throw new Error("Error al crear pago");
    return point
}

export default handlerPayProducts