import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
    selector: 'mg-project-page',
    templateUrl: './project-page.component.html',
    styleUrls: ['./project-page.component.scss'],
    imports: [
        SharedModule,
    ],
    standalone: true
})
export class MgProjectPageComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
