import LeadsService from "../Servicee/ServiceLead.js";

class LeadController {
    static async postCreateLead(req, res) {
        const { name, number, id_plataform } = req.body;
            
        try {
            const result = await LeadsService.createLead(name, number, id_plataform);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getLeads(req, res) {
        try {
            const result = await LeadsService.leadsAll();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getLeadbyid(req, res) {
        const idclient = req.params.idLead;
            
        try {
            const result = await LeadsService.leadsById(idclient);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deleteLead(req, res) {
        const idclient = req.params.idLead;
        try {
            const result = await LeadsService.leadDelete(idclient);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updateLead(req, res) {
        const idclient = req.params.idLead;
        const {name, number, id_plataform} = req.body;
        try {
            const result = await LeadsService.leadUpdate(idclient, name, number, id_plataform);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default LeadController;