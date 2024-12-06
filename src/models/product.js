import { DataTypes } from 'sequelize';

export default (sequelize)=>{
    const Product = sequelize.define('Product',{
        id:{
            type:DataTypes.UUID,
            primaryKey:true
        },
        idAdmin:{
            type:DataTypes.STRING,
            allowNull:false
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
        downloadable:{
            type:DataTypes.BOOLEAN,
            defaultValue:true
        },
        category:{
            type:DataTypes.STRING,
            allowNull:false
        },
        stock:{
            type:DataTypes.STRING,
            allowNull:false
        },
        active:{
            type:DataTypes.BOOLEAN,
            defaultValue:true
        }
    })
    return Product
}