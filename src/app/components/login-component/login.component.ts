import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { credentials } from '../../app.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
    selector: 'app-login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private authService: AuthService
    ) { };

    ngOnInit() { };

    form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        uname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')])
    });

    get email() { return this.form.get('email'); };
    get password() { return this.form.get('password'); };
    get uname() { return this.form.get('uname'); };

    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.log(credentials.admin.email);
        if(this.form.value.email == credentials.admin.email) {
            if(this.form.value.password == credentials.admin.password){
                // console.log(this.authService.login());
                this.authService.login()
                this.router.navigate(['/bloglist', credentials.admin.userType, this.form.value.uname]);
            }
            else {
                alert('enter valid password');
            };
        }
        else if(this.form.value.email == credentials.user.email) {
            if(this.form.value.password == credentials.user.password){
                this.router.navigate(['/bloglist/blogger', this.form.value.uname]);
            }
            else {
                alert('enter valid password');
            };
        }
        else {
            alert('email not found');
        }
    }

    onLogin() {
    //     // console.log(credentials);
    //     // console.log(this.inputEmail.nativeElement.value);
    //     // console.log(this.inputPass.nativeElement.value);
    //     if(this.inputEmail.nativeElement.value === '')
    //         alert('email cant be empty');
    //     else if(this.inputPass.nativeElement.value === '')
    //         alert('password cant be empty');
    //     else{
    //         if(this.inputEmail.nativeElement.value === credentials.admin.email) {
    //             if(this.inputPass.nativeElement.value === credentials.admin.password){
    //                 this.router.navigate(['/bloglist/admin', credentials.admin.id]);
    //             }
    //             else {
    //                 alert('enter valid password');
    //             };
    //         }
    //         else {
    //             if(this.inputEmail.nativeElement.value === credentials.user.email) {
    //                 if(this.inputPass.nativeElement.value === credentials.user.password){
    //                     this.router.navigate(['/bloglist/blogger', credentials.user.id]);
    //                 }
    //                 else {
    //                     alert('enter valid password');
    //                 }; 
    //             }
    //             else {
    //                 alert('enter valid email');
    //             }
    //         };
    //     };   
    };
};