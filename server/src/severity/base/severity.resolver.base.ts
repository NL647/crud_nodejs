/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DeleteSeverityArgs } from "./DeleteSeverityArgs";
import { SeverityFindManyArgs } from "./SeverityFindManyArgs";
import { SeverityFindUniqueArgs } from "./SeverityFindUniqueArgs";
import { Severity } from "./Severity";
import { SeverityService } from "../severity.service";

@graphql.Resolver(() => Severity)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SeverityResolverBase {
  constructor(
    protected readonly service: SeverityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Severity",
    action: "read",
    possession: "any",
  })
  async _severitiesMeta(
    @graphql.Args() args: SeverityFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Severity])
  @nestAccessControl.UseRoles({
    resource: "Severity",
    action: "read",
    possession: "any",
  })
  async severities(
    @graphql.Args() args: SeverityFindManyArgs
  ): Promise<Severity[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Severity, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Severity",
    action: "read",
    possession: "own",
  })
  async severity(
    @graphql.Args() args: SeverityFindUniqueArgs
  ): Promise<Severity | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Severity)
  @nestAccessControl.UseRoles({
    resource: "Severity",
    action: "delete",
    possession: "any",
  })
  async deleteSeverity(
    @graphql.Args() args: DeleteSeverityArgs
  ): Promise<Severity | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
