import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

    @ViewChild('mobileMenu') mobileMenu!: ElementRef;

    constructor() { }

    ngOnInit(): void { }

    toggleMenuWrapper() {
        this.mobileMenu.nativeElement.classList.toggle('active');
    }
}
