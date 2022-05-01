import { Module } from "@nestjs/common";
import { SeverityModuleBase } from "./base/severity.module.base";
import { SeverityService } from "./severity.service";
import { SeverityController } from "./severity.controller";
import { SeverityResolver } from "./severity.resolver";

@Module({
  imports: [SeverityModuleBase],
  controllers: [SeverityController],
  providers: [SeverityService, SeverityResolver],
  exports: [SeverityService],
})
export class SeverityModule {}
