import plataforma from "../Models/ModelPlataform.js";

class RepositoryPlataforma {
    static async plataformAll(){
        try{
            const plataformAll = await plataforma.findAll();
            return plataformAll;
        }catch(error){
            throw new Error(`Erro ao criar comprador: ${error}`);
        }
    }

    static async plataformbyid(id){
        try{
            const plataformabyid = await plataforma.findByPk(id);
            return plataformabyid;
        }catch(error){
            throw new Error(`Erro ao buscarid: ${error}`);
        }
    }


    static async plataCreate(name){
        try{
            const plataformcreate = await plataforma.create({
                where:{ name_plataform: name },
            });
            return plataformcreate;
        }catch(error){
            throw new Error(`Erro ao criar comprador: ${error}`);
        }
    }



}

export default  RepositoryPlataforma;