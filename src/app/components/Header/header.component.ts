import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Params } from "@angular/router";
import { BlogService } from "../Blog/blog.service";

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit  {
    constructor(
        private route: ActivatedRoute,
        private blogService: BlogService
    ) { };

    subscription: any;

    ngOnInit() {
        
    };
}