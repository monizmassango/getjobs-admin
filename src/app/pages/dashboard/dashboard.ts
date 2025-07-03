import { Component } from '@angular/core';
import { MatCard } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";

import { Navbar } from "../../components/navbar/navbar";
import { Sidenav } from "../../components/sidenav/sidenav";
import { Chart } from "../../components/chart/chart";

@Component({
  selector: 'app-dashboard',
  imports: [
    Navbar,
    Sidenav,
    MatIcon,
    Chart
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
