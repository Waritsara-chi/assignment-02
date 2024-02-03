import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import jsonData from '../../../assets/landmark.json';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landmarks',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatButtonModule, RouterModule],
  templateUrl: './landmarks.component.html',
  styleUrl: './landmarks.component.scss',
})
export class LandmarksComponent {
  landmarks = jsonData;
  landmarkResult: any[] = jsonData;
  constructor() {
    console.log(this.landmarkResult);
  }

  findOne(id: HTMLInputElement) {
    this.landmarkResult = [];
    for (const landmark of this.landmarks) {
      if (landmark.idx.toString() == id.value) {
        this.landmarkResult.push(landmark);
        console.log(this.landmarkResult);
      }
    }
  }

  findText(text: any) {
    this.landmarkResult = [];
    console.log(text.value);
    for (const landmark of this.landmarks) {
      if (landmark.name.includes(text.value)) {
        this.landmarkResult.push(landmark);
        console.log(landmark, landmark.name.includes(text.value));
      }
    }
  }

  namecountry = ['ญี่ปุ่น', 'ประเทศไทย', 'เนเธอร์แลนด์'];
  onSelectionChange(event: any) {
    this.landmarkResult = [];
    const select = event.value;
    // console.log(event);
    console.log('Selection changed:', select);
    for (const landmark of this.landmarks) {
      if (landmark.country.includes(select)) {
        this.landmarkResult.push(landmark);
        console.log(landmark, landmark.country.includes(select));
      }
    } 
    // this.landmarks = this.landmarks.filter(lm => lm.country.includes(select))
  }
  
}
