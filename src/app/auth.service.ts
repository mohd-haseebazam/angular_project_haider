
export class AuthService {
    loggedIn = false; 

    isAuthenticated() {
        const promise: any = new Promise(
            (resolve: any) => {
                setTimeout(()=>{
                    resolve(this.loggedIn);
                },500);
            }
        );

        return promise;
    }

    login() {
        this.loggedIn = true;
        return this.loggedIn;
    }

    logout() {
        this.loggedIn = false;
    }
}