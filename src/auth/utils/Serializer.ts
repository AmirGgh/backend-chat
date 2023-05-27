import { PassportSerializer } from "@nestjs/passport"
import { Inject, Injectable } from "@nestjs/common"
import { User } from "src/user/user.schema";
import { AuthService } from "../auth.service";

@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: AuthService,
    ) {
        super();
    }
    serializeUser(user: User, done: Function) {
        console.log('serialize user')
        done(null, user)
    }
    async deserializeUser(payload: any, done: Function) {
        const user = await this.authService.findUser(payload.id)
        console.log('deserialize user')
        console.log(user)
        return user ? done(null, user) : done(null, null);
    }
}