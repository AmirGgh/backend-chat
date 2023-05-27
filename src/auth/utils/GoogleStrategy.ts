import { Injectable, Inject } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from 'passport-google-oauth20'
import { AuthService } from "../auth.service";
require('dotenv').config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: AuthService,
    ) {
        super({
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: process.env.CALLBACK_URL,
            scope: ['profile', 'email'],
        });
    }
    async validate(accessToken: string, refreshtoken: string, profile: Profile) {
        console.log(accessToken)
        console.log(refreshtoken)
        console.log(profile)
        const user = await this.authService.validateUser({ email: profile.emails[0].value, displayName: profile.displayName })
        console.log('validate')
        console.log(user)
        return user || null
    }
}