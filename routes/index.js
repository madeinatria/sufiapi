var express = require('express');
var mysql = require('mysql');
const jwt = require('jsonwebtoken');
var router = express.Router();

var slug = require('slug');
var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "rickyjerry_0",
  database: "cia"
});
console.log("hi");
con.connect(function(err) {
  if (err) {
    throw err ;
  }
  else {
    console.log("Connected!");
  }
  
    //console.error.bind(console, 'MongoDB connection error:');

  //res.render('index', { output: err });
  //console.log("Connected!");
  
  
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CIA Solves Problems!!' });
  console.log("hello");

  
});

/* Creae API route */
router.get('/api', (req, res) => {
  res.json({

      msg: "Welcome to sufi DB, made by CIA"

  });

});

router.post('/api/posts', verifyToken, (req, res) => {

  jwt.verify(req.token, 'SuperSecRetKey', (err, authData)=>{

      if(err){

          res.sendStatus(403);

      }else{

          res.json({

              msg: "A new post is created",

              authData

          });
      }

  });

});
//User signin route 
router.post('/api/signin', (req, res) => {
  const user = {
      id: 1,
      username: "sufian",
      password: "sufiboy"
  }
  if(user.username==req.body.username && user.password==req.body.password) {
    jwt.sign({user},'SuperSecRetKey', { expiresIn: 60 * 60 }, (err, token) => {
      res.json({token});
  });
  }
  else {
    res.send("Invalid Login")
  }
  console.log(req.body.username);
  console.log(user.username);
  
  
 


});


        router.post('/api/check', verifyToken, function(req, res, next) {
          jwt.verify(req.token, 'SuperSecRetKey', (err, authData)=>{

            if(err){
      
                res.sendStatus(403);
      
            }else{
      
                res.json(req.body);
            }
      
        });
        }) ;

/* for component registration */

router.post('/component/reg', verifyToken, function(req, res, next) {
 /* jwt.verify(req.token, 'SuperSecRetKey', (err, authData)=>{

    if(err){

        res.sendStatus(403);

    }else{

        
     */       
            
    var qu = 'INSERT INTO item_details values('+null+',"'+req.body.name+'","'+req.body.category+'","'+req.body.subcategory+'","'+req.body.desc+'","'+req.body.img+'","'+req.body.url+'","'+req.body.specs+'","'+req.body.hsn+'",'+req.body.quantity+',"'+req.body.manufacturer+'","'+req.body.modelid+'","'+req.body.dslink+'","'+req.body.tlink+'",'+req.body.cost+',"'+req.body.cab+'","'+req.body.cup+'","'+req.body.room+'",'+req.body.venderid+')' ;
    console.log(qu);
        con.query(qu, function(err, rows, fields) {
          if(!err) {
            console.log(rows.affectedRows);
                        res.send(rows);
          }
          else {
            res.send(err) ;
            
          }
        });
/*
    }

}); */
}) ;

// end component registration

/* for vendor registration */

router.post('/vendor/reg', verifyToken, function(req, res, next) {
  jwt.verify(req.token, 'SuperSecRetKey', (err, authData)=>{

    if(err){

        res.sendStatus(403);

    }else{

        
            
            
            var qu = 'INSERT INTO vendor_details values('+null+',"'+req.body.name+'",'+req.body.gst+',"'+req.body.phone+'","'+req.body.email+'","'+req.body.url+'")' ;
            console.log(qu);
        con.query(qu, function(err, rows, fields) {
          if(!err) {
            console.log(rows.affectedRows);
                        res.send(rows);
          }
          else {
            res.send(err) ;
            
          }
        });

    }

});
}) ;

// end vendor registration

/* for student registration */

router.post('/student/reg', verifyToken, function(req, res, next) {
  jwt.verify(req.token, 'SuperSecRetKey', (err, authData)=>{

    if(err){

        res.sendStatus(403);

    }else{

        
            
            
            var qu = 'INSERT INTO student_details values("'+req.body.name+'","'+req.body.usn+'","'+req.body.phone+'","'+req.body.email+'")' ;
            console.log(qu);
        con.query(qu, function(err, rows, fields) {
          if(!err) {
            console.log(rows.affectedRows);
                        res.send(rows);
          }
          else {
            res.send(err) ;
            
          }
        });

    }

});
}) ;

// end student registration

/* for faculty registration */

router.post('/faculty/reg', verifyToken, function(req, res, next) {
  jwt.verify(req.token, 'SuperSecRetKey', (err, authData)=>{

    if(err){

        res.sendStatus(403);

    }else{

        
            
            
            var qu = 'INSERT INTO faculty_details values("'+req.body.name+'","'+req.body.phone+'","'+req.body.email+'","'+req.body.id+'")' ;
            console.log(qu);
        con.query(qu, function(err, rows, fields) {
          if(!err) {
            console.log(rows.affectedRows);
                        res.send(rows);
          }
          else {
            res.send(err) ;
            
          }
        });

    }

});
}) ;

// end faculty registration

/* for project registration */

/* for not project registration */

router.post('/project/reg', verifyToken, function(req, res, next) {
  jwt.verify(req.token, 'SuperSecRetKey', (err, authData)=>{

    if(err){

        res.sendStatus(403);

    }else{

        
            
            
            var qu = 'INSERT INTO project_details values('+req.body.project_id+',"'+req.body.name+'","'+req.body.id+'","'+req.body.description+'","'+req.body.itemids+'","'+req.body.img+'","'+req.body.url+'","'+req.body.sdate+'","'+req.body.edate+'","'+req.body.status+'",'+req.body.budget+','+req.body.cost+')' ;
            console.log(qu);
            con.query(qu, function(err, rows, fields) {
          if(!err) {
            console.log(rows.affectedRows);
                        res.send(rows);
          }
          else {
            res.send(err) ;
            
          }
        });

    }

});
}) ;

// end project registration
/* for trans registration */

router.post('/transaction/reg', verifyToken, function(req, res, next) {
  jwt.verify(req.token, 'SuperSecRetKey', (err, authData)=>{

    if(err){

        res.sendStatus(403);

    }else{

        
            
            
            var qu = 'INSERT INTO item_trans values('+null+','+req.body.pid+',"'+req.body.time+'","'+req.body.type+'","'+req.body.uid+'",'+req.body.cost+','+req.body.gst+','+req.body.value+',"'+req.body.iid+'","'+req.body.iimg+'",'+req.body.budget+','+req.body.quantity+',"'+req.body.date+'","'+req.body.itemid+'")' ;
            console.log(qu);
        con.query(qu, function(err, rows, fields) {
          if(!err) {
            console.log(rows.affectedRows);
                        res.send(rows);
          }
          else {
            res.send(err) ;
            
          }
        });

    }

});
}) ;

// end trnas registration

/* for points registration */

router.post('/points/reg', verifyToken, function(req, res, next) {
  jwt.verify(req.token, 'SuperSecRetKey', (err, authData)=>{

    if(err){

        res.sendStatus(403);

    }else{

      
      
      
      var qu = 'INSERT INTO points(uid,usn,points,status,timestamp,link) values('+null+',"'+req.body.usn+'",'+req.body.points+',"'+req.body.status+'","'+req.body.timestamp+'","'+req.body.link+'")' ;
            console.log(qu);
        con.query(qu, function(err, rows, fields) {
          if(!err) {
            console.log(rows.affectedRows);
                        res.send(rows);
          }
          else {
            res.send(err) ;
            
          }
        });

    }

});
}) ;

// end points registration

// end of all putting
/* for points get */

router.post('/points/get', function(req, res, next) {
  /*  jwt.verify(req.token, 'SuperSecRetKey', (err, authData)=>{
  
      if(err){
  
          res.sendStatus(403);
  
      }else{
  
          
   */           
              
              var qu = 'SELECT * FROM points WHERE usn="'+req.body.usn+'"' ;
              console.log(qu);
          con.query(qu, function(err, rows, fields) {
            if(!err) {
             // console.log(rows.affectedRows);
                          res.json(rows);
            }
            else {
              res.send(err) ;
              
            }
          });
  /*
      }
  
  }); */
  }) ;
  
  // end points get

/* for student get */

router.post('/student/get', function(req, res, next) {
/*  jwt.verify(req.token, 'SuperSecRetKey', (err, authData)=>{

    if(err){

        res.sendStatus(403);

    }else{

        
 */           
            
            var qu = 'SELECT * FROM student_details' ;
            console.log(qu);
        con.query(qu, function(err, rows, fields) {
          if(!err) {
           // console.log(rows.affectedRows);
                        res.json(rows);
          }
          else {
            res.send(err) ;
            
          }
        });
/*
    }

}); */
}) ;

// end student get
/* for faculty get */

router.post('/faculty/get', function(req, res, next) {
 /* jwt.verify(req.token, 'SuperSecRetKey', (err, authData)=>{

    if(err){

        res.sendStatus(403);

    }else{

    */    
            
            
            var qu = 'SELECT * FROM faculty_details' ;
            console.log(qu);
        con.query(qu, function(err, rows, fields) {
          if(!err) {
            //console.log(rows.affectedRows);
                        res.json(rows);
          }
          else {
            res.send(err) ;
            
          }
        });
/*
    }

}); */
}) ;

// end faculty get
/* for vendor get */

router.post('/vendor/get', function(req, res, next) {
/*  jwt.verify(req.token, 'SuperSecRetKey', (err, authData)=>{

    if(err){

        res.sendStatus(403);

    }else{

        
   */         
            
            var qu = 'SELECT * FROM vendor_details' ;
            console.log(qu);
        con.query(qu, function(err, rows, fields) {
          if(!err) {
           // console.log(rows.affectedRows);
                        res.json(rows);
          }
          else {
            res.send(err) ;
            
          }
        });
/*
    }

}); */
}) ;

// end vendor get
/* for project get */

router.post('/project/get', function(req, res, next) {
/*  jwt.verify(req.token, 'SuperSecRetKey', (err, authData)=>{

    if(err){

        res.sendStatus(403);

    }else{

 */       
            
            
            var qu = 'SELECT * FROM  project_details' ;
            console.log(qu);
        con.query(qu, function(err, rows, fields) {
          if(!err) {
            //console.log(rows.affectedRows);
                        res.json(rows);
          }
          else {
            res.send(err) ;
            
          }
        });
/*
    }

}); */
}) ;

// end project get
/* for item get */

router.post('/item/get', function(req, res, next) {
 /* jwt.verify(req.token, 'SuperSecRetKey', (err, authData)=>{

    if(err){

        res.sendStatus(403);

    }else{

     */   
            
            
            var qu = 'SELECT * FROM item_details' ;
            console.log(qu);
        con.query(qu, function(err, rows, fields) {
          if(!err) {
            //console.log(rows.affectedRows);
                        res.json(rows);
          }
          else {
            res.send(err) ;
            
          }
        });
/*
    }

}); */
}) ;

// end item get
/* for trans get */

router.post('/trans/get', function(req, res, next) {
/*  jwt.verify(req.token, 'SuperSecRetKey', (err, authData)=>{

    if(err){

        res.sendStatus(403);

    }else{

        
   */         
            
            var qu = 'SELECT * FROM item_trans' ;
            console.log(qu);
        con.query(qu, function(err, rows, fields) {
          if(!err) {
            //console.log(rows.affectedRows);
                        res.json(rows);
          }
          else {
            res.send(err) ;
            
          }
        });
/*
    }

});  */
}) ;

// end trans get
// add column
router.post('/:id/add', function(req, res, next) {
  /* jwt.verify(req.token, 'SuperSecRetKey', (err, authData)=>{
  
      if(err){
  
          res.sendStatus(403);
  
      }else{ */
          
              var table_name = req.params.id  ;
              var request_type = req.body.type ;
             
              if (request_type == 'char' || request_type == 'CHAR') {
                type = 'varchar(25)' ;
              }
              else if(request_type == 'int' || request_type == 'INT'){
                type = 'INT' ;
              }
              else {
                type = 'varchar(25)' ;
              }
              
              var query = 'ALTER TABLE '+ table_name + ' ADD '+ req.body.column + ' '+ type+' ;' ;
              
              console.log(query);
              con.query(query, function(err, rows, fields) {
            if(!err) {
              //console.log(rows.affectedRows);
                          res.json(rows);
            }
            else { 
              res.send(err) ;
              
            }
          });  
  /*
      }
  
  });  */
  }) ;
  // add column

/** verifyToken method - this method verifies token */
function verifyToken(req, res, next){
  
  //Request header with authorization key
  const bearerHeader = req.headers['authorization'];
  
  //Check if there is  a header
  if(typeof bearerHeader !== 'undefined'){

      const bearer = bearerHeader.split(' ');
      
      //Get Token arrray by spliting
      const bearerToken = bearer[1];

      req.token = bearerToken;
      console.log(req.token);
      
      //call next middleware
      next();

  }else{

      res.sendStatus(403);

  }
}
module.exports = router;
