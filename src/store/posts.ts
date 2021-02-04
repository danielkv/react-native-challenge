import { createContext, Reducer } from 'react';
import { PostRepository } from '../repository/post-repository';
import { ActionMap, IDispatcher, CustomContext } from './reducer.types';

export type PostsStoreType = {
    readPosts: string[];
};

export const defaultPostStore: PostsStoreType = {
    readPosts: [],
};

type PostPayload = {
    MARK_AS_READ: string;
    SET_READ_POSTS: string[];
};
type PostActions = ActionMap<PostPayload>[keyof PostPayload];

const postsFn: IDispatcher<PostsStoreType> = {
    MARK_AS_READ(state, postID: string) {
        const newReadPosts = [...state.readPosts, postID];

        const postRepository = new PostRepository();
        postRepository.save('readPosts', JSON.stringify(newReadPosts));

        return {
            ...state,
            readPosts: newReadPosts,
        };
    },
    SET_READ_POSTS(state, data: string[]) {
        return {
            ...state,
            readPosts: data,
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
