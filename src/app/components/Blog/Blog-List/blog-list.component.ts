import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { blog, BlogService } from '../blog.service';

@Component({
    selector: 'app-blog-list',
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.css']
})

export class BlogList implements OnInit {

    blogs!: blog[];

    constructor(
        private blogService: BlogService,
        private router: Router,
        private route: ActivatedRoute
    ) { };

    ngOnInit() { 
        this.blogService.GetBlogs()
            .subscribe(
                (data: blog[]) => {
                    // console.log(data);  
                    this.blogs = data;
                },

                (err: any) => {console.log(err);}
            )
        // console.log(this.blogs);

        this.route.paramMap.subscribe(
            (val: ParamMap) => {
                let name = val.get('name');
                // console.log(name);
                this.blogService.setName(name);
            }
        );
        this.route.paramMap.subscribe(
            (val: ParamMap) => {
                let type = val.get('userType');
                // console.log(type);
                this.blogService.setType(type);
            }
        );
    };

    onReadmore(id: number) {
        this.router.navigate(['blogdetail', id],)
    }

}