// Speed Detector 

function SpeedDetector(speed)
{const speedlimit = 70;
const maxdemeritpoints = 12;

// Calculates the number of demerit points 
const points = ((speed-speedlimit)/5) 

// Rounds up the demerit points to whole number
const demeritpoints = (Math.ceil(points)); 

if (speed <= speedlimit)
{return 'Ok'}
else if (demeritpoints < maxdemeritpoints)
{return demeritpoints}
else
{return 'License Suspended'}

}

console.log(SpeedDetector(82));
console.log(SpeedDetector(42));
console.log(SpeedDetector(160));

