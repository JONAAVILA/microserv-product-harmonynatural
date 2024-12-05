import { MercadoPagoConfig } from 'mercadopago'

const { ACCESS_TOKEN_MP } = process.env

const client = new MercadoPagoConfig(
    {
        accessToken: ACCESS_TOKEN_MP
    }
)

export default client