alert("Please Expand Your Browsers' Window Before Simulation!");
alert("After enter Rectangle Width and Frame Rate your simulation will start!");
var recWidth = Number(window.prompt("Enter the rectangle width (Lower width -> High number of elements! 5 is recommended): ",5));
var fr = Number(window.prompt("Enter the Frame Rate (100 is recommended! For more slow frames give lower numbers): ",100));
var index = 0;
var control = 'selection';
var replacing = false;
var numberOfReplacement = 0;
var numberOfComparison = 0;
var endTime = 0;
var startTime = 0;

function setup() {
    if(fr > 0 && recWidth >0)
    {
        console.log("here2")
        createCanvas(windowWidth, windowHeight);
        bubble = new bubbleSpace();
        bubble.setup();
        bubble.show();
        frameRate(fr);
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
    if(index < bubble.len()-1)
    {
        
        if(control == 'selection')
        {
            
            bubble.select(index);
            control = 'replace';
        }
        else if(control == 'replace')
        {
            
            if(bubble.replace(index)==true)
            {
            replacing = true;
            numberOfReplacement++;
            }
            control = 'release';
        }
        else
        {
            bubble.release(index);
            control = 'selection';
            index ++;
            numberOfComparison ++;
        }
        
    }
    else if(replacing == false)
    {
        
        endTime = window.performance.now();
        runTime = (endTime-startTime)/1000;
        textSize(15);
        fill(211,211,211);
        text('Run time in seconds: '+ runTime.toString(), 10, 80);
        noLoop();
    }
    else{
        index = 0;
        replacing = false;
    }

    textSize(20);
    fill(211,211,211);
    text('Number Of Comparisons: '+ numberOfComparison.toString(), 10, 60);
    textSize(20);
    fill(211,211,211);
    text('Number Of Replacements: '+ numberOfReplacement.toString(), 10, 40);
    textSize(20);
    fill(211,211,211);
    text('Number Of Elements: '+ bubble.len().toString(), 10, 20);
    
    
    bubble.show()

    
    
}