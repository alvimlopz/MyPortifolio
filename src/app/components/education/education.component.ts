import { Component } from '@angular/core';
import { Education } from '../../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute: 'Unip University',
      course: 'Computer sciences',
      duration: '2016-2022',
      score: '100%'
    },
    {
      institute: 'Ipog, postgraduate',
      course: 'data sciences',
      duration: '2023-2025',
      score: '68%'
    },
    {
      institute: 'Cambly English',
      course: 'English - Level C1',
      duration: '2019-2024',
      score: '100%'
    },
  ];

}
