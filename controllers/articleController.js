const db = require("../models/articles")
module.exports={
    create:function(req,res){
       db.create({title:req.body.title,url:req.body.url,date:req.body.date}) 
       .then(dbModel => res.json(dbModel))
       .catch(err => res.status(422).json(err));
    },
    findAll: function(req, res) {
        
          db.find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
          db.findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}