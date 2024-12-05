import { DataTypes } from 'sequelize';

export default (sequelize)=>{
    const Product = sequelize.define('Product',{
        id:{
            type:DataTypes.STRING,
            primaryKey:true
        },
        tittle:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        image:{
            type:DataTypes.STRING,
            allowNull:false
        },
        price:{
            type:DataTypes.STRING,
            allowNull:false
        },
        category:{
            type:DataTypes.STRING,
            allowNull:false
        },
        stock:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })
    return Product
}