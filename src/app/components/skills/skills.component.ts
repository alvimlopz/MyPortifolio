import { Component } from '@angular/core';
import { Skill } from '../../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Meterial',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'Java SE/EE - version 8,11,17',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'HTML, CSS, JavaScrip',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'OracleSQL, Postgred, MySQL',
      level: 'Intermediate',
      rating: 60,
    },
    {
      name: 'Git, Azure',
      level: 'Intermediate',
      rating: 80,
    },
  ]

}
