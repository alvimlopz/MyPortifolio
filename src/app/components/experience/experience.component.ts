import { Component } from '@angular/core';
import { WorkExperience } from '../../models/models';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  workExpList: WorkExperience[] = [
    {
      role: 'Backend developer',
      company: 'Unidac',
      duration: 'Apr 2020 - May 2022 · 2 years 2 months',
      description: [
        'responsible for developing the application logic and functioning of systems or applications on the server side',
        'Worked on different technologies such as Java 8+, SpringBoot, Git, Microservices, Oracle SQL, Postman'
      ],
    },
    {
      role: 'UOL - Universo Online',
      company: 'Unidac',
      duration: 'May 2022 - Apr 2023 · 1 year',
      description: [
        'Responsible for developing screens and fixing bugs, using Java with Spring-boot Framework, no SQL, AWS, continuous correction',
        'technologies : Java 11, SpringBoot, Postaman, JavaScript, Html, Css and Angular'
      ],
    },
    {
      role: 'Full stack developer',
      company: 'Totvs',
      duration: 'Apr 2023 - the moment · 11 months',
      description: [
        'Focusing on the Banco Sicredi customer, I am responsible for developing microservices, building solutions, analyzing and solving problems in the production environment, construction of REST interface',
        'With the following technologies, java versions 8, 17 for BackEnd, Hibernate, MVC, Apache Kafka, Swegger, SpringBoot, AWS, REST, Maven, Refactoring, Clean-Code and Clean Architecture, Angular for FronEnd version 13+, Scss, Html, Css, JavaScrip, typescript, primeface and etc.'
      ],
    },
  ];

}
