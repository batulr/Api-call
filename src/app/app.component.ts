import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { UserDispService } from './user-disp.service';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Api-Call';

  public user = [] as any;

  constructor(private users: UserDispService) {
    this.users.getData().subscribe((data) => {
      this.user = data;
    });
  }
}
