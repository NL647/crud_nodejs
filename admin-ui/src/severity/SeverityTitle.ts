import { Severity as TSeverity } from "../api/severity/Severity";

export const SEVERITY_TITLE_FIELD = "id";

export const SeverityTitle = (record: TSeverity): string => {
  return record.id || record.id;
};
