import { Component, OnInit } from '@angular/core';
type Dictionary = { [index: number]: string }

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  displayval: string;
  sum:any;
  numArray: Array<any>;
  empty :any;

  constructor() { 
    this.displayval = "";
    this.numArray = [];
    this.empty = "";
  }

  ngOnInit(): void {
  }

   ones:Dictionary = {
    0:"Zero",
    1:"one",
    2:"two",
    3:"three",
    4:"four",
    5:"five",
    6:"six",
    7:"seven",
    8:"eight",
    9:"nine",
    10:"ten",
    11:"eleven",
    12:"twelve",
    13:"thirteen",
    14:"fourteen",
    15:"fifteen",
    16:"sixteen",
    17:"seventeen",
    18:"eighteen",
    19:"nineteen",
    20:"twenty"
  };
  prefixes:Dictionary ={
    2:"twenty",
    3:"thirty",
    4:"fourty",
    5:"fifty",
    6:"sixty",
    7:"seventy",
    8:"eighty",
    9:"ninthy",
  }

  getvalue(num:string){
    this.displayval = num;

    console.log(num)
    
    if(+num in this.ones){
        this.displayval = this.ones[+num]
    }

    this.numArray = num.split("")

    // type - 1
    // if(this.numArray.length === 2 && +num>20){
    //     this.displayval = this.prefixes[this.numArray[0]]+ " " + this.ones[this.numArray[1]]
    // }

    if(this.numArray.length === 2 && +num>20){
      if(this.numArray[1]==0){
        this.displayval = this.prefixes[this.numArray[0]]
      }  
      else{
        this.displayval = this.prefixes[this.numArray[0]]+ " " + this.ones[this.numArray[1]]
      }     
    }


    if(this.numArray.length === 3){
      if(this.numArray[1] == 0 && this.numArray[2] == 0){
        this.displayval = this.ones[this.numArray[0]] + 'hundred'
      }
      else if(this.numArray[1] === 0){
        this.displayval = this.ones[this.numArray[0]] +
        'hundred'+ " " + this.ones[this.numArray[2]];
      }else if(this.numArray[1] < 2){
        this.displayval = this.ones[this.numArray[0]] +
        'hundred'+ " " + this.ones[+([this.numArray[1],this.numArray[2]]).join("")];
      }else if(this.numArray[2] == 0){
        this.displayval = this.ones[this.numArray[0]] +
        'hundred'+ " "+ this.prefixes[this.numArray[1]];
      }else{
        this.displayval = this.ones[this.numArray[0]] +
        'hundred'+ " "+ this.prefixes[this.numArray[1]] + this.ones[this.numArray[2]];
      }
    }


    // type - 1
    // if(this.numArray.length === 3){
    //   if(this.numArray[1] === 0){
    //     this.displayval = this.ones[this.numArray[0]] +
    //     'hundred'+ " " + this.ones[this.numArray[2]];
    //   }else if(this.numArray[1] < 2){
    //     this.displayval = this.ones[this.numArray[0]] +
    //     'hundred'+ " " + this.ones[+([this.numArray[1],this.numArray[2]]).join("")];
    //   }else{
    //     this.displayval = this.ones[this.numArray[0]] +
    //     'hundred'+ " "+ this.prefixes[this.numArray[1]] + this.ones[this.numArray[2]];
    //   }
    // }

    if(this.numArray.length === 4){
      this.displayval = "we have done till 3 values only";
    }

  }

 

// +++++++++++++++++++++++++++++++++++++++++++++

// type2
  // outputWords=''
  // convertToWord(num:any){
  //   this.outputWords= converter.toWords(num);
  // }

  

}
