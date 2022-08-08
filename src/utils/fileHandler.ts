import { readdirSync, statSync } from 'fs';
import { join } from 'path';

export const isFile = (path: string): boolean => statSync(path).isFile();

export const isDir = (path: string): boolean => statSync(path).isDirectory();

export const walkDir = async (path: string, handler: (path: string) => void) => {
  readdirSync(path).forEach(fileName => {
    const fullPath = join(path, fileName);
    isDir(fullPath) ? walkDir(fullPath, handler) : handler(fullPath);
  });
};
