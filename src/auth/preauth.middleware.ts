import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as firebase from 'firebase-admin';
import * as serviceAccount from './firebaseServiceAccount.json';

const firebase_params = {
    type: serviceAccount.type,
    projectId: serviceAccount.project_id,
    privateKeyId: serviceAccount.private_key_id,
    privateKey: serviceAccount.private_key,
    clientEmail: serviceAccount.client_email,
    clientId: serviceAccount.client_id,
    authUri: serviceAccount.auth_uri,
    tokenUri: serviceAccount.token_uri,
    authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
    clientC509CertUrl: serviceAccount.client_x509_cert_url
}

@Injectable()
export class PreauthMiddleware implements NestMiddleware {

    private defaultApp: any;
    private unauthorizedException = { statusCode: HttpStatus.UNAUTHORIZED, message: 'Acceso no autorizado' };
    private forbiddenException = { statusCode: HttpStatus.FORBIDDEN, message: 'Acceso denegado' };

    constructor() {
        this.defaultApp = firebase.initializeApp({
            credential: firebase.credential.cert(firebase_params),
            databaseURL: "https://plataformaserlog.firebaseio.com"
        });
    }

    use(req: Request, res: Response, next: any) {
        const token = req.headers.authorization;
        if (!!token) {
            this.defaultApp.auth().verifyIdToken(token.replace('Bearer ', ''))
                .then(decodedToken => {
                    const user = {
                        uid: decodedToken.uid,
                        email: decodedToken.email
                    }
                    req['currentUser'] = user;
                    next();
                }).catch(() => {
                    res.status(HttpStatus.UNAUTHORIZED).json(this.unauthorizedException);
                });
        } else {
            res.status(HttpStatus.UNAUTHORIZED).json(this.unauthorizedException);
        }
    }
}