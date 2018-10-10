import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../git-hub.service';

@Component({
  selector: 'app-nav-side-bar',
  templateUrl: './nav-side-bar.component.html',
  styleUrls: ['./nav-side-bar.component.css']
})
export class NavSideBarComponent implements OnInit {
  constructor(private gitHubService: GitHubService) {}

  users: any;

  showGit() {
    this.gitHubService.getGit().subscribe(user => (this.users = user));
  }

  ngOnInit() {
    this.showGit();
  }
}
