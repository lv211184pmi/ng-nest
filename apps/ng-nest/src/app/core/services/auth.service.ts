import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): void {
    console.log({ username, password })
    this.http.post<any>('/api/auth/login', { username, password })
      .subscribe(user => {
        localStorage.setItem('currentUser', JSON.stringify(user))
        this.router.navigate([''])
      })
  }

  logout(): void {
    localStorage.removeItem('currentUser')
  }

  checkIfLogin(): boolean {
    return !!localStorage.getItem('currentUser')
  }
}
