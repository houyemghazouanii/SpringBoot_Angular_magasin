import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testcours',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './testcours.component.html',
  styleUrl: './testcours.component.css'
})
export class TestcoursComponent {

 groupe="2AWI";

 nom="ali";

 direBonjour(): void {
  window.alert('Bonjour');
  }

}
