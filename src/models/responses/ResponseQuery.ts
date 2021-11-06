import ResponseData from "@/models/responses/ResponseData";

export default interface ResponseQuery<T> {
  data: ResponseData<T>;
  elapsedTime?: number;
  page?: number;
  pages?: number;
  size?: number;
  total?: number;
}