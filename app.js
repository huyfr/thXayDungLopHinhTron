let Circle=function (radius)
{
    this.radius=radius;
    //end attribute;

    this.getRadius=function ()
    {
        return radius;
    };

    this.getArea=function ()
    {
        return Math.PI*radius*radius;
    };
    //end method;
};

let circle=new Circle(4);
console.log(circle);
let radius=circle.getRadius();
let area=circle.getArea();
document.write("radius: "+radius+"; area: "+area);