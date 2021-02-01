import React, { useEffect, useReducer, useState } from 'react';
import { LoadingBlock } from '../components/loading-block';
import { PostRepository } from '../repository/post-repository';
import StoreContext, { defaultPostStore, postReducer } from './posts';

/**
 * Load saved read posts
 */
async function loadReadPosts(): Promise<string[]> {
    const postRepository = new PostRepository();

    const readPosts = await postRepository.get('readPosts');

    if (!readPosts) return [];

    return JSON.parse(readPosts);
}

/**
 * Abstraction of StoreContext Provider
 */
export default function StoreProvider({ children }) {
    const [postStore, dispatcher] = useReducer(postReducer, defaultPostStore);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadReadPosts().then((readPosts) => {
            dispatcher({ type: 'SET_READ_POSTS', payload: readPosts });
            setLoading(false);
        });
    });

    if (loading) return <LoadingBlock />;

    return (
        <StoreContext.Provider value={{ store: postStore, dispatcher }}>
            {children}
        </StoreContext.Provider>
    );
}
