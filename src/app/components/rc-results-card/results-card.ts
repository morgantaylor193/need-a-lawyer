
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'rc-results-card',
    templateUrl: './results-card.html',
    styleUrls: ['./results-card.scss']
  })

  export class rcResultsCard implements OnInit{
    @Input() place = {};

    ngOnInit(){
      console.log(this.place);
    }
  }
