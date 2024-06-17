import express from 'express';
import LeadController from './Controller/ControllerLead.js';



const router = express.Router();

const Leads = express.Router()
Leads.post('/createLead', await LeadController.postCreateLead);
Leads.get('/getLeads', await LeadController.getLeads);
Leads.get('/getLead/:idLead', await LeadController.getLeadbyid);
Leads.post('/deleteLead/:idLead', await LeadController.deleteLead);
Leads.post('/updateLead/:idLead', await LeadController.updateLead);

router.use('/leads', Leads);

export default router;