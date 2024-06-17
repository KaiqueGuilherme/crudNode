import Lead from "../Models/ModelLeads.js";

 class RepositoryLead {
    static async LeadsAll() {
        try {
            const LeadAll = await Lead.findAll();
            return LeadAll;
        } catch (error) {
            throw new Error(`Erro ao buscar leads: ${error}`);
        }
    }

    static async leadById(id) {
        try {
            const Leadbyid = await Lead.findByPk(id);
            return Leadbyid;
        } catch (error) {
            throw new Error(`Erro ao buscar lead por ID: ${error}`);
        }
    }

    static async leadDelete(id) {
        try {
            const leadDestroy = await Lead.destroy({
                where: {
                    id_lead: id,
                },
            });
            return leadDestroy;
        } catch (error) {
            throw new Error(`Erro ao deletar lead: ${error}`);
        }
    }

    static async leadCreate(name, number, date, status, id_plataform) {
        try {
            const create = await Lead.create({
                name_lead: name,
                number_lead: number,
                data_value: date,
                status_lead: status,
                plataform_lead: id_plataform,
            });

            return create;
        } catch (error) {
            throw new Error(`Erro ao criar lead: ${error}`);
        }
    }

    static async leadUpdate(id_lead, camposAtualizados) {
        
        try {
            const [rowsUpdated] = await Lead.update(camposAtualizados, {
                where: { id_lead: id_lead },
            });
    
            if (rowsUpdated === 0) {
                return { success: false, message: 'erro ao atualizar' };
            }
            return rowsUpdated;
        } catch (error) {
            throw new Error(`Erro ao atualizar lead: ${error}`);
        }
    }
    
}

export default RepositoryLead;