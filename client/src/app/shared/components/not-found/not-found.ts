import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [
    MatIcon,
    MatButton,
    RouterLink
],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {

}
