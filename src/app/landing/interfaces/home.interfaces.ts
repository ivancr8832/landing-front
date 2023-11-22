export interface CardHomeServices {
  title: string;
  subtitle: string;
  icon: string;
  isOpenModal?: boolean;
  putAddressField?: boolean;
}

export interface ImageCarousel {
  title: string;
  subtitle: string;
  imageUrl: string;
  isActive: boolean;
}

export interface Video {
  id: number;
  urlVideo: string;
}
