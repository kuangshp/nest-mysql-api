import { Module } from '@nestjs/common';
// import { MODULE_PATH } from '@nestjs/common/constants'
import { AccountController } from './account/controllers/account/account.controller';
import { AccountService } from './account/services/account/account.service';
import { RoleController } from './role/controllers/role/role.controller';
import { AccessController } from './access/controllers/access/access.controller';
import { AccessService } from './access/services/access/access.service';
import { RoleService } from './role/services/role/role.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from './account/entities/account.entity';
import { AccountLastLoginEntity } from './account/entities/account.last.login.entity';
import { LoginController } from './account/controllers/login/login.controller';
import { LoginService } from './account/services/login/login.service';
import { RoleEntity } from './role/entities/role.entity';
import { AccountRoleController } from './account/controllers/account-role/account-role.controller';
import { AccountRoleService } from './account/services/account-role/account-role.service';
import { AccountRoleEntity } from './account/entities/account.role.entity';
import { AccessEntity } from './access/entities/access.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AccountEntity,
      AccountLastLoginEntity,
      AccountRoleEntity,
      RoleEntity,
      AccessEntity,
    ])
  ],
  controllers: [
    AccountController, 
    RoleController, 
    AccessController, 
    LoginController, 
    AccountRoleController
  ],
  providers: [
    AccountService, 
    AccessService, 
    RoleService, 
    LoginService, 
    AccountRoleService
  ],
})
export class SystemModule {}
// 路由前缀 作用该模块下全部的控制器
// Reflect.defineMetadata(MODULE_PATH, 'admin', SystemModule);