import { Component, OnInit } from '@angular/core';
import { Insta } from '../model/instagram.model';
import { InstagramService } from '../services/instagram.service';


@Component({
  selector: 'app-time-line-component',
  templateUrl: './time-line-component.component.html',
  styleUrls: ['./time-line-component.component.css']
})
export class TimeLineComponentComponent implements OnInit {

  constructor(private instagramservice: InstagramService) { }
  city!: Insta[];
  ngOnInit(): void {
    this.city = this.instagramservice.getAllSnap();
  }

}
