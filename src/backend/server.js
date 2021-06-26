const express = require('express');
const request = require('request');
const cors = require('cors');
const querystring = require('query-string');
const app = express();
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const client_id = 'b9d04c284f1b46b3ad4ddb15f0fe3766';
const client_secret = '9eb03bf17f5c4c9ca52b7da46463bacf';
const redirect_uri = 'http://localhost:3000/callback/';
const server_address = 'http://localhost:8080/login/';


app.get('/callback' , function (req, res) {

    const code = req.query.code || null;
    const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
            code: code,
            redirect_uri: redirect_uri,
            grant_type: 'authorization_code'
        },
        headers: {
            'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
        },
        json: true
    };

    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            const access_token = body.access_token;
            const refresh_token = body.refresh_token;

            res.redirect(server_address + '?' +
                querystring.stringify({
                    access_token: access_token,
                    refresh_token: refresh_token
                }));
            console.log(access_token);
            console.log(refresh_token);
        } else {
            res.redirect(server_address + '?' +
                querystring.stringify({
                    error: 'invalid_token'
                }));
            console.log('error = ' + error)
        }
    })
});

app.listen(3000);
