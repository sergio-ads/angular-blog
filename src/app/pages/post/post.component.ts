import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { fakeCards } from "../../data/fakeCards";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  post: any;
  ___count = [];

  constructor(private route:ActivatedRoute, private router:Router) {
    this.___count.length = 20;
    route.paramMap.subscribe(value => this.setValuesToComponent(value.get("id")))
  }

  setValuesToComponent(id:string | null) {
    const result = fakeCards.filter(post => post.id == id)
    
    if(result.length == 0) {
      this.router.navigate(['404'], {skipLocationChange:true})
    } else {
      this.post = result[0];
    }
  }

}
