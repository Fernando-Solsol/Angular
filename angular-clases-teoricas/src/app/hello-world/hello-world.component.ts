import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  mensaje = '¡Hola UNSA desde Angular 20!';
  nombre: string = '';
  posts: any[] = []; 

  constructor(private dataService: DataService) {} 

  ngOnInit() {
    this.dataService.getPosts().subscribe((data: any) => {
      this.posts = data;
    });
  }
}