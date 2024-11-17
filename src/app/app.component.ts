import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TodosComponent } from "./MyComponent/todos/todos.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent, RouterModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrected to `styleUrls`
})
export class AppComponent {
  title = 'To-Do-App';
  

  constructor() {
    // Initial setup if needed
    this.title = 'To-Do-App';
  }
  
    

 
  
}