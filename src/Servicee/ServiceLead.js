import RepositoryPlataforma from "../Repository/RepositoryPlataform.js";
import RepositoryLead from "../Repository/RepositoryUser.js";



class LeadsService {
    static async leadsAll() {
        try {
            const leads = await RepositoryLead.LeadsAll();

            if (leads.length === 0) {
                return { success: true, message: 'Nenhum lead encontrado' };
            }

            for (const lead of leads) {
                const plataforma = await RepositoryPlataforma.plataformbyid(lead.plataform_lead);
                if (!plataforma) {
                    console.warn(`Plataforma não encontrada para lead com ID ${lead.id_lead}`);
                    continue; 
                }
                lead.plataform_lead = {
                    id_plataform: plataforma.id_plataform,
                    name_plataform: plataforma.name_plataform
                };
            }
            return { sucess: true, leads };
        } catch (error) {
            throw new Error(`Erro na service: ${error}`);
        }
    }

    static async leadsById(id) {
        try {
            const lead = await RepositoryLead.leadById(id);

            if (!lead) {
                return { success: true, message: 'Nenhum lead encontrado' };
            }

            const plataforma = await RepositoryPlataforma.plataformbyid(lead.plataform_lead);
            lead.plataform_lead = plataforma;
            return { sucess: true, lead: lead };
        } catch (error) {
            throw new Error(`Erro na service: ${error}`);
        }
    }

    static async leadDelete(id) {
        try {
            const lead = await RepositoryLead.leadDelete(id);
            if(!lead){
                return { success: false, message: 'Não conseguimos apagar este registro' };
            }else{
                return { success: true, message: 'Registro Apagado' };
            }
        } catch (error) {
            throw new Error(`Erro na service: ${error}`);
        }
    }

    static async createLead(name, number, id_plataform) {
        try {
            const getPlataformid = await RepositoryPlataforma.plataformbyid(id_plataform);
            const date = new Date();
    
            if (!getPlataformid) {
                return { success: false, message: 'Plataforma não encontrada' };
            }
    
            const status = true;
            const create = await RepositoryLead.leadCreate(name, number, date, status, getPlataformid.id_plataform);
            
            if (!create) {
                return { success: false, message: 'Erro ao criar lead' };
            }
    
            return { success: true, message: 'Lead criado com sucesso' };
        } catch (error) {
            throw new Error(`Erro na service: ${error}`);
        }
    }
    

    static async leadUpdate(idclient, name, number, id_plataform) {
        console.log(idclient, name, number, id_plataform);
        const valuesLead = {
            name_lead: name,
            number_lead: number,
            data_value: new Date().toString(),
            plataform_lead: id_plataform,
        };

        const camposAtualizar = {};
        Object.keys(valuesLead).forEach(key => {
            if (valuesLead[key] !== null && valuesLead[key] !== undefined) {
                camposAtualizar[key] = valuesLead[key];
            }
        });

        try {
            const lead = await RepositoryLead.leadById(idclient);

            if (!lead) {
                return { sucess: true, message: 'Lead não encontrado' };
            }

            const updatedLead = await RepositoryLead.leadUpdate(idclient, camposAtualizar);
            console.log(updatedLead);
            console.log(camposAtualizar);
            return updatedLead;
        } catch (error) {
            throw new Error(`Erro na service: ${error}`);
        }
    }
}

export default LeadsService;