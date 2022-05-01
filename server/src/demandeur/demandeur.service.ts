import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DemandeurServiceBase } from "./base/demandeur.service.base";

@Injectable()
export class DemandeurService extends DemandeurServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
