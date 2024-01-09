import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeCards } from "../../data/fakeCards";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  post: any;
  ___count = [];

  constructor(private route:ActivatedRoute) {
    this.___count.length = 20;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.post = this.setValuesToComponent(value.get("id")))
  }

  setValuesToComponent(id:string | null) {
    const result = fakeCards.filter(post => post.id == id)[0]
    return result
  }

}
