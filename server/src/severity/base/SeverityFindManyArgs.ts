/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SeverityWhereInput } from "./SeverityWhereInput";
import { Type } from "class-transformer";
import { SeverityOrderByInput } from "./SeverityOrderByInput";

@ArgsType()
class SeverityFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SeverityWhereInput,
  })
  @Field(() => SeverityWhereInput, { nullable: true })
  @Type(() => SeverityWhereInput)
  where?: SeverityWhereInput;

  @ApiProperty({
    required: false,
    type: [SeverityOrderByInput],
  })
  @Field(() => [SeverityOrderByInput], { nullable: true })
  @Type(() => SeverityOrderByInput)
  orderBy?: Array<SeverityOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SeverityFindManyArgs };
