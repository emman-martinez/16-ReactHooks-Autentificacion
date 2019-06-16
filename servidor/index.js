import express from 'express';
import jwt from 'express-jwt';
import cors from 'cors';
import jwks from 'jwks-rsa';
import jwtAuthz from 'express-jwt-authz';
import bodyParser from 'body-parser';

// Crear el Servidor
const app = express();

// Configurar el servidor para json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev--c10g4wo.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://productos',
    issuer: 'https://dev--c10g4wo.auth0.com/',
    algorithms: ['RS256']
});

app.get('/productos', (req, res) => {
    console.log(req);
});

app.listen(5000, () => {
    console.log('Servidor Funcionando...');
})