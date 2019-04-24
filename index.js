class dateInput {

  //Ошибка объявление функции event
constructor() {
  this.input = document.querySelector(".input");
  this.value = this.input.value;
  let dI = this;
  this.input.onchange = function(event) {
  dI.onChange(event);
  }
}

onChange() {
    this.inputValue = this.input.value; 
    this.updateTime = new Date(); 
    return this.inputValue;
  }
  
}

  //Ошибка в имени класса dateInput
class dateRange extends dateInput {
    constructor() {
      super();
      this.container = document.querySelector('.containerForLastUpdateRecordAndPeriodItems');
  }

createItems(period) {

let dates = [];

    //Не была объявлена переменная i в обоих циклах
for (let i = +period.start; i < +period.end; i+= 3600000 * 168) {
  dates.push(i);
}

 let periods = [];
  
for (let i = 0; i < dates.length; i++) {

let date = new Date(dates[i]);

  //Не хватало знаков $ после символа "-"
if (date.getDay() == 1) {
  periods[i] = `${date.toLocaleDateString()} - ${new Date(date.setHours(168)).toLocaleDateString()}`
}  else if (date.getDay() == 2) {
  periods[i] = `${new Date(date.setHours(-24)).toLocaleDateString()} - ${new Date(date.setHours(144)).toLocaleDateString()}`
}  else if (date.getDay() == 3) {
    periods[i] = `${new Date(date.setHours(-48)).toLocaleDateString()} - ${new Date(date.setHours(144)).toLocaleDateString()}`
}  else if (date.getDay() == 4) {
    periods[i] = `${new Date(date.setHours(-48)).toLocaleDateString()} - ${new Date(date.setHours(144)).toLocaleDateString()}`
}  else if (date.getDay() == 5) {
    periods[i] = `${new Date(date.setHours(-72)).toLocaleDateString()} - ${new Date(date.setHours(144)).toLocaleDateString()}`
}  else if (date.getDay() == 6) {
    periods[i] = `${new Date(date.setHours(-96)).toLocaleDateString()} - ${new Date(date.setHours(144)).toLocaleDateString()}`
}  else if (date.getDay() == 0) {
    periods[i] = `${new Date(date.setHours(-120)).toLocaleDateString()} - ${new Date(date.setHours(144)).toLocaleDateString()}`}
  
  
/*  let n = periods.length;
  let a = periods.length;
  
 do { 
  
  b = false;
  a /= 1.3;

   //Отсутсвие фигурных скобок при объявлении условий
if (a == 9 || a == 10) {
  a = 11;
} else if (a < 1) {
  a = 1;
}

for (let i=0; i<n-a; ++i) { 
  if (periods[ i ] > periods[i+a]) { 
    b = true;
    let t = periods[i+a];
     periods[i+a] = periods[ i ]; 
     periods[ i ] = t;
    }
  }
} while (a > 1 || b); */
}
console.log(periods);
return periods;
}
    //Некорректное объявление переменной element
renderItems(items) {
let element = document.createElement('div');
this.container.appendChild(element);

  //Лишнее двоеточие после ?
element.innerText = `Последнее изменение: ${this.updateTime.getDate() + '.' + this.updateTime.getMonth() > 9 ? '0'+this.updateTime.getMonth() : this.updateTime.getMonth()}`
let rI = this;
  //Некорректное объявление innerText
items.forEach(function(item) {
const element = document.createElement('div');
element.innerText = item;
rI.container.appendChild(element);
});

}

onChange() {
  super.onChange();
  this.renderItems(this.createItems(this.createPeriod(this.inputValue)));
}

  //Ошибки в объявлении переменных
createPeriod(date) {
  date = new Date(date);
  let newDate = new Date(date.getFullYear() + 1,0,1);
  
  return {
  start: date,
  end: newDate
    }
  }
}
let range = new dateRange();

/*const range = Object.create(dateRange.prototype);

range.constructor = range.constructor.bind(range);

range.constructor();*/