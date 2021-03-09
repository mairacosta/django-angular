import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-frontend';

  members = [
    {name: 'Member 01', id: 1, surname:'Janis', photo: 'http://www.minhaapp.com/photo1'},
    {name: 'Member 02', id: 2, surname:'Mary', photo: 'http://www.minhaapp.com/photo2'},
    {name: 'Member 03', id: 3, surname:'Mujica', photo: 'http://www.minhaapp.com/photo3'},
  ];

  constructor(private api:ApiService, private router: Router) {
    this.getMembers();
  }

  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data
      },
      error => {
        console.log('ERRO', error.massage);
      }
    );
  };

  memberClicked = (member) => {
   this.router.navigate(['member-detail', member.id]);
  };
}
