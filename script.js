class CoffeMashine{
   constructor(){
    vWotMax=200;
    CoffMax=100;
    partOfCoffe=25;
    partOfWoter=50;
    vCoffe=this.vCoffMax;
    vWoter=this.vWhotMax;
   };
  
    
   changeCoffe(vCoffe,cookCoaf) {
    if (vCoffe<cookCoaf*this.partOfCooffe){
        alert('Мало зерен кофе.Пополните запас');
    }else{
        this.vCoffe=vCoffe - cookCoaf*this.partOfCoffe;
    }
       
   }
   changeWoter(vWoter,cookCoaf) {
    if (vWoter<cookCoaf*this.partOfWote){
        alert('Мало воды.Пополните запас');
    }else{
        this.vWoter=vWoter - cookCoaf*this.artOfWoter;
    }
       
   }
  reWoter(){
    vWoter=this.vWhotMax;
  }
  reCoffe(){
    vCoffe=this.vCoffMax;
  }
}