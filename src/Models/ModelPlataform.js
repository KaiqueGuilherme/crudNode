import { DataTypes, Model} from "sequelize";
import conn from "./Data/connection.js";

class plataforma extends Model {}


plataforma.init({
    id_plataform: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name_plataform: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize:conn,
    modelName: 'plataforma',
    timestamps: false,
});

export default plataforma;