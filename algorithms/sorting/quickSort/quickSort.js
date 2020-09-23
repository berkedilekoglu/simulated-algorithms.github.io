alert("Please Expand Your Browsers' Window Before Simulation!");

alert("After enter Rectangle Width and Frame Rate your simulation will start!");

var recWidth = Number(window.prompt("Enter the rectangle width (Lower width -> High number of elements! 5 is recommended): "));
var fr = Number(window.prompt("Enter the Frame Rate (100 is recommended! For more slow frames give lower numbers): "));
var control2 = 'topFree';
var control = 'start';
var endTime = 0;
var startTime = 0;

var topIndex = -1;
var rightIndex = 0;
var leftIndex = 0;
var pivot = 0;

var j = 0;
var x = 0;

var numberOfReplacement = 0;
var numberOfComparison = 0;
var endTime = 0;
var startTime = 0;
function setup() {
    if(fr > 0 && recWidth >0)
    {
    createCanvas(windowWidth, windowHeight);
    frameRate(fr);
    quickSpace = new quickSpace();
    quickSpace.setup();

    quickStack = new quickStack();
    quickStack.setup(quickSpace.len());

    startTime = window.performance.now();
    topIndex++;
    quickStack.push(topIndex,0);
    topIndex++;
    quickStack.push(topIndex,quickSpace.len()-1);
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

function draw(){
    
    background(0);
    // noLoop();
    
    if(control2=='topFree')
    {
        if(control == 'start')
        {

            rightIndex = quickStack.pop(topIndex);
            // console.log(topIndex)
            // console.log(quickStack)
            topIndex--;
            leftIndex = quickStack.pop(topIndex);
            topIndex--;
            control = 'pivot';
            j = leftIndex;
            x = quickSpace.at(rightIndex);
            pivot = leftIndex -1;
            quickSpace.selectPivot(rightIndex);
            quickSpace.selectRight(leftIndex);
        }
        

        else if(control == 'pivot')
        {
            if(j <= (rightIndex -1))
            {
                numberOfComparison++;
                if(quickSpace.at(j)<=x)
                {

                    pivot++;
                    quickSpace.swap(pivot,j);
                    numberOfReplacement++;
                }
                j++;
                quickSpace.selectLeft(j);
                
            }
            else
            {
                
                quickSpace.selectLeft(rightIndex);
                quickSpace.swap(pivot+1,rightIndex);
                numberOfReplacement++;
                pivot++;
                quickSpace.selectPivot(pivot);
                
                control = 'leftstack';
            }
            
        }
        else if(control == 'leftstack')
        {
            if(pivot-1> leftIndex)
            {
                topIndex++;
                quickStack.push(topIndex,leftIndex);
                topIndex++;
                quickStack.push(topIndex,pivot-1);
                
                
            }
            control = 'rightstack';
            
        }
        else if(control == 'rightstack')
        {
            if(pivot+1 < rightIndex)
            {
                topIndex++;
                quickStack.push(topIndex,pivot+1);
                topIndex++;
                quickStack.push(topIndex,rightIndex);
                
                
                
            }
            if(topIndex < 0)
            {
                
                control2 = 'topProblem';
            }
            control = 'start';
            quickSpace.releaseAll();
        }
        
        


    }
    else
    {
        noLoop();
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
    text('Number Of Elements: '+ quickSpace.len().toString(), 10, 20);
    quickSpace.show();
    

    
    
}





