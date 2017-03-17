import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: '<star></star>',
    moduleId: module.id,
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
    onClick(): void{
       // console.log("This rating "+`${this.rating}`+" has been clicked");
        this.ratingClicked.emit(`This rating ${this.rating} has been clicked`);
    }
}