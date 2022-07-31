import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent implements OnInit {

  floor:number;

  ngOnInit(): void {
  }
  filters: any;
  pemi = {
    value: "4"
  }
  remi = {
    value: "12.5"
  }
  temi = {
    value: "5"
  }
  memi = {
    value: "60"
  }

  query = {
    amount: "",
    interest: "",
    tenureYr: "",
    tenureMo: ""
  }

  result = {
    emi: "",
    interest: "",
    total: ""
  }
  yrToggel: boolean;
  poptions: Options = {
    floor: 1,
    ceil: 20,
    translate: (value: any, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + '<b>L</b>';
        case LabelType.High:
          return value + '<b>L</b>';
        default:
          return value + '<b>L</b>';
      }
    }
  };
  roptions: Options = {
    floor: 5,
    ceil: 20,
    step:.1,
    translate: (value:number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + '<b>%</b>';
        case LabelType.High:
          return value + '<b>%</b>';
        default:
          
         return value + '<b>%</b>';
      }
    }
  };
  toptions: Options = {
    floor: 1,
    ceil: 7,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + '<b>Yr</b>';
        case LabelType.High:
          return value + '<b>Yr</b>';
        default:
          return value + '<b>Yr</b>';
      }
    }
  };
  moptions: Options = {
    floor: 12,
    ceil: 84,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + '<b>Mo</b>';
        case LabelType.High:
          return value + '<b>Mo</b>';
        default:
          return value + '<b>Mo</b>';
      }
    }
  };
  constructor() {
    this.yrToggel = true;
  }

  ngAfterViewInit() {
    this.update();
  }

  tbupdate(id) {
    if (id == 0) {
      this.pemi.value = (Number(this.query.amount) / 100000).toString();
    }
    else if (id == 1) {
      this.remi.value = this.query.interest;
    }
    else if (id == 2) {
      this.temi.value = this.query.tenureYr;
    }
    else if (id == 3) {
      this.memi.value = this.query.tenureMo;
    }
    this.update();
  }

  update() {

    var loanAmount = Number(this.pemi.value) * 100000;
    var numberOfMonths = (this.yrToggel) ? (Number(this.temi.value) * 12) : Number(this.memi.value);
    var rateOfInterest = Number(this.remi.value);
    var monthlyInterestRatio = (rateOfInterest / 100) / 12;

    this.query.amount = loanAmount.toString();
    this.query.interest = rateOfInterest.toString();
    if (this.yrToggel) {
      this.query.tenureYr = this.temi.value.toString();
    }
    else {
      this.query.tenureMo = this.memi.value.toString();
    }

    var top = Math.pow((1 + monthlyInterestRatio), numberOfMonths);
    var bottom = top - 1;
    var sp = top / bottom;
    var emi = ((loanAmount * monthlyInterestRatio) * sp);
    var full = numberOfMonths * emi;
    var interest = full - loanAmount;
    

    this.result.emi = emi.toFixed(0).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.result.total = full.toFixed(0).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.result.interest = interest.toFixed(0).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
