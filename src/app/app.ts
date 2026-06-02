import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculator } from './calculator';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  implements OnInit{
  ngOnInit(): void {
    let calculator = new Calculator();
    let result = calculator.multiply(3,4);
    console.log(result == 12);  //test passed
    console.log(result != 9); //test passed

    let result2 = calculator.divide(6,2);
    console.log(result2 == 3);
    console.log(result2 != 31);

    let result3 = calculator.divide(6,0);
    console.log(result3 === null); //test passed
  }
  protected readonly title = signal('Lab3_PruebasUnitarias');
}
