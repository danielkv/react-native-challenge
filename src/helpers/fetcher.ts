import axios from 'axios';

interface ObjectLike {
    [key: string]: any;
}

export const urlBase = 'https://blog.cheesecakelabs.com/'; // challenge

/**
 * All requests should pass through this function
 */
export async function fetcher(url: string, params?: ObjectLike) {
    const response = await axios.get(`${urlBase}${url}`, { params });

    return response.data;
}
