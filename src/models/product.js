import { DataTypes } from 'sequelize';

export default (sequelize)=>{
    const Product = sequelize.define('Product',{
        id:{
            type:DataTypes.STRING,
            primaryKey:true
        },
        name:{
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
            type:DataTypes.NUMBER,
            allowNull:false
        }
    })
    return Product
}