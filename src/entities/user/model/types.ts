export interface User {
  name: string;
  email: string;
  slug: string;
  description?: string;
  image?: ImageType;
  cover?: ImageType;
}

export type ImageType = {
  id: string;
  url: string;
  width: string;
  height: string;
};
