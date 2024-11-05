import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./views/navbar/navbar.component";
import { FooterComponent } from "./views/footer/footer.component";
import { TestcoursComponent } from "./views/testcours/testcours.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, TestcoursComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'magasin-front';
}
