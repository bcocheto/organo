import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from './book';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent {
  book = input.required<Book>();

  toggleFavorite() {
    this.book().favorite = !this.book().favorite;
  }
}
