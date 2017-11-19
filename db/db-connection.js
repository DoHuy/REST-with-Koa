const config = require('config/mongo.json');
class Connection{
    /**
     * connect db
     * @returns {Promise.<*>}
     */
    static async connect(){
        let conn = null;
        try{
            conn = await conn.connect(config.url_mongo);
        }catch(err){
            console.log(err.message);
        }
        return conn;
    }


}

module.exports = Connection;