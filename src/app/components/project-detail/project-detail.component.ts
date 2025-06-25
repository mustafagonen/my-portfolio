import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../shared.module';

@Component({
    selector: 'mg-project-detail',
    templateUrl: './project-detail.component.html',
    styleUrls: ['./project-detail.component.scss'],
    imports: [
        SharedModule,
    ],
    standalone: true
})
export class MgProjectDetailComponent implements OnInit {

    projectId: any;

    constructor(
        private _activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this._activatedRoute.paramMap.subscribe(async (params) => {
            this.projectId = params.get('id');
        });
    }

}
