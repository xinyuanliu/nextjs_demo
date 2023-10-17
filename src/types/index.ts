export interface IResponseBase {
  ret: number;
  msg: string;
}

export interface IResponse<T> extends IResponseBase {
  data: T;
}
