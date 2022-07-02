import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter, Output } from '@angular/core';

export interface blog {
    id: number,
    name: string,
    writtenBy: string,
    writtenDate: any,
    description: string,
    content: string
}

@Injectable()
export class BlogService {
    errorMessage: any;
    id: any;
    name: any;
    type: any;

    constructor(
        private http: HttpClient
    ) {};

    GetBlogs(): any {
        return this.http.get<blog[]>('https://my-json-server.typicode.com/haseeb-binazam/blogs/posts');
    };

    setName(name: any) {
        console.log(name);
        this.name = name;
    }
    
    setType(type: any) {
        console.log(type);
        this.type = type;
    }



    addBlog(
        id: number,
        title: string,
        author: string,
        desc: string,
        content: string,
        date: string | null
    ) {
        //posting new entry to api
        const body = {
            id: id,
            name: title,
            writtenBy: author,
            writtenDate: date,
            description: desc,
            content: content,
        }

        this.http.post<any>('https://my-json-server.typicode.com/haseeb-binazam/blogs/posts', body) 
            .subscribe({
                next: data => {
                    console.log(`data added with id : ${data.id}`);
                },

                error: error => {
                    this.errorMessage = error.message;
                    console.error('There was an error!', this.errorMessage);
                }
            })
        
    };    

    updateBlog(
        id: number,
        title: string,
        desc: string,
        content: string,
        date: string | null
    ) {
        //posting updated entry to api

        const body = {
            id: id,
            name: title,
            writtenDate: date,
            description: desc,
            content: content,
        }


        this.http.put<any>(`https://my-json-server.typicode.com/haseeb-binazam/blogs/posts/${id}`, body) 
            .subscribe({
                next: data => {
                    console.log(`data updated with id : ${data.id}`);
                },

                error: error => {
                    this.errorMessage = error.message;
                    console.error('There was an error!', this.errorMessage);
                }
            })
        
    };
};
