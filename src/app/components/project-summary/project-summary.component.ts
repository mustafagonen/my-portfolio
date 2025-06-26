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
        { id: 1, projectName: "Warehouses App", company: "Hepsiburada", companyImageUrl: 'assets/images/technologies/hepsiburada.svg' },
        { id: 2, projectName: "Merchant App", company: "Hepsiburada", companyImageUrl: 'assets/images/technologies/hepsiburada.svg' },
        { id: 3, projectName: "Partner Portal", company: "ZES (Zorlu)", companyImageUrl: 'assets/images/technologies/zes.svg' },
        { id: 4, projectName: "Operation Portal", company: "ZES (Zorlu)", companyImageUrl: 'assets/images/technologies/zes.svg' },
        { id: 5, projectName: "Runflow", company: "Metech (NL)", companyImageUrl: 'assets/images/technologies/metech.svg' },
        { id: 6, projectName: "MetechAI", company: "Metech (TR)", companyImageUrl: 'assets/images/technologies/metech.svg' },
        { id: 7, projectName: "Greyfood", company: "Metech (DE)", companyImageUrl: 'assets/images/technologies/greyfood.webp' },
        { id: 8, projectName: "CNC", company: "Metech (TR)", companyImageUrl: 'assets/images/technologies/metech.svg' },
        { id: 9, projectName: "CMS", company: "Hacıbayram Veli University", companyImageUrl: 'assets/images/technologies/hacibayram.png' },
        { id: 10, projectName: "Meydan", company: "Hacıbayram Veli University", companyImageUrl: 'assets/images/technologies/hacibayram.png' },
        { id: 11, projectName: "LMS", company: "Hacıbayram Veli University", companyImageUrl: 'assets/images/technologies/hacibayram.png' },
        { id: 12, projectName: "Video Conference", company: "TUBİTAK", companyImageUrl: 'assets/images/technologies/hacibayram.png' }
    ];

    constructor(
        private _router: Router
    ) { }

    ngOnInit(): void { }

    navigateToProjectDetail(projectId: any) {
        this._router.navigate(['/project/detail', projectId]);
    }
}
