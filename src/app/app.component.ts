import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public LoremValue = 'LoremIpsum';
  public zupa = 'EXAMPLE';
  public JsonObject = {
    properties: 'lorem'
  };
  public birthday = Date.now();
  public isAuthenticated = false;
  public persons: string[] = ['Krzysztof Siedlecki', 'Marcin Janiak', 'Robert Lewandowski', 'Krzysztof Bosak']
  public lorem = 'lorem-ipsum-blablaaableh'
}
