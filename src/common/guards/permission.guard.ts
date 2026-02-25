import {
    CanActivate,
    ExecutionContext,
    Injectable,
    BadRequestException,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from '../../modules/master/user/user.service.js';

@Injectable()
export class PermissionGuard implements CanActivate {
    constructor(private readonly userService: UserService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest<Request>();
        const menu = request.url?.split('/')[1] ?? '';
        let action = request.url?.split('/')[2] ?? '';

        if (action === 'list')
            action = 'access';
        else if (action === 'detail')
            action = 'view';

        const user = request['user'];
        if (!user) {
            throw new BadRequestException('User not found');
        }

        if (!user.role) {
            throw new BadRequestException('Role not found');
        }

        const permission = this.userService.getRolePermissions(menu, user.role, action);
        if (!permission) {
            throw new BadRequestException('Permission denied');
        }

        return true;
    }
}
