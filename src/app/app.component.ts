import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { menuList} from './mock-menu-list';
import { Menu } from './Menu';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
})



export class AppComponent implements OnInit {
  listMenu : Menu[] = [];

  ngOnInit(): void {
    this.listMenu = menuList;
    console.table(this.listMenu);
  }

  selectMenu(event: MouseEvent): void {
    const index = +(event.target as HTMLInputElement).value;
    console.log(`Vous avez sélectionné le menu : ${this.listMenu[index].name}`);
  }
}



