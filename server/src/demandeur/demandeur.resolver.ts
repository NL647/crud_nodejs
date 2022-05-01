import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DemandeurResolverBase } from "./base/demandeur.resolver.base";
import { Demandeur } from "./base/Demandeur";
import { DemandeurService } from "./demandeur.service";

@graphql.Resolver(() => Demandeur)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DemandeurResolver extends DemandeurResolverBase {
  constructor(
    protected readonly service: DemandeurService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
