class Box       //template or design 
  {
      constructor(x, y, width, height)     //constructors are automatically triggerred when the object of the class is created
      {
        //properties 
        this.x =x;
        this.y = y;
        this.w = width;
        this.h= height;
      }
      //method or function
      display()
      {
        rect(this.x, this.y, this.w, this.h);
      }
      changeX(v)
      {
        this.x = this.x+v;
      }
      
  }

  
