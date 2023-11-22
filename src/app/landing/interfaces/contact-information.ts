export interface ContactInformation {
  name: string;
  lastName: string;
  email: string;
  cellphone: string;
  dateSchedule?: string;
  address?: string;
  hourSchedule?: string;
}

export interface Message extends ContactInformation {
  subject: string;
  comment: string;
}
