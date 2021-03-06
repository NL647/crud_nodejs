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
import { IsString, IsOptional, IsDate, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumTaskStatus } from "./EnumTaskStatus";
import { EnumTaskSeverity } from "./EnumTaskSeverity";
@InputType()
class TaskCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  comment?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  contentTask!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  demandeur!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  dueDate!: Date;

  @ApiProperty({
    required: true,
    enum: EnumTaskStatus,
  })
  @IsEnum(EnumTaskStatus)
  @Field(() => EnumTaskStatus)
  Status!: "EnCours" | "Done" | "Pending" | "WaitngInfo";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;

  @ApiProperty({
    required: true,
    enum: EnumTaskSeverity,
  })
  @IsEnum(EnumTaskSeverity)
  @Field(() => EnumTaskSeverity)
  severity!: "Urgent" | "MediumSerity" | "NotUrgent";
}
export { TaskCreateInput };
