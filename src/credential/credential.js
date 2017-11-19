class Credential{
    constructor(id){
        this.id = id;
    }

    setData(data){
        this.data = data;
    }

    getData(){
        return this.data;
    }

}

module.exports = Credential;