import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfileService } from './user-profile.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private userProfileService: UserProfileService) {}

  userInfo: any;

  ngOnInit() {
    // this.route.params.subscribe(user => console.log(user.id));
    this.route.params.subscribe(user =>
      this.userProfileService.getUser(user.id).subscribe(users => (this.userInfo = users))
    );
  }
}
