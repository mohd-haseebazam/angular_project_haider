import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { blog, BlogService } from "../Blog/blog.service";
import { DatePipe } from "@angular/common";

@Component({
    selector: 'app-edit-blog',
    templateUrl: './edit-blog.component.html',
    styleUrls: [ './edit-blog.component.css' ]
})

export class EditBlog implements OnInit {

    blogDetail!: blog;
    id!: number

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private blogService: BlogService,
        private datePipe: DatePipe
    ) { };

    ngOnInit() { 
        this.route.params.subscribe(
            (param: Params) => {
                // console.log(param['id']);
                this.id = +param['id']; //+ will convert string to number
                this.blogDetail = this.blogService.GetBlogs();
                console.log(this.blogDetail);
            }
        )
    };

    @ViewChild('titleRef') title!: ElementRef;
    @ViewChild('descriptionRef') desc!: ElementRef ;
    @ViewChild('contentRef') content!: ElementRef ;
    date = new Date;

    onSubmit() {
        let t = this.title.nativeElement.value;
        let d = this.desc.nativeElement.value;
        let c = this.content.nativeElement.value;
        let dt: any = (this.datePipe.transform(this.date, 'yyyy-MM-dd'));
        // console.log(t);
        // console.log(d);
        // console.log(2);
        // console.log(dt);
        
        this.blogService.updateBlog(
            this.id,
            t,
            d,
            c,
            dt
        );

        this.router.navigate(['../'], {relativeTo: this.route});
    };
};