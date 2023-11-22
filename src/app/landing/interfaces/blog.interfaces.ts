export interface CardBlog {
  day: number;
  month: string;
  imageUrl: string;
  altImage: string;
  title: string;
  subtitle: string;
}

export interface Categories {
  id: number;
  ariaExpanded: boolean;
  name: string;
  years: Years[]
}

interface Years {
  id: number;
  year: number;
}
