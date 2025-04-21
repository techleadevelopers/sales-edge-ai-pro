// apps/api/src/common/guards/AuthGuard.ts
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    // TODO: coloque aqui sua lógica real de validação (JWT, sessão, etc)
    const req = context.switchToHttp().getRequest();
    // por enquanto, só liberamos todo mundo
    return !!req.headers['authorization'];
  }
}
