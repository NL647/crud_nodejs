/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Demandeur } from "@prisma/client";

export class DemandeurServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.DemandeurFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DemandeurFindManyArgs>
  ): Promise<number> {
    return this.prisma.demandeur.count(args);
  }

  async findMany<T extends Prisma.DemandeurFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DemandeurFindManyArgs>
  ): Promise<Demandeur[]> {
    return this.prisma.demandeur.findMany(args);
  }
  async findOne<T extends Prisma.DemandeurFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DemandeurFindUniqueArgs>
  ): Promise<Demandeur | null> {
    return this.prisma.demandeur.findUnique(args);
  }
  async create<T extends Prisma.DemandeurCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DemandeurCreateArgs>
  ): Promise<Demandeur> {
    return this.prisma.demandeur.create<T>(args);
  }
  async update<T extends Prisma.DemandeurUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DemandeurUpdateArgs>
  ): Promise<Demandeur> {
    return this.prisma.demandeur.update<T>(args);
  }
  async delete<T extends Prisma.DemandeurDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DemandeurDeleteArgs>
  ): Promise<Demandeur> {
    return this.prisma.demandeur.delete(args);
  }
}
