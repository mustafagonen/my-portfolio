import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
    selector: 'mg-technologies',
    templateUrl: './technologies.component.html',
    styleUrls: ['./technologies.component.scss'],
    imports: [
        SharedModule,
    ],
    standalone: true
})
export class MgTechnologiesComponent implements OnInit {
    public technologies = [
        { id: 1, name: "Angular", imageUrl: "assets/images/technologies/angular-ar21.svg", navigateUrl: "https://angular.dev/" },
        { id: 2, name: "Vue.js", imageUrl: "assets/images/technologies/vuejs-ar21.svg", navigateUrl: "https://vuejs.org/" },
        { id: 3, name: "Node.js", imageUrl: "assets/images/technologies/nodejs-ar21.svg", navigateUrl: "https://nodejs.org/en" },
        { id: 4, name: ":NET", imageUrl: "assets/images/technologies/dotnet-ar21.svg", navigateUrl: "https://dotnet.microsoft.com/en-us/" },
        { id: 5, name: "HTML", imageUrl: "assets/images/technologies/w3_html5-ar21.svg", navigateUrl: "https://www.w3schools.com/html/" },
        { id: 6, name: "CSS", imageUrl: "assets/images/technologies/w3_css-ar21~old.svg", navigateUrl: "https://www.w3schools.com/css/" },
        { id: 7, name: "Typescript", imageUrl: "assets/images/technologies/typescriptlang-ar21.svg", navigateUrl: "https://www.typescriptlang.org/" },
        { id: 8, name: "Javascript", imageUrl: "assets/images/technologies/javascript-ar21.svg", navigateUrl: "https://www.javascript.com/" },
        { id: 9, name: "Github", imageUrl: "assets/images/technologies/git-scm-ar21.svg", navigateUrl: "https://github.com/" },
        { id: 10, name: "GitLab", imageUrl: "assets/images/technologies/gitlab-ar21.svg", navigateUrl: "https://about.gitlab.com/" },
        { id: 11, name: "TailwindCss", imageUrl: "assets/images/technologies/tailwindcss-ar21.svg", navigateUrl: "https://tailwindcss.com/" },
        { id: 12, name: "Microsoft", imageUrl: "assets/images/technologies/microsoft-ar21.svg", navigateUrl: "https://www.microsoft.com/" },
        { id: 13, name: "Linux", imageUrl: "assets/images/technologies/linux-ar21.svg", navigateUrl: "https://ubuntu.com/" },
        { id: 14, name: "MySql", imageUrl: "assets/images/technologies/mysql-ar21.svg", navigateUrl: "https://www.mysql.com/" },
        { id: 15, name: "Figma", imageUrl: "assets/images/technologies/figma-ar21.svg", navigateUrl: "https://www.figma.com/" },
        { id: 16, name: "Zeplin", imageUrl: "assets/images/technologies/zeplinio-ar21.svg", navigateUrl: "https://zeplin.io/" },
        { id: 17, name: "Jira", imageUrl: "assets/images/technologies/atlassian_jira-ar21.svg", navigateUrl: "https://www.atlassian.com/software/jira" },
    ];

    constructor(
    ) { }

    ngOnInit(): void { }

    navigateToProjectDetail(navigateUrl: any) {
        window.open(navigateUrl, '_blank');
    }
}
