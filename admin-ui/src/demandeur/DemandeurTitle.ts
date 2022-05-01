import { Demandeur as TDemandeur } from "../api/demandeur/Demandeur";

export const DEMANDEUR_TITLE_FIELD = "id";

export const DemandeurTitle = (record: TDemandeur): string => {
  return record.id || record.id;
};
