import { IResponse } from '@/src/types';
import { IUser } from '@/src/types/user';

const UserController = {
  getUserInfo: (): Promise<IResponse<IUser>> => {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            ret: 0,
            msg: 'success',
            data: {
              name: '张三',
              age: 12,
            },
          }),
        1000
      )
    );
  },
  getUser: (): Promise<IResponse<IUser>> => {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            ret: 0,
            msg: 'success',
            data: {
              name: '李四',
              age: 12,
            },
          }),
        1000
      )
    );
  },
};

module.exports = UserController;
