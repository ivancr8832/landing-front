export interface BlogsInformation {
  page: number;
  totalRecords: number;
  totalPage: number;
  blogs: CardBlog[]
}

export interface CardBlog {
  id: number;
  day: number;
  month: number;
  imageUrl1: string;
  altImage: string;
  title: string;
  description: string;
}

export interface Categories {
  id: number;
  ariaExpanded: boolean;
  name: string;
  years: number[]
}

export interface BlogById {
  id: number;
  title: number;
  content: string;
  imageUrl2: string;
}
