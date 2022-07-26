import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-projects',
  templateUrl: './angular-projects.component.html',
  styleUrls: ['./angular-projects.component.css']
})
export class AngularProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() giphyImg = 'assets/giphysite.png'
}
