import { Component, Input,OnInit } from '@angular/core';
import {Insta} from '../model/instagram.model';
@Component({
  selector: 'app-insta-ipd',
  templateUrl: './insta-ipd.component.html',
  styleUrls: ['./insta-ipd.component.css'],
})
export class InstaIpdComponent implements OnInit {
  @Input() cite!: Insta;
  buttonText!: string;
  buttonComText!: string;
  com!: string;

  constructor() {}

  ngOnInit(): void {
    this.buttonText = 'Like';
    this.buttonComText = 'Like';
    this.com = 'Magnifique';
  }

  onAddlikePict(): void {
    if (this.buttonText === 'Like') {
      this.cite.nbrAime++;
      this.buttonText = 'Dislike';
    } else {
      this.cite.nbrAime--;
      this.buttonText = 'Like';
    }
  }

  onAddlikeCom(): void {
    if (this.buttonComText === 'Like') {
      this.cite.nbrAimeCom++;
      this.buttonComText = 'Dislike';
    } else {
      this.cite.nbrAimeCom--;
      this.buttonComText = 'Like';
    }
  }

  addCommentaire(): void {
    this.cite.commentaire.push(this.com);
  }

  afficheCommentaire(): void {
    for (let index = 0; index < this.cite.commentaire.length; index++) {
      console.log(this.cite.commentaire[index]);
    }
  }
}
