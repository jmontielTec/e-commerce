import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatBadge } from '@angular/material/badge';
import { RouterLink, RouterLinkActive } from '@angular/router';
// import { MatProgressBar } from "@angular/material/progress-bar";
// import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
 

@Component({
  selector: 'app-header',
  imports: [
    MatIcon,
    MatButton,
    MatBadge,
    RouterLink,
    RouterLinkActive
    // MatProgressBar,
    // MatMenuTrigger,
    // MatMenu,
    // MatMenuItem
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
