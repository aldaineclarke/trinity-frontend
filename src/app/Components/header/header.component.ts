import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public cartService: CartService) {}

  ngOnInit(): void {}
  navLink() {
    alert('This Page is not available right now. Under Construction');
  }


}
