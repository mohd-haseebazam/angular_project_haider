import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { blog, BlogService } from '../blog.service';

@Component({
    selector: 'app-blog-detail',
    templateUrl: './blog-detail.component.html',
    styleUrls: ['./blog-detail.component.css']
})

export class BlogDetail implements OnInit {

    blogDetail!: blog;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private blogService: BlogService
    ) { };

    ngOnInit() { 
        this.route.paramMap.subscribe(
            (val: ParamMap) => {
                let id = parseInt(val.get('id') || '');
                // console.log(id);
                // console.log(this.id);
                this.blogService.GetBlogs().subscribe(
                    (data: any) => {
                        for(let i of data) {
                            // console.log(i);
                            if( i.id === id ) {
                                // console.log(i);
                                this.blogDetail = i;
                                // console.log(this.blogDetail);
                            }
                        }
                    },
                    (err: any) => {console.log(err);}
                )
            }
        );


        
    };

    onEdit() {
        this.router.navigate(['edit'], {relativeTo: this.route});
    };
};