import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
    selector: 'mg-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    imports: [
        SharedModule,
    ],
    standalone: true
})
export class MgNavbarComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
