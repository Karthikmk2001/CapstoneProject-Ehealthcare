import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  constructor(
    private _accountService: AccountService,
    private _router: Router
  ) {}
  role: any = '';
  ngOnInit() {
    this.role = localStorage.getItem('role');
    console.log(this.role);
  }
  isRole(): string {
    if (this.role == 'admin') {
      return 'admin';
    } else {
      return 'user';
    }
  }

  logout() {
    this._accountService.logout();
    localStorage.removeItem('role');
    this._router.navigate(['/home']);
  }
}
