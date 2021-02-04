import { Dispatch } from 'react';

export type CustomReducerAction<A = any> = {
    type: string;
    payload: A;
};

export interface IDispatcher<A = any> {
    [key: string]: (state: A, payload: any) => A;
}

export type CustomContext<A = any, B = any> = {
    store: A;
    dispatcher: Dispatch<B>;
};

export type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
        ? {
              type: Key;
          }
        : {
              type: Key;
              payload: M[Key];
          };
};
