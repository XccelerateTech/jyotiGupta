
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as jwt from 'jwt-simple';
import axios from 'axios';
import authClass from './auth';
import config from './config';
import groups from './groups';
import users from './users';
import * as cors from 'cors';

const app = express();
const auth = authClass();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(auth.initialize());
app.use(cors());

app.get('/api/groups',auth.authenticate(),(req,res)=>{
    res.json(groups);
});

app.get('/api/users',auth.authenticate(),(req,res)=>{
    console.log(req.user);
    res.json(users);
});

app.post("/api/signup", function(req, res) {  
    // if (!req.body.email || !req.body.password || !req.body.name) {
    //     res.sendStatus(401);
    // }

    var name:string = req.body.name;
    var email:string = req.body.email;
    var password:string = req.body.password;

    // insert new user to users
    let user = { id:users.length,
        name, email, password
    }

    users.push(user);
    var payload = {
        id: user.id,
        username: user.name
    };
    var token = jwt.encode(payload, config.jwtSecret);
    res.json({
        token: token
    });
    console.log('signup' + token)

});

app.post("/api/login", function(req, res) {
    console.log(req.body)
    console.log('logging in')
    // if (!req.body.email || !req.body.password) {
    //     res.sendStatus(401);
    // }
    var email = req.body.username;
    var password = req.body.password;
    var user = users.find((u)=> {
        console.log('looking')
        console.log('email' + email)
        console.log('password' + password)
        return u.email === email && u.password === password;
    });
    if (!user) {
        console.log('failure')
        return res.sendStatus(401);
    }

    var payload = {
        id: user.id,
        username: user.name
    };
    var token = jwt.encode(payload, config.jwtSecret);
    res.json({
        token: token
    });
    console.log('login: ' + token)
    
});

app.post("/api/login/facebook", function(req, res) {  
    if (req.body.access_token) {
        var accessToken = req.body.access_token;
        
        axios.get(`https://graph.facebook.com/me?access_token=${accessToken}`)
        .then((response)=>{
            if(!response.data.error){
                // var payload = {
                //     id: accessToken
                // };

                const user = {
                    id: users.length,
                    fbtoken: accessToken,
                    name: response.data.name, //"Facebook User",
                    email: "placeholder@gmail.com", // response.data.email
                    password: "placeholder"
                }
                users.push(user)

                const payload = {
                    id: user.id
                };

                const token = jwt.encode(payload, config.jwtSecret);
                res.json({
                    token: token
                });
            }else{
                res.sendStatus(401);
            }
        }).catch((err)=>{
            console.log(err);
            res.sendStatus(401);
        });
    } else {
        res.sendStatus(401);
    }
});

app.listen(8080,()=>{
    console.log('listening on port 8080')
});

