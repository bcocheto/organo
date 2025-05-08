export interface Book {
  title: string;
  author: string;
  favorite: boolean;
  image: string;
  genre: {
    id: string;
    value: string;
    books: Book[];
  };
}
