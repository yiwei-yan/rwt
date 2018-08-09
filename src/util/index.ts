export module Utils {
  //首字母小写
  interface ReplaceFirst {
    FirstToLowerCase(str: string): string;
  }
  export class FirstStr implements ReplaceFirst {
    FirstToLowerCase(str: string) {
      return str.substring(0, 1).toLowerCase() + str.substring(1);
    }
  }
}