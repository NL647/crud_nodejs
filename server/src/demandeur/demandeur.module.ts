import { Module } from "@nestjs/common";
import { DemandeurModuleBase } from "./base/demandeur.module.base";
import { DemandeurService } from "./demandeur.service";
import { DemandeurController } from "./demandeur.controller";
import { DemandeurResolver } from "./demandeur.resolver";

@Module({
  imports: [DemandeurModuleBase],
  controllers: [DemandeurController],
  providers: [DemandeurService, DemandeurResolver],
  exports: [DemandeurService],
})
export class DemandeurModule {}
