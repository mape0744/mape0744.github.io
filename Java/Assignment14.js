//Problem 1
console.log("_________1__________");
let sam = {
  "name": "Sam",
  "department": "Tech",
  "designation": "Manager",
  "salary": 40000,
  "raiseEligibility": true
}

let mary = {
  "name": "Mary",
  "department": "Finance",
  "designation": "Trainee",
  "salary": 18500,
  "raiseEligibility": true
}

let bill = {
  "name": "Bill",
  "department": "HR",
  "designation": "Executive",
  "salary": 21200,
  "raiseEligibility": false
}
console.log(sam, mary, bill);

//Problem2
console.log("_________2__________");

let techStars = {
  "companyName":"Tech Stars",
  "website":"www.techstars.site",
  "employees": [sam, mary, bill]
}
console.log(techStars);

//Problem3
console.log("_________3__________");
let anna = {
  "name": "Anna",
  "department": "Tech",
  "designation": "Executive",
  "salary": 25600,
  "raiseEligibility": false
}
techStars.employees.push(anna);
console.log(anna, techStars);

//Problem4
console.log("_________4__________");
let total = 0;
for(let i in techStars.employees){
  total += techStars.employees[i].salary;
}
console.log(total);

//Problem5
console.log("_________5__________");
function updateSalary(company){
  for(let i in company.employees){
    if(company.employees[i].raiseEligibility === true){
      company.employees[i].salary *= 1.1;
      company.employees[i].raiseEligibility = false;
    }
  }
}

updateSalary(techStars);
console.log(techStars);

//Problem6
console.log("_________6__________");
arr = [anna,sam];
console.log(techStars);
for(let i in techStars.employees){
    techStars.employees[i].workfh = arr.includes(techStars.employees[i]);
}
console.log(techStars);
