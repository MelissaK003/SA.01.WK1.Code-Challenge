// Student Grade Generator

function grade(marks){
    if (marks > 79 && marks <=100)
    {return 'A';}
    else if (marks >=60 && marks <=79)
    {return 'B'}
    else if (marks >49 && marks <60)
        {return 'C';}
    else if (marks >=40 && marks <=49)
        {return 'D';}
    else if (marks <40 &&  marks >=0)
        {return 'E';}
    else
    {return 'invalid input';}
    }
    // To get student grade input student marks in console.log below 
    // examples marks are [49,4,32,101,67,3]

    console.log(grade(49.4))
    console.log(grade(32))
    console.log(grade(101))
    console.log(grade(67.3))