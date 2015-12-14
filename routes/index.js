var express = require('express');
var mongodb = require('mongodb');
var log4js = require('log4js');
var crypto = require('crypto');
var router = express.Router();

var log = log4js.getLogger('logbook');
var cs = log4js.getLogger('console');

//config db
var server = new mongodb.Server('localhost',27017,{auto_reconnect:true});
var db = new mongodb.Db('logbook',server,{safe:true});

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '日志系统'});
});

router.get('/index',function(req,res,next){
  res.render('index', { title: '日志系统'});
});

/* logout page. */
router.get('/logout',function(req,res,next){
  req.session.destroy();
  res.render('index', { title: '日志系统'});
});

/* Get main page. */
router.get('/main',function(req,res,next){
  if(req.session.username != null){
    db.open(function(err,db){
      if(!err){
        cs.info('connect db');
        db.createCollection('signin',{safe:true},function(err,collection){
          if(err){
            cs.error(err);
          } else {
            collection.find({username:req.session.username}).toArray(function(err,docs){
              if(!err){
                res.render('main', { title: '日志系统',sigindata:docs});
              } else {
                cs.error(err);
              }
            });
          }
        });
      }
    });
  } else {
    res.render('index', { title: '日志系统'});
  }
});

/* POST login. */
router.post("/login",function(req,res,next){
  if(req.body.username.length<=0){
    res.json({state:false,msg:'用户名不能为空！'});
    return;
  }

  if(req.body.password.length<=0){
    res.json({state:false,msg:'密码不能为空！'});
    return;
  }

  db.open(function(err,db){
    if(!err){
      cs.info('connect db');
      db.createCollection('users',{safe:true},function(err,collection){
        if(err){
          cs.error(err);
        }else{
          collection.find().toArray(function(err,docs){
            if(!err){
              var noUser = true;
              for(var i = 0;i<docs.length;i++){
                if(req.body.username === docs[i].username){
                  var md5 = crypto.createHash('md5');
                  var password = md5.update(req.body.password).digest('base64');
                  if(password === docs[i].password){
                    req.session.username = req.body.username;
                    res.json({state:true,msg:''});
                  } else {
                    res.json({state:false,msg:'用户名或密码错误！'});
                  }
                  noUser = false;
                  break;
                }
              }
              if(noUser){
                res.json({state:false,msg:'用户名或密码错误！'});
              }
            }
          });
        }
      });
    }
  });
});

/* regist */
router.post("/regist",function(req,res,next){
  if(req.body.username.length <= 0 || req.body.username.length>20){
    res.json({msg:'用户名应是1-20个字符！',state:false});
    return;
  }

  if(req.body.password.length <=0 || req.body.password.length > 30){
    res.json({msg:'密码应是1-30个字符！',state:false});
    return;
  }

  if(req.body.password != req.body.repeatpassword){
    res.json({msg:'密码不一致！',state:false});
    return;
  }

  var md5 = crypto.createHash('md5');
  var password = md5.update(req.body.password).digest('base64');

  db.open(function(err,db){
    if(!err){
      cs.info('connect db');
      db.createCollection('users',{safe:true},function(err,collection){
        if(err){
          cs.error(err);
        } else {
          var tmp = {username:req.body.username,password:password,enabled:true};
          collection.insertOne(tmp,{safe:true},function(err,result){
            if(!err){
              res.json({msg:'注册成功！',state:true});
            } else {
              res.json({msg:'数据库插入错误！',state:false});
            }
          });
        }
      });
    }
  });
});

/* check repeat user */
router.post("/checkUser",function(req,res,next){
  db.open(function(err,db){
    if(!err){
      cs.info('connect db.')
      db.createCollection('users',{safe:true},function(err,collection){
        if(err){
          cs.error(err);
        } else {
          collection.find().toArray(function(err,docs){
            if(!err){
              var isRight = true;
              for(var i = 0;i<docs.length;i++){
                if(req.body.username.trim() === docs[i].username){
                  isRight = false;
                  break;
                }
              }
              if(isRight){
                res.json({state:true});
              } else {
                res.json({state:false});
              }
            }
          });
        }
      });
    }
  });
});

/* save sign in */
router.post("/signin",function(req,res,next){
  cs.info("title : "+req.body.title);
  cs.info("locatin : "+req.body.location);
  cs.info("content : "+req.body.content);

  db.open(function(err,db){
    if(!err){
      cs.info('connect db');
      db.createCollection('signin',{safe:true},function(err,collection){
        if(err){
          cs.error(err);
        } else {
          var signInDate = new Date();
          var year=signInDate.getFullYear();
          var month=signInDate.getMonth()+1;
          var day=signInDate.getDate();
          var showDate = month+"-"+day+"-"+year;
          collection.find().toArray(function(err,docs){
            if(!err){
              var signRight = true;
              for(var i=0;i<docs.length;i++){
                if(req.session.username === docs[i].username){
                  if(showDate === docs[i].showdate){
                    signRight = false;
                  }
                }
              }
              if(signRight){
                var tmp={username:req.session.username,showdate:showDate,gmtdate:signInDate,title:req.body.title,location:req.body.location,content:req.body.content};
                collection.insertOne(tmp,{safe:true},function(err,result){
                  if(!err){
                    res.json({state:true});
                  } else {
                    res.json({state:false});
                  }
                });
              }else{
                res.json({state:true});
              }
            } else {
              res.json({state:false});
            }
          });
        }
      });
    }
  });
});
/*check modal name*/
router.post("/checkModalName",function(req,res,next){
  cs.info("modal name : "+req.body.modalName);
  db.open(function(err,db){
    if(!err){
      cs.info("connect db");
      db.createCollection('modal',{safe:true},function(err,collection){
          if(err){
            cs.error(err);
            res.json({state:false});
          } else {
            collection.find({username:req.session.username,modalname:req.body.modalName}).toArray(function(err,docs){
              if(!err){
                  if(docs.length>0){
                      res.json({state:false});
                  } else {
                      res.json({state:true});
                  }
              } else {
                  res.json({state:false});
              }
            });
          }
      });
    } else {
        res.json({state:false});
    }
  });
});

/*add modal*/
router.post("/addModal",function(req,res,next){
   cs.info(req.body.saveData);
});
module.exports = router;
