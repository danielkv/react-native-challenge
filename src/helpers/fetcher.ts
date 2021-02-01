import axios from 'axios';

interface ObjectLike {
    [key: string]: any;
}

export const urlBase = 'https://blog.cheesecakelabs.com/'; // challenge

/**
 * All external requests should pass through this function
 */
export async function fetcher(url: string, params?: ObjectLike) {
    try {
        const response = await axios.get(`${urlBase}${url}`, { params });
        return response.data;
    } catch (err) {
        throw new Error('An error occurred while fetching the data.');
    }
}
