import { DemandeurWhereInput } from "./DemandeurWhereInput";
import { DemandeurOrderByInput } from "./DemandeurOrderByInput";

export type DemandeurFindManyArgs = {
  where?: DemandeurWhereInput;
  orderBy?: Array<DemandeurOrderByInput>;
  skip?: number;
  take?: number;
};
