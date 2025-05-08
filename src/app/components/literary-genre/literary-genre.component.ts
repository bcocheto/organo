import { Component } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { books } from '../../../books-mock';

@Component({
  selector: 'app-literary-genre',
  imports: [BookComponent],
  templateUrl: './literary-genre.component.html',
  styleUrl: './literary-genre.component.css',
})
export class LiteraryGenreComponent {
  book = books[0];
}
