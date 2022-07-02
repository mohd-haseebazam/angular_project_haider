import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { BlogService } from "../Blog/blog.service";
import { DatePipe } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-add-blog',
    templateUrl: './add-blog.component.html',
    styleUrls: ['./add-blog.component.css']
})

export class AddBlog implements OnInit {

    constructor(
        private blogService: BlogService,
        private datePipe: DatePipe,
        private router: Router,
        private route: ActivatedRoute
    ) { };

    ngOnInit() { };

    @ViewChild('titleRef') title!: ElementRef;
    @ViewChild('descriptionRef') desc!: ElementRef;
    @ViewChild('contentRef') content!: ElementRef;
    @ViewChild('authorRef') author!: ElementRef;
    date = new Date;

    onSubmit() {
        let t = this.title.nativeElement.value;
        let a = this.author.nativeElement.value;
        let d = this.desc.nativeElement.value;
        let c = this.content.nativeElement.value;
        let dt: any = (this.datePipe.transform(this.date, 'yyyy-MM-dd'));
        // console.log('title:' + t);
        // console.log('author:' + a);
        // console.log('desc:' + d);
        // console.log('content:' + c);
        // console.log('date:' + dt);

        let id: number = this.blogService.GetBlogs().length;
        id = id + 1;
        // console.log(id);

        if( t=='' )
            alert('title field cant be empty')
        else if( d=='' )
            alert('description field cant be empty') 
        else if( c=='' )
            alert('content field cant be empty')
        else if( a=='' )
            alert('author field cant be empty')
        

        else {
            this.blogService.addBlog(
                id,
                t,
                a,
                d,
                c,
                dt
            );

            // console.log(this.blogService.getLength());

            this.router.navigate(['../'], {relativeTo: this.route});
        }
    };
}