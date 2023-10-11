import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {

    displayFlag = false;
    btnClicks = [];
    count = 1;

    showDetails(){
        this.displayFlag = !this.displayFlag;
        this.logClicks();
    }

    logClicks(){
        this.btnClicks.push(new Date());
        this.count++;
    }

    getBackgroundColor(){
        return this.count > 4 ? 'blue' : '';
    }

}
