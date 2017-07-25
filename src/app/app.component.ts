import {Component} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        trigger('animationState', [
            state('false', style({
                backgroundColor: 'LightGreen',
                transform: 'scale(1) translateX(0%)'
            })),
            state('true', style({
                backgroundColor: 'PaleGreen',
                transform: 'scale(1.1) translateX(10%)'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ])
    ]
})
export class AppComponent {

        animation: boolean = false;

    toggleAnimation() {
        this.animation = !this.animation;
        console.log(this.animation);
    }

}
