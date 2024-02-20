import { Component } from '@angular/core';
import { Project } from '../../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Banco Sicredi Guarantee Management',
      technologies: 'AWS, ES3, S2, JAVA8,EJB , Hibernate , Oracle SQL, Apache KafKa, SpringBoot, git',
      description: [
        'creation of software aimed at managing guarantees for the sicredi client.',
        'with the aim of improving the banks relationship with its customers',
      ]
    },
    {
      title: 'Software for managing public tenders in the state of Goias',
      technologies: 'AWS, ES3, S2, JAVA8,EJB , Hibernate , Oracle SQL, Apache KafKa, SpringBoot, Angular, Typescript, MySql, JavaScrip, HTML, Css',
      description: [
        'development of a tool to control and distribute state public tenders',
        'Helping and facilitating both management, when they are competitive',
      ]
    },
  ]

}
