import { Component } from '@angular/core';

@Component({
  selector: 'app-exp',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {

  imagePath='../assets/images/innerpage/miu.png';
  imageBduPath='../assets/images/innerpage/bdu.png';

  relayOn = [
    {
      id: '1',
      icon: '../assets/images/innerpage/lytx.png',
      field: 'Software Engineer III',
      fieldText: 'Lytx, Inc.',
      location: 'California, United States',
      year: 'May 2023 - Present',
      description: `
      •	Designed database and entities to implementing into backend. <br/>
      •	Designed RESTful APIs for system modules and Micro services
      •	Decouple Notification service using message queue and enhance delivery rate by 50% and bug report rate by 30%
      •	Streamlined integration of software components with 3rd-party programs such as SendGrid API.
      •	Built responsive UI according to Figma UI design.
      •	Ensured clean and efficient code based on specifications.
      •	Discovered and resolved bottlenecks and bugs to maximize application performance.
      `,
    },
    {
      id: '2',
      icon: '../assets/images/innerpage/excel.png',
      field: 'Senior Software Developer',
      fieldText: 'Excellerent Solutions ',
      location: 'Addis  Ababa, Ethiopia',
      year: 'Jul 2020 - Mar 2022',
      description: `•	Designed database and entities to implementing into backend.
      •	Designed RESTful APIs for system modules and Micro services
      •	Decouple Notification service using message queue and enhance delivery rate by 50% and bug report rate by 30%
      •	Streamlined integration of software components with 3rd-party programs such as SendGrid API.
      •	Built responsive UI according to Figma UI design.
      •	Ensured clean and efficient code based on specifications.
      •	Discovered and resolved bottlenecks and bugs to maximize application performance.
      `,
    },
    {
      id: '3',
      icon: '../assets/images/innerpage/apposit.png',
      fieldText: 'Apposit LLC',
      field: 'Software Engineer.',
      location: 'Addis  Ababa, Ethiopia',
      year: 'Dec 2018 - May 2020',
      description: `•	Developed backend with Spring Boot and integrated Spring Security.
      •	Established Spring Dependency Injection (IOC).
      •	Implemented complex stored procedures for report generation.
      •	Optimized response time of critical reports by 65% using indexing
      •	Designed responsive UI components for reporting module.
      `
    }
  ];

  projects = [
    {
      icon: 'fa fa-home text-danger',
      field: 'Guest House Reservation System',
      fieldText: `Microservice application for house reservations.`,
      tech: `Spring Boot, Spring Cloud, Spring Security, GraphQL, Kubernetes, Istio,
      Google Cloud Platform (GCP), Kafka, Redis, NoSQL, MongoDB, Zipkin`
    },
    {
      icon: 'fa fa-cutlery text-danger',
      field: 'Online Food Booking Application',
      fieldText: `Food booking application for food publishing, and food ordering from nearby restaurants`,
      tech: `Node.js, Express, RESTful Web Service, Angular, TypeScript, JWT, MongoDB, Atlas, AWS,
      Visual Studio Code, iOS.`
    },
    {
      icon: 'fa fa-briefcase text-danger',
      field: 'Job Search Application',
      fieldText: 'Designed job search system with 5-layer MVC architecture to build RESTful APIs.',
      tech: `Spring Boot, REST Framework, RESTful Web Service, Spring, Hibernate, ActiveMQ Artemis, Spring
      ActiveMQ, Mockito, IntelliJ, iOS.`
    },
    {
      icon: 'fa fa-book text-danger',
      field: 'Online Library Management',
      fieldText: 'Develop management system for library operations.',
      tech: `Java, Spring Boot, Spring Security, Hibernate, Java Swing, IntelliJ, iOS.`
    }
  ];
}
