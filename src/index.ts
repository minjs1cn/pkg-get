import fs from 'fs';
import path from 'path';

interface IPkg {
  name: string;
  [string: string]: any;
}

export function pkg(root = process.cwd()): IPkg {
  const pkgPath = path.join(root, 'package.json');
  return JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
}

export function get<T>(key: string): T {
  const pkgJson = pkg();
  return pkgJson[key];
}

// eslint-disable-next-line complexity
export function getName(name?: string) {
  const n = name || get<string>('name') || 'un-known';
  return n.replace(/^@.*\//, '').replace(/(-[a-z])/gi, m => m[1].toUpperCase());
}

export default {
  name: getName,
};
