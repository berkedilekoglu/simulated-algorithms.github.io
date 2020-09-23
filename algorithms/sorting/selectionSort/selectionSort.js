alert("After enter Rectangle Width and Frame Rate your simulation will start!");

var recWidth = Number(window.prompt("Enter the rectangle width (Lower width -> High number of elements! 5 is recommended): "));
var fr = Number(window.prompt("Enter the Frame Rate (100 is recommended! For more slow frames give lower numbers): "));
var minIndex = 0;
var currentIndex = 0;
var comparedIndex = 0;
var numberOfComparison = 0;
var numberOfReplacement = 0;
var endTime = 0;
var startTime = 0;
var runTime = 0;
var control = 'selection';
var begin = false;
function setup() {
    if(fr > 0 && recWidth >0)
    {
    createCanvas(windowWidth, windowHeight);
    console.log("Width: "+windowWidth);
    console.log("Height: "+ windowHeight);
    
    
    mySpace = new sortingSpace();
    mySpace.setup();

    frameRate(fr);
    background(0);
    mySpace.show();

    startTime = window.performance.now();
    }
    else
    {
        noLoop();
    }
    
    
    
}
function windowResized() 
{
    resizeCanvas(windowWidth, windowHeight);
}




function draw() 
{

    background(0);
    
    if(control == 'selection')
    {
        numberOfComparison++;
        if(currentIndex<mySpace.len())
        {
            minIndex = mySpace.select(currentIndex,minIndex)
            begin = false;
        }
        
        else
        {
            numberOfReplacement++;
            mySpace.replace(comparedIndex,minIndex);
            comparedIndex++;
            currentIndex = comparedIndex;
            minIndex = comparedIndex;
            begin = true;
        }
        control = 'release';
    }
    else
    {
        if(currentIndex<mySpace.len() && begin == false)
        {
            
            mySpace.release(currentIndex);
            currentIndex++;
        }
        
        control ='selection';
    }

    if (comparedIndex == mySpace.len())
    {
        

        endTime = window.performance.now();
        runTime = (endTime-startTime)/1000;
        textSize(15);
        fill(211,211,211);
        text('Run time in seconds: '+ runTime.toString(), 10, 80);
        noLoop();
    }

    textSize(20);
    fill(211,211,211);
    text('Number Of Comparisons: '+ numberOfComparison.toString(), 10, 60);
    textSize(20);
    fill(211,211,211);
    text('Number Of Replacements: '+ numberOfReplacement.toString(), 10, 40);
    textSize(20);
    fill(211,211,211);
    text('Number Of Elements: '+ mySpace.len().toString(), 10, 20);
    
    

    mySpace.show();

    
}

