import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css','./mq-main.component.css']
})
export class MainComponent {

  constructor(private httpCliente: HttpClient){ }


}



