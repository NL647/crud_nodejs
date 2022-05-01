import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DemandeurService } from "./demandeur.service";
import { DemandeurControllerBase } from "./base/demandeur.controller.base";

@swagger.ApiTags("demandeurs")
@common.Controller("demandeurs")
export class DemandeurController extends DemandeurControllerBase {
  constructor(
    protected readonly service: DemandeurService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
