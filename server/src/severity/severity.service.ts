import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SeverityServiceBase } from "./base/severity.service.base";

@Injectable()
export class SeverityService extends SeverityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
