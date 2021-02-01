import { createContext, Reducer } from 'react';
import { ActionMap, IDispatcher, CustomContext } from './reducer.types';

type PostsStoreType = {
    readPosts: string[];
};

export const defaultPostStore: PostsStoreType = {
    readPosts: [],
};

type PostPayload = {
    MARK_AS_READ: string;
};
type PostActions = ActionMap<PostPayload>[keyof PostPayload];

const postsFn: IDispatcher<PostsStoreType> = {
    MARK_AS_READ(state, postID: string) {
        return {
            ...state,
            readPosts: [...state.readPosts, postID],
        };
    },
};

export const postReducer: Reducer<PostsStoreType, PostActions> = (state, action) => {
    const dispatcher = postsFn[action.type];

    if (!dispatcher) throw new Error('Dispatcher function not found');

    return dispatcher(state, action.payload);
};

export default createContext<CustomContext<PostsStoreType, PostActions>>({
    store: defaultPostStore,
    dispatcher: () => {},
});
