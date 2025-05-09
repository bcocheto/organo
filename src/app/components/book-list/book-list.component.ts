import { Component, OnInit } from '@angular/core';
import { Book } from '../book/book';
import { books } from '../../../books-mock';
import { LiteraryGenreComponent } from '../literary-genre/literary-genre.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [LiteraryGenreComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent implements OnInit {
  genres: Book['genre'][] = [];
  genreBooks: Map<string, Book[]> = new Map();

  ngOnInit(): void {
    this.genreBooks = new Map();

    books.forEach((book) => {
      const genreId = book.genre.id;

      if (!this.genreBooks.has(genreId)) {
        this.genreBooks.set(genreId, []);
      }
      this.genreBooks.get(genreId)?.push(book);
    });

    this.genres = [
      {
        id: 'romance',
        value: 'Romance',
        books: this.genreBooks.get('romance') ?? [],
      },
      {
        id: 'misterio',
        value: 'Mistério',
        books: this.genreBooks.get('misterio') ?? [],
      },
      {
        id: 'fantasia',
        value: 'Fantasia',
        books: this.genreBooks.get('fantasia') ?? [],
      },
      {
        id: 'ficcao-cientifica',
        value: 'Ficção Científica',
        books: this.genreBooks.get('ficcao-cientifica') ?? [],
      },
      {
        id: 'tecnicos',
        value: 'Técnicos',
        books: this.genreBooks.get('tecnicos') ?? [],
      },
    ];
  }
}
