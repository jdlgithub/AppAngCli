import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { menuList} from './mock-menu-list';
import { Menu } from './Menu';
import { NgIf, NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [NgIf, NgForOf],
})



export class AppComponent implements OnInit {
  listMenu : Menu[] = [];
  menuSelected: Menu | undefined;

  ngOnInit(): void {
    this.listMenu = menuList;
    console.table(this.listMenu);
  }
  
  selectMenu(menuId: string): void {
    const index = +menuId;
    this.menuSelected = this.listMenu[index];
    
    if (this.menuSelected) {
       console.log('Vous avez selectionner le menu :', this.menuSelected.name); } 
    else { 
      console.log('Il n\' ya aucun menu à l\'index', index +'. Nous sommes desolé.'); }

    }

  }




