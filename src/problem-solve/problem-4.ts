{
  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
   shape: "rectangle";
   width: number;
   height: number;
  };

  function calculateShapeArea (item: Circle | Rectangle): number {
    if(item.shape === 'circle'){
      return Math.PI * item.radius * item.radius;
    } else{
      return item.height * item.width;
    }
  }
}