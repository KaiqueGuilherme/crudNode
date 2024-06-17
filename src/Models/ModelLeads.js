import { DataTypes, Model} from "sequelize";
import conn from "./Data/connection.js";
import plataforma from "./ModelPlataform.js";

class Lead extends Model {}

Lead.init({
    id_lead: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name_lead: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    number_lead: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    data_value: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    status_lead: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    plataform_lead: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    sequelize:conn,
    modelName: 'leads',
    timestamps: false,
});

Lead.belongsTo(plataforma, { foreignKey: 'plataform_lead' });

export default Lead;