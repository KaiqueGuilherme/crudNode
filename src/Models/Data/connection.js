import { Sequelize } from "sequelize";

 const conn = new Sequelize('Leads', 'postgres', 'Kaique1234' ,{
    dialect: 'postgres',
    host: 'localhost',
    define: {
        freezeTableName: true, // Impede a pluralização automática
    },
})

export default conn;