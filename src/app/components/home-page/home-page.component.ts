import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { MgLandingComponent } from '../landing/landing.component';
import { MgProjectSummaryComponent } from '../project-summary/project-summary.component';

@Component({
    selector: 'mg-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    imports: [
        SharedModule,
        MgLandingComponent,
        MgProjectSummaryComponent
    ],
    standalone: true
})
export class MgHomePageComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
