export class StringUtils {

    public static isEmpty(str: string): boolean {
        return !str || str === '';
    }

    public static isString(item: string): boolean {
        return typeof item === 'string';
    }

}
