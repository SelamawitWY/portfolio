import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html'
})
export class BlogsComponent {

  id: any;
  blogDetails = [
    {
      id: 1,
      image: 'assets/images/innerpage/design.png',
      heading: 'Hosting a Static Website (Angular App) on AWS with Route 53, S3, and AWS Certificate Manager',
      blogAuthor: 'Selamawit W',
      blogDate: 'Jan 28, 2024',
      blogDetail: `
      This blog post provides an overview of hosting a static website on AWS using Route 53, S3,
      and AWS Certificate Manager, and discusses the benefits of using Amazon CloudFront as a
      content delivery network. It covers essential steps for setting up DNS management, hosting
      static content on S3, configuring HTTPS encryption, and compares hosting with and without CloudFront.
      Whether you're a beginner looking to host your first static website or a seasoned developer exploring
      AWS's hosting capabilities, this guide serves as a comprehensive resource for deploying static web
      applications on the AWS cloud platform.`,
      blogLink: 'https://medium.com/@selamawitwoldey/hosting-a-static-website-angular-app-on-aws-with-route-53-s3-and-aws-certificate-manager-bc92bdfaea42'
    },
    {
      id: 2,
      image: 'assets/images/innerpage/dotnetsnowflake.png',
      heading: 'Leveraging Snowflake in .NET Micro services',
      blogAuthor: 'Selamawit W',
      blogDate: 'Jan 28, 2024',
      blogDetail: `
      This blog post provides an overview of how to use Snowflake in .NET microservices,
      discussing its benefits, challenges, and considerations for integration.
      It covers essential aspects such as scalability, performance, flexibility, and management,
      offering insights for developers and organizations looking to leverage Snowflake for building scalable and
      data-driven microservices-based applications. Whether you're a .NET developer exploring new data analytics solutions or
      an organization seeking to harness the power of Snowflake, this guide serves as a comprehensive resource for understanding
      the integration of Snowflake with .NET microservices.`,
      blogLink: 'https://medium.com/@selamawitwoldey/leveraging-snowflake-in-net-micro-services-b49d2bde5dd0'
    }
  ];
}
