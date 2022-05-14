import { describe, it, expect } from 'vitest';
import pkg from '.';


describe('pkg-get', () => {
  it('a-b should be aB', () => {
    const name = pkg.name('a-b');
    expect(name).toBe('aB');
  });

  it('a-b-c should be aBC', () => {
    const name = pkg.name('a-b-c');
    expect(name).toBe('aBC');
  });

  it('a-biz-ccc should be aBizCcc', () => {
    const name = pkg.name('a-biz-ccc');
    expect(name).toBe('aBizCcc');
  });

  it('@lc/a-biz-ccc should be aBizCcc', () => {
    const name = pkg.name('@lc/a-biz-ccc');
    expect(name).toBe('aBizCcc');
  });

  it('@lc1024/a-biz-ccc should be aBizCcc', () => {
    const name = pkg.name('@lc1024/a-biz-ccc');
    expect(name).toBe('aBizCcc');
  });

  it('@lc-1024/a-biz-ccc should be aBizCcc', () => {
    const name = pkg.name('@lc-1024/a-biz-ccc');
    expect(name).toBe('aBizCcc');
  });
});
