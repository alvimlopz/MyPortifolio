import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css'
})
export class PersonalInformationComponent {
  myData: string[][] = [
    ['Name: ', 'Alvaro Rodrigues'],
    ['birth: ', '20/04/1997'],
    ['work Exp: ', '4 Years'],
    ['Education: ', 'Unip university, Computer sciences'],
    ['Interests: ', 'Full Stack Developer with Java, Spring and Angular'],
  ];

  aboutMe: string[] = [
    'Hi, I am a software Engineer with 4 years of experience in software industry.',
    'I work as a Full Stack developer with Java version 8+, Spring Framework, Angular, Oracle SQL, etc.',
    'Delivered all product within deadlines. Always eager to learn new technologies',
    'currently working as developer FullStack of Totvs'
  ];

  constructor(){}

  OnInit(): void {}

}
