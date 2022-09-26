// Source: https://github.com/joe-bell/plaiceholder/blob/main/packages/plaiceholder/src/blurhash.ts#L8
export type IGetBlurhashReturn = {
  hash: string;
} & Record<"width" | "height", number>;

// Source: https://github.com/joe-bell/plaiceholder/blob/main/packages/plaiceholder/src/get-image.ts#L62
export type ILoadImageReturn = {
  src: string;
  height: number;
  width: number;
  type?: string;
  objectPosition?: string;
};
