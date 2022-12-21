const SyncStorage = require('./NativeSyncStorage').default;

export function multiply(a: number, b: number): number {
  return SyncStorage.multiply(a, b);
}
