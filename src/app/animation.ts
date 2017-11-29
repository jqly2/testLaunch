import {
    trigger,
    state,
    animate,
    style,
    transition
} from '@angular/core';


//At the moment of writing this comment, the removal of DOM elements causes the the transition to not work properly. 11-26

export const animation = trigger('cardAnimation',[
    state('small', style({
        transform: 'scale(1)',
    })),
    state('large', style({
        transform: 'scale(1)',
    })),

    transition('small <=> large', animate('1000ms ease-in')),
])
