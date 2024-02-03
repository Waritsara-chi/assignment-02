import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import jsonData from '../../../assets/landmark.json';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule],
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss',
})
export class ShowComponent implements OnInit{
  id: any  = '';
  jsonData = jsonData;
  lanmark: any = {};

  constructor(private activeadRoute: ActivatedRoute){}

  ngOnInit(): void {
      this.id = this.activeadRoute.snapshot.paramMap.get('id') || '';
      this.lanmark = this.jsonData.find((lanmark) => lanmark.idx == this.id);
  }
}
