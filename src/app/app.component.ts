import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showDropdown = false;
  title = 'Portfolio';
  imagePath='../assets/images/innerpage/prof-pic.png';
  isDropdownOpen = true;

  constructor(private router: Router) {}

  goto(sectionId: string) {

    const navigationExtras: NavigationExtras = {
      fragment: sectionId
    };
    this.router.navigate([], navigationExtras);

    this.isDropdownOpen = false;
    setTimeout(() => this.isDropdownOpen = true, 1000)
  }

}
