import { CanActivate, ExecutionContext, Injectable, SetMetadata} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";
import { Role } from "src/libs/enum";

export const ROLES_KEY = 'roles';

@Injectable()
export class RolesAuthGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    public canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const roles: string[] =this.reflector.get<string[]>(ROLES_KEY, context.getHandler());
        if (!roles) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const user = request.user;
        const hasRole = ()=> roles.some((role: Role) => user.role === role);

        return user && hasRole();
    }
    
}

export const CanAccessRoles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);


export class JwtAuthGuard extends AuthGuard('jwt') {}