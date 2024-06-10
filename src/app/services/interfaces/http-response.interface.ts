import { StatusResponse } from "../../shared/enums/status-response";

export interface ResponseService<T> {
  statusResponse: StatusResponse,
  data?: T;
  error?: any;
}
