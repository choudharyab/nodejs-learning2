class Config {
    constructor(){
    }
    getPort(){
        return process.env.port? process.env.port: 3000
    }

    getTokenExpirationTime(){
        return 3600;
    }
}

class DbConfig {

    // Local
    // //TODO: Please add proper credentials here
    // getUser(){ return 'pocketdeveloper' }
    // getHost(){ return '18.222.18.36' } 
    // getDatabase(){ return 'pocketsavey_db' }
    // getPassword(){ return 'pocketdeveloper123'  } 
    // getPort(){ return 3306 }

    //Live
      //TODO: Please add proper credentials here
      getUser(){ return 'pocketdeveloper' }
      getHost(){ return '18.222.18.36' } 
      getDatabase(){ return 'pocketsavey_db' }
      getPassword(){ return 'pocketdeveloper123'  } 
      getPort(){ return 3306 }

}

let config = new Config();
let dbConfig = new DbConfig();

module.exports = {
    serverConfig: config,
    dbConfig: dbConfig
}