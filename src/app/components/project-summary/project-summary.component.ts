import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { Router } from '@angular/router';

@Component({
    selector: 'mg-project-summary',
    templateUrl: './project-summary.component.html',
    styleUrls: ['./project-summary.component.scss'],
    imports: [
        SharedModule,
    ],
    standalone: true
})
export class MgProjectSummaryComponent implements OnInit {

    public myProjects = [
        { id: 1, projectName: "Intelligent Warehouses", company: "Hepsiburada" },
        { id: 2, projectName: "Merchant App", company: "Hepsiburada" },
        { id: 3, projectName: "Partner Portal", company: "ZES (Zorlu)" },
        { id: 4, projectName: "Operation Portal", company: "ZES (Zorlu)" },
        { id: 5, projectName: "Runflow", company: "Metech (NL)" },
        { id: 6, projectName: "MetechAI", company: "Metech (TR)" },
        { id: 7, projectName: "Greyfood", company: "Metech (DE)" },
        { id: 8, projectName: "CNC", company: "Metech (TR)" },
        { id: 9, projectName: "CMS", company: "Hacıbayram Veli University" },
        { id: 10, projectName: "Meydan", company: "Hacıbayram Veli University" },
        { id: 11, projectName: "LMS", company: "Hacıbayram Veli University" },
        { id: 12, projectName: "Video Conference", company: "TUBİTAK" }
    ];

    constructor(
        private _router: Router
    ) { }

    ngOnInit(): void { }

    navigateToProjectDetail(projectId: any) {
        this._router.navigate(['/project/detail', projectId]);
    }
}
