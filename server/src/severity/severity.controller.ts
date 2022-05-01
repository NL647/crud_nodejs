import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SeverityService } from "./severity.service";
import { SeverityControllerBase } from "./base/severity.controller.base";

@swagger.ApiTags("severities")
@common.Controller("severities")
export class SeverityController extends SeverityControllerBase {
  constructor(
    protected readonly service: SeverityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
