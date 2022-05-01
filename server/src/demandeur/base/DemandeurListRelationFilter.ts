/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DemandeurWhereInput } from "./DemandeurWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DemandeurListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DemandeurWhereInput,
  })
  @ValidateNested()
  @Type(() => DemandeurWhereInput)
  @IsOptional()
  @Field(() => DemandeurWhereInput, {
    nullable: true,
  })
  every?: DemandeurWhereInput;

  @ApiProperty({
    required: false,
    type: () => DemandeurWhereInput,
  })
  @ValidateNested()
  @Type(() => DemandeurWhereInput)
  @IsOptional()
  @Field(() => DemandeurWhereInput, {
    nullable: true,
  })
  some?: DemandeurWhereInput;

  @ApiProperty({
    required: false,
    type: () => DemandeurWhereInput,
  })
  @ValidateNested()
  @Type(() => DemandeurWhereInput)
  @IsOptional()
  @Field(() => DemandeurWhereInput, {
    nullable: true,
  })
  none?: DemandeurWhereInput;
}
export { DemandeurListRelationFilter };
