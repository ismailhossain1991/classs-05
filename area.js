//Create a function that will return the area of a rectangle, square, triangle

function area(type, length, width){

    if( type == 'square'){
        return length * length;
    }else if(type == 'rectangle'){
        return length * width;
    }else if( type == 'triangle'){
        return .5 * length * width    }
}

console.log(area('triangle', 50, 70));




