const vWotMax=200;
const vCoffMax=100;



class CoffeMashine{
 vCoffe=vCoffMax;
  vWoter=vWotMax;
   partOfCoffe=25;  
   partOfWoter=50;  
   changeCoffe(vC,cf) {

    if (vC < cf*this.partOfCoffe){
        alert('Мало зерен кофе.Пополните запас');
        
    }else{
        this.h=vC - cf*this.partOfCoffe;
        
    }
     return  this.h
   }
   changeWoter(vW,cf) {
   
    if (vW < cf*this.partOfWoter){
        alert('Мало воды.Пополните запас');
    }else{
        this.d=vW - cf*this.partOfWoter;

    }
    return this.d;
   }
  reWoter(){
    this.vWoter=vWotMax;
    return this.vWoter;
  }
  reCoffe(){
    this.vCoffe=vCoffMax;
    return this.vCoffe;
  }
}
let t=new CoffeMashine();
console.log(t.vCoffe);
const btn=document.getElementById('01');
const btn1=document.getElementById('02');
const btn2=document.getElementById('03');
const btn3=document.getElementById('04');
const btn4=document.getElementById('05');
//const p=document.createElement('p');
//document.body.append(btn,btn1,btn2,);
//document.body.append(p);
//document.body.append(btn3,btn4);

//перввая кнопка (эспрессо)
btn.addEventListener('click',()=>{
    t.vCoffe =t.changeCoffe(t.vCoffe,1);
   t.vWoter = t.changeWoter(t.vWoter,1)
    console.log( t.vCoffe);
    console.log(t.vWoter);
    
    addData();
})
// вторая кнопка (двойной эспрессо)   
btn1.addEventListener('click',()=>{
    t.changeCoffe(t.vCoffe,2);
    t.changeWoter(t.vWoter,2);
    console.log(t.vCoffe);
    console.log(t.vWoter);
    
    addData();
})  
//третья кнопка (американо)  
btn2.addEventListener('click',()=>{
    t.vCoffe=t.changeCoffe(t.vCoffe,1);
    t.vWoter=t.changeWoter(t.vWoter,4);
    console.log(t.vCoffe);
    console.log(t.vWoter);
   
    addData();

}) 
//четвертая кнопка (пополнение запасов кофе) 
btn3.addEventListener('click',()=>{
  t.vCoffe=t.reCoffe();
  console.log(t.vCoffe);
  
    addData();
}) 
// пятая кнопка (пополнение запасов воды)      
btn4.addEventListener('click',()=>{
  t.vWoter=t.reWoter();
   console.log(t.vWoter);
   
    addData();
})    



   function addData( ) {
    myChart.data.datasets[0].data[0] = t.vCoffe;
    myChart.data.datasets[0].data[1] = t.vWoter;
    myChart.update();
}
/*setInterval function (){
    chart.data.datasets[0].data[5] = 80;
    chart.data.labels[5] = "Newly Added";
    chart.update();
}*/




// диаграммы
var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Кофе', 'Вода'],
        datasets: [{
            label: 'количество',
            data: [t.vCoffe, t.vWoter],
            backgroundColor: [
                'black',
                'blue'
                            ],
            borderColor: [
                'red',
                'red',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'количество кофе (воды)',
            position: 'top',
            fontSize: 16,
            padding: 50,
            
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0
                }
            }]
        }
    }
});

// myChart.update()