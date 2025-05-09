import { Component, input } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { books } from '../../../books-mock';
import { Book } from '../book/book';

@Component({
  selector: 'app-literary-genre',
  standalone: true,
  imports: [BookComponent],
  templateUrl: './literary-genre.component.html',
  styleUrl: './literary-genre.component.css',
})
export class LiteraryGenreComponent {
  genre = input.required<Book['genre']>();
}
