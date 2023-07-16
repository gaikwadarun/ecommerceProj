import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(private seller:SellerService){}

  SignUp(sellerform: any): void {

    console.log(sellerform);
    
    this.seller.userSignuUp(sellerform.value).subscribe(
      (result)=>{
      console.log(result)
    }
    )

  }
}
