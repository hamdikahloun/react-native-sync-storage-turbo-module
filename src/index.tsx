const SyncStorage = require('./NativeSyncStorage').default;

export const getItem = (key: string): string => {
  return SyncStorage.getItem(key);
};

export const setItem = (key: string, value: string) => {
  return SyncStorage.setItem(key, value);
};

export const removeItem = (key: string) => {
  return SyncStorage.removeItem(key);
};

export const clear = () => {
  return SyncStorage.clear();
};

export const getAllKeys = (): string[] => {
  return SyncStorage.getAllKeys();
};
