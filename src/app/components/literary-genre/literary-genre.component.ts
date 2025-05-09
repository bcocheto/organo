import { Component, input } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { Book } from '../book/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-literary-genre',
  standalone: true,
  imports: [BookComponent, CommonModule],
  templateUrl: './literary-genre.component.html',
  styleUrl: './literary-genre.component.css',
})
export class LiteraryGenreComponent {
  genre = input.required<Book['genre']>();
}
