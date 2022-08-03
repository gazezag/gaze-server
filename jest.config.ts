import type { InitialOptionsTsJest } from 'ts-jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const config: InitialOptionsTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node'
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths)
};

export default config;
