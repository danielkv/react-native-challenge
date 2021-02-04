import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * AsyncStorage repository
 * It could be replaced by remote database or server API
 */
export class PostRepository {
    private prefix: string = '@challenge';

    private getKey(key: string): string {
        return `${this.prefix}${key}`;
    }

    save(key: string, value: string): Promise<void> {
        return AsyncStorage.setItem(this.getKey(key), value);
    }

    get(key: string): Promise<string> {
        return AsyncStorage.getItem(this.getKey(key));
    }
}
