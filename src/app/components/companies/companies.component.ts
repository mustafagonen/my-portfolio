import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
    selector: 'mg-companies',
    templateUrl: './companies.component.html',
    styleUrls: ['./companies.component.scss'],
    imports: [
        SharedModule,
    ],
    standalone: true
})
export class MgCompaniesComponent implements OnInit {
    public companies = [
        { id: 1, name: "Hepsiburada", imageUrl: "assets/images/technologies/hepsiburada.svg", navigateUrl: "https://www.hepsiburada.com/" },
        { id: 2, name: "ZES", imageUrl: "assets/images/technologies/zes.svg", navigateUrl: "https://zes.net/ev" },
        { id: 3, name: "Hacibayram Veli University", imageUrl: "assets/images/technologies/hacibayram.png", navigateUrl: "https://hacibayram.edu.tr/" },
        { id: 4, name: "Tübitak Sage", imageUrl: "assets/images/technologies/sage.png", navigateUrl: "https://tubitak.gov.tr/tr" },
        { id: 5, name: "MeTech Digital", imageUrl: "assets/images/technologies/metech.svg", navigateUrl: "https://metechdigital.com/" },
        { id: 6, name: "Greyfood", imageUrl: "assets/images/technologies/greyfood.webp", navigateUrl: "https://www.greyfood.com/" }
    ];

    constructor(
    ) { }

    ngOnInit(): void { }

    navigateToProjectDetail(navigateUrl: any) {
        window.open(navigateUrl, '_blank');
    }
}
