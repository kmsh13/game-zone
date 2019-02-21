import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  constructor(private apiservice: ApiserviceService) { }
  genreArr;
  genreData = [];
  genreLables = [];
  publisherArr;
  publisherData = [];
  publisherLables = [];
  yearArr;
  yearData = [];
  yearLables = [];
  chartFree = [];
  chartGenre = [];
  chartPublisher = [];
  chartYear = [];
  freeData = [];
  chartPlayersEstimate = [];
  playersEstimateData = [];
  playersEstimateLabel = [];
  categoryMultiplayerData = [];
  categoryMultiplayerLabel = [];
  chartCategoryMultiplayer = [];
  catagory = ["Genre", "Publisher", "Year"];
  selectedCategory = 'Genre';
  onChange(newValue) {
    console.log(newValue);
    this.selectedCategory = newValue;
  }
  ngOnInit() {
    this.apiservice.showReport().subscribe(data => {
      this.genreArr = data.genre;
      data.genre.forEach(element => {
        this.genreData.push(element[0])
        this.genreLables.push(element[1])
      });
      this.chartGenre = new Chart('canvasgenre', {
        data: {
          datasets: [{
            data: this.genreData,
            backgroundColor: ['#004c6d', '#255e7e', '#3d708f', '#5383a1', '#6996b3', '#7faac6', '#94bed9', '#abd2ec', '#c1e7ff']
          }],
          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: this.genreLables
        },
        type: 'polarArea'
      });
      this.publisherArr = data.publisher;
      data.publisher.forEach(element => {
        this.publisherData.push(element[0])
        this.publisherLables.push(element[1])
      });
      this.chartPublisher = new Chart('canvasPublisher', {
        data: {
          datasets: [{
            data: this.publisherData,
            backgroundColor: ['#004c6d', '#255e7e', '#3d708f', '#5383a1', '#6996b3', '#7faac6', '#94bed9', '#abd2ec', '#c1e7ff']
          }],
          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: this.publisherLables
        },
        type: 'polarArea'
      });
      this.yearArr = data.year;
      data.year.forEach(element => {
        this.yearData.push(element[0])
        this.yearLables.push(element[1])
      });
      this.chartYear = new Chart('canvasYear', {
        data: {
          datasets: [{
            data: this.yearData,
            backgroundColor: ['#004c6d', '#255e7e', '#3d708f', '#5383a1', '#6996b3', '#7faac6', '#94bed9', '#abd2ec', '#c1e7ff']
          }],
          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: this.yearLables
        },
        type: 'polarArea'
      });
      data.isfree.forEach(element => {
        this.freeData.push(element[0])
      });
      this.chartFree = new Chart('canvasFree', {
        data: {
          datasets: [{
            data: this.freeData,
            backgroundColor: ['#004c6d', '#255e7e', '#3d708f', '#5383a1', '#6996b3', '#7faac6', '#94bed9', '#abd2ec', '#c1e7ff']
          }],
          labels: ["Free Availble", "Free not availble"]
        },
        type: 'pie'
      });
      data.CategoryMultiplayer.forEach(element => {
        this.categoryMultiplayerData.push(element[0])
      });
      this.chartCategoryMultiplayer = new Chart('canvasCategoryMultiplayer', {
        data: {
          datasets: [{
            data: this.categoryMultiplayerData,
            backgroundColor: ['#004c6d', '#255e7e', '#3d708f', '#5383a1', '#6996b3', '#7faac6', '#94bed9', '#abd2ec', '#c1e7ff']
          }],
          labels: ["Multiplayer availble", "Multiplayer not availble"]
        },
        type: 'pie'
      });
      data.playersEstimate.forEach(element => {
        this.playersEstimateData.push(element[1]);
        this.playersEstimateLabel.push(element[0]);
      });
      this.chartPlayersEstimate = new Chart('canvasPlayersEstimate', {
        type: 'bar',
        data: {
          labels: this.playersEstimateLabel,
          datasets: [
            {
              label: "Estimated Players",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#0E6655", "#2E86C1", "#F0B27A", "#2874A6", "#EC7063"],
              data: this.playersEstimateData
            }
          ]
        }
      });
    });
  }
}