import { SeverityWhereInput } from "./SeverityWhereInput";
import { SeverityOrderByInput } from "./SeverityOrderByInput";

export type SeverityFindManyArgs = {
  where?: SeverityWhereInput;
  orderBy?: Array<SeverityOrderByInput>;
  skip?: number;
  take?: number;
};
