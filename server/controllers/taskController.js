// import db from '../db'
// const db = require('../db');

class Task {
  async getTasks(req,res){
     res.json('ok');
  }
}

module.exports = new Task();
