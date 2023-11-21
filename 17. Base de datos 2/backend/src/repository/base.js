class RepositoryBase {
    constructor(modelo) {
        this.modelo = modelo;
    }

    findAll = async () => {
        try {
            const result = await this.modelo.findAll(); //Se debe usar el this.modelo, sino no va e encontrar el elemento
            return result;
        } catch(err) {
            console.error(err);
            return null;
        }
        
    }

    create = async (object) => {
        try {
            return await this.modelo.create(object)
        } catch(err) {
            console.error(err);
            return null;
        }
        
    }

    findOne = async (id) => {
        try {
            return await this.modelo.findOne({
                where: { id } //Especifica que se le va aenviar, en este caso, el id se va a enviar
            })
        }
        catch(err) {
            console.error(err);
            return null;
        }
    }

    update =  async(object) => {
        const { id } = object;
        try {
            const result = await this.modelo.update({ where: { id } }) //Si encuentra el id
    
            if (result) {
                result.set(object) //Se seta el resultado con un nuevo objeto que se implementará
                result.save()
            }
    
            return result;
                
        }
        catch(err) {
            console.error(err);
            return null;
        }
        
    }

    remove = async (id) => {
        try {
            await this.modelo.destroy({
                where: {
                    id
                }
            })
            return true;
        } catch (err) {
            console.error(err)
            return null
        }
    
    }


}

export default RepositoryBase;