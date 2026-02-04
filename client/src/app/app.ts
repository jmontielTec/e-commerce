import { Component, inject, OnInit, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
import { HttpClient } from '@angular/common/http';
import { Pagination } from './shared/models/pagination';
import { Product } from './shared/models/product';

@Component({
  selector: 'app-root',
  imports: [Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  baseUrl= 'https://localhost:5001/api/';
  private readonly http = inject(HttpClient);
  protected readonly title = signal('client');

  products: Product[] = [];


  ngOnInit(): void {
    this.http.get<Pagination<Product>>(`${this.baseUrl}products`).subscribe({
      next: response => this.products = response.data,
      error: error => console.error(error),
      complete: () => console.log('completed')
    })
  }
}
