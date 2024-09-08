import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, PanelModule,InputTextModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
