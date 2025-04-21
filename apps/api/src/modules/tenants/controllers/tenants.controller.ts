import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { CreateTenantUseCase } from '@modules/application/create-tenant.usecase';
import { InviteUserUseCase } from '@modules/application/invite-user.usecase';
import { AssignRoleUseCase } from '@modules/application/assign-role.usecase';

@Controller('v1/tenants')
export class TenantsController {
  constructor(
    private readonly createTenant: CreateTenantUseCase,
    private readonly inviteUser: InviteUserUseCase,
    private readonly assignRole: AssignRoleUseCase,
  ) {}

  @Post()
  async create(@Body() dto: { name: string }) {
    return this.createTenant.execute(dto.name);
  }

  @Post(':id/users')
  async inviteUser(@Param('id') tenantId: string, @Body() dto: { email: string }) {
    return this.inviteUser.execute(tenantId, dto.email);
  }

  @Post(':id/assign-role')
  async assignRole(@Param('id') tenantId: string, @Body() dto: { userId: string; role: string }) {
    return this.assignRole.execute(tenantId, dto.userId, dto.role);
  }

  @Get(':id/roles')
  async getRoles(@Param('id') tenantId: string) {
    return ['admin', 'user', 'manager']; // mockado por agora
  }
}
