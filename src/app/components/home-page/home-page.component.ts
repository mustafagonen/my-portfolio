import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { MgNavbarComponent } from '../navbar/navbar.component';
import { MgLandingComponent } from '../landing/landing.component';
import { MgFooterComponent } from '../footer/footer.component';
import { MgProjectPageComponent } from '../project-page/project-page.component';

@Component({
    selector: 'mg-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    imports: [
        SharedModule,
        MgNavbarComponent,
        MgLandingComponent,
        MgFooterComponent,
        MgProjectPageComponent
    ],
    standalone: true
})
export class MgHomePageComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
