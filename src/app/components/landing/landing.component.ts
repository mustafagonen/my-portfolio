import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
    selector: 'mg-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    imports: [
        SharedModule,
    ],
    standalone: true
})
export class MgLandingComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
