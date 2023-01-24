import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-react-projects',
  templateUrl: './react-projects.component.html',
  styleUrls: ['./react-projects.component.css']
})
export class ReactProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() amiImg = 'assets/AmiPets.png'
 
}
