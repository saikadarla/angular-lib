import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Store management.....';

  constructor(
    private _route: ActivatedRoute,
    private _routerNavigate: Router
    ) {

  }

  ngOnInit(): void{
    
    let title = 'hello Title field';
    console.log('this.route: ', this._route);
  }

  onClick(): void{
    console.log('called......');
    this._routerNavigate.navigate(['./about'])
  }
}
