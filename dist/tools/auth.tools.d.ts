export declare function hashPassword(password: string): Promise<string>;
export declare function comparePass(password: string, hashPassword: string): Promise<boolean>;
