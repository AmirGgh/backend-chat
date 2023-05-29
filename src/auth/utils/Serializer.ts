import { PassportSerializer } from "@nestjs/passport"
import { Inject, Injectable } from "@nestjs/common"
import { User } from "src/user/user.schema";
import { AuthService } from "../auth.service";
import { UserDetails } from "src/utills/types";

@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: AuthService,
    ) {
        super();
    }
    serializeUser(user: UserDetails, done: Function) {
        console.log(user)
        console.log('serialize user')
        console.log(user)
        done(null, user)
    }
    async deserializeUser(payload: any, done: Function) {
        const user = await this.authService.findUser(payload.id)
        console.log('deserialize user')
        console.log(user)
        return user ? done(null, user) : done(null, null);
    }
}