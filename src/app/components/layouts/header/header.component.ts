import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  activeItem: MenuItem = new Object;
  constructor(
    private primengConfig: PrimeNGConfig
  ) { }

  public tabs(){
    this.items.push(
      {   
        
          label:'Login',
          icon:'pi pi-sign-in',
      })
      this.activeItem = this.items[0];
  }
  ngOnInit(): void {
    this.tabs()
    this.primengConfig.ripple = true;
  }

}
