import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SeverityResolverBase } from "./base/severity.resolver.base";
import { Severity } from "./base/Severity";
import { SeverityService } from "./severity.service";

@graphql.Resolver(() => Severity)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SeverityResolver extends SeverityResolverBase {
  constructor(
    protected readonly service: SeverityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
