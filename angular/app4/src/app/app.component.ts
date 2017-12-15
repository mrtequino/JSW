import { Component, OnInit } from '@angular/core';

import { ConsultaService } from "./service/consulta.service";
import { Post } from './dto/post';
import { MessageService } from './service/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  posts: Post[];

  constructor(private consultaService: ConsultaService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    console.log(this.posts);
    this.consultaService.getPosts()
      .subscribe(data => this.posts = data, error => alert(JSON.stringify(error)));
    console.log(this.posts);
  }

  onBorrar(): void {
    this.messageService.clear();
  }
}
