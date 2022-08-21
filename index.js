function  distanceFromHqInBlocks(blocks){

    if(blocks >= 42){
        return blocks - 42;
    }
    else{
        return 42 - blocks;
    }
}

function  distanceFromHqInFeet(blocks){
    return (distanceFromHqInBlocks(blocks)*264)

}

function  distanceTravelledInFeet(start, destination){
    if (start < destination){
        return (destination - start)*264;
    }
    else{
        return (start - destination)*264;
    }

}

function calculatesFarePrice(start, destination){
    let distanceFeet = distanceTravelledInFeet(start, destination);
    if (distanceFeet <= 400){
        return 0;
    }
    else if(distanceFeet > 400 && distanceFeet <= 2000){
        return (distanceFeet - 400)*.02;
    }
    else if(distanceFeet > 2000 && distanceFeet <= 2500){
        return 25;
    }
    else{
        return `cannot travel that far`;
    }
    
}