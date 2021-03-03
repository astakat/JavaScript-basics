const paintWall = function ( colors, directions){
    console.log("The " + directions, "wall has been painted " + colors);
}

const firstColor = "pink";
const secondColor = "ochre";

const firstDirection = "north";
const secondDirection = "south-east";

paintWall(firstColor);
paintWall(secondColor);
paintWall();

paintWall(secondColor,firstDirection);


