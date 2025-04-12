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

export type EditUserValues = {
  name: string;
  email: string;
  slug: string;
  description: string;
  imageId: string;
  coverId?: string | null;
};
