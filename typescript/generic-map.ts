
class MyMap<T> {
  private data: {
    [key: string]: T
  } = {};

  set(key: string, value: T): void {
    this.data[key] = value;
  }

  get(key: string): T {
    return this.data[key];
  }

  has(key: string): boolean {
    return key in this.data;
  }

  entities(): Array<T> {
    const items: T[] = [];
    for (let key in this.data) {
      items.push(this.data[key]);
    }
    return items;
  }
}