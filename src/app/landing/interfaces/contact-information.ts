import { TYPE_CONTACT } from "src/app/shared/enums/common";

export interface ContactInformation {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  dateVisit?: string;
  address?: string;
  hour?: string;
  subject?: string;
  message?: string;
  typeContact: TYPE_CONTACT;
}
