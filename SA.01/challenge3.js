// Net Salary Calculator
// Calculation of NSSF pension - Employee contribution only
function NSSF(GrossSalary){
if (GrossSalary <= 6000)
{return GrossSalary*6/100}

else if (GrossSalary > 6000 && GrossSalary <=18000)
{return ((GrossSalary-6000)*6/100) + 360}

else
{return 1080} // maximum contribution
}

// Calculation of PAYE
function PAYE(taxableincome){
if (taxableincome >=0 && taxableincome <=24000)
    {return 0}
else if (taxableincome > 24000 && taxableincome<= 32333)
 {return ((taxableincome-24000)*25/100)+ 2400}

else if (taxableincome >32333 && taxableincome <= 500000)
    {return ((taxableincome-32333)*30/100) + 2400 + 2083.25}

else if (taxableincome > 500000 && taxableincome <= 800000)
    {return ((taxableincome-500000)*32.5/100) + 2400 + 2083.5 + 140300.1}

else if (taxableincome > 800000)
    {return ((taxableincome-800000)*35/100) + 2400 + 2083.5 + 140300.1 + 97500}

}
 
// Calculation of NHIF contribution
function NHIF(GrossSalary){
if (GrossSalary <6000)
{return 150}

else if (GrossSalary >=6000 && GrossSalary <8000)
{return 300}

else if (GrossSalary >=8000 && GrossSalary <12000)
    {return 400}

else if (GrossSalary >=12000 && GrossSalary <15000)
    {return 500}

else if (GrossSalary >=15000 && GrossSalary <20000)
    {return 600}

else if (GrossSalary >=20000 && GrossSalary <25000)
        {return 750}

else if (GrossSalary >=25000 && GrossSalary <30000)
    {return 850}

else if (GrossSalary >=30000 && GrossSalary <35000)
    {return 900}

else if (GrossSalary >=35000 && GrossSalary <40000)
    {return 950}

else if (GrossSalary >=40000 && GrossSalary <45000)
    {return 1000}

else if (GrossSalary >=45000 && GrossSalary <50000)
    {return 1100}

else if (GrossSalary >=50000 && GrossSalary <60000)
    {return 1200}

else if (GrossSalary >=60000 && GrossSalary <70000)
    {return 1300}

else if (GrossSalary >=70000 && GrossSalary <80000)
    {return 1400}

else if (GrossSalary >=80000 && GrossSalary <90000)
    {return 1500}

else if (GrossSalary >=90000 && GrossSalary <100000)
    {return 1600}

else if (GrossSalary >=100000)
    {return 1700}
}

function PersonalRelief(GrossSalary){
if (GrossSalary <= 24000)
{return 0}
else 
{return 2400}
}

function netsalary(GrossSalary){
const nssf = NSSF(GrossSalary);  
const taxableincome = (GrossSalary - nssf)   
const paye = PAYE(taxableincome)
const nhif = NHIF(GrossSalary)
const personalrelief = PersonalRelief(GrossSalary)
const deductions = (paye + nhif+ nssf)
const netsalarycalc = (GrossSalary - deductions + personalrelief)
{return netsalarycalc}
}

// EXAMPLES
console.log(NSSF(20000));
console.log(NHIF(20000));
console.log(PAYE(20000));
console.log(PersonalRelief(20000));
console.log(netsalary(20000));

console.log(netsalary(1000000));

console.log(netsalary(66000));











