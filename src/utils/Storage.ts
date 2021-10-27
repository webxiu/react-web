const primaryKey = '__KEY__';
type Obj = {
  // tslint:disable-next-line: no-any
  [x: string]: any;
};
// tslint:disable-next-line: no-any
// type VaildValue = string | number | Obj | string[] | number[] | boolean | null;
type VaildValue = any;
interface MStorage {
  /**
   * 获取本地存储值
   * @param key {string} 本地存储key值
   * @returns 本地存储的value值
   */
  getItem: (key: string) => VaildValue;
  /**
   * 设置本地存储
   * @param key {string} 本地存储key值
   * @param value 要存储的值，支持string 、number 、json对象、数组、boolean、null
   */
  setItem: (key: string, value: VaildValue) => void;
  /**
   * 删除本地存储
   * @param key {string} 本地存储key值
   */
  removeItem: (key: string) => void;
  /**
   * 清除所有键值
   */
  clear: () => void;
  [name: string]: VaildValue;
}

type ProxyType<T> = { [P in keyof T]: T[P] };

/** 本地存储 */
function getStorage(storage: Storage): ProxyType<MStorage> {
  return new Proxy(
    {
      getItem(key: string) {
        const value = storage.getItem(key) as string;
        try {
          const json = JSON.parse(value);
          if (Object.prototype.hasOwnProperty.call(json, primaryKey)) {
            return json[primaryKey];
          }
          // if (json.hasOwnProperty(primaryKey)) {
          //     return json[primaryKey];
          // }
          return json;
        } catch (e) {
          return value;
        }
      },
      // tslint:disable-next-line: no-any
      setItem(key: string, value: VaildValue): void {
        if (typeof value === 'string') {
          storage.setItem(key, value);
        } else {
          try {
            const jsonStr = JSON.stringify({
              [primaryKey]: value
            });
            storage.setItem(key, jsonStr);
          } catch (e) {
            throw new Error('setItem 不支持此类型的值');
          }
        }
      },
      removeItem(key: string): void {
        storage.removeItem(key);
      },
      clear() {
        storage.clear();
      }
    },
    {
      get(target: MStorage, key: string) {
        return target[key] ? target[key] : target.getItem(key);
      },
      set(target: MStorage, key: string, value: VaildValue): boolean {
        target.setItem(key, value);
        return true;
      }
    }
  );
}

export const session = getStorage(sessionStorage);
export const storage = getStorage(localStorage);
