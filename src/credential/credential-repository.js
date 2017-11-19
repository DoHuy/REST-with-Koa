const Connection = require('db/db-connection');
class CredentialRepository{
    constructor(){
        this.conn = Connection.connect();
    }

    /**
     * get detail credential
     * @param id
     * @returns {Promise.<*>}
     */

   async  getDetail(id){
        return await this.conn.collection.findOne(id);
    }

    /**
     * get list credential
     * @returns {Promise.<*>}
     */

    async getAllCredential(){
       return await this.conn.collection.find();
    }

    /**
     *
     * @param id
     * @param newData
     * @returns {Promise.<*>}
     */

    async updateCredential(id, newData){
        return await this.conn.collection.updateOne(id, newData);
    }

    /**
     *
     * @param id
     * @returns {Promise.<*>}
     */
    async  deleteCredential(id){
        return await this.conn.collection.deleteOne(id);
    }

    /**
     *
     * @param obj
     * @returns {Promise.<*>}
     */
    async addCredential(obj){
        return await  this.conn.collection.insertOne(obj);
    }


}

module.exports = CredentialRepository;