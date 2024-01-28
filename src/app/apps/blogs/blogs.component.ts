import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html'
})
export class BlogsComponent {

  id: any;
  blogDetail = {
    id: 1,
    image: 'assets/images/blog/101.jpg',
    heading:
      'Magna nostrud incididunt cupidatat cillum incididunt et nisi in ut minim reprehenderit.',
    subHeading: 'Labore irure irure laborum quis tempor aliqua. Dude',
    blogAuthor: 'Selamawit W',
    blogDate: 'Feb 19, 2020',
    blogDetail:
      'Est ipsum sint officia quis nulla nisi cupidatat aliquip nisi laboris eiusmod eiusmod aliquip do. Commodo elit excepteur occaecat irure Lorem sit nulla nulla sint duis incididunt. Nostrud ut do mollit et amet velit aute excepteur et culpa culpa velit. Cillum veniam officia anim cupidatat.',
  };


}
