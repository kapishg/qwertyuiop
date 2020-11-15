class ground{
constructor(x,y,width,height){
   this.a=Bodies.rectangle(x,y,width,height,{isStatic:true})
   World.add(world,this.a)
   this.w=width
   this.h=height
}
display(){
    rectMode(CENTER)
    rect(this.a.position.x,this.a.position.y,this.w,this.h)
}




}