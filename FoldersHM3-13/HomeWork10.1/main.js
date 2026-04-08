let company = {
  sales: [
    { name:"John", salary:1000 },
    { name:"Alice", salary: 600 }
  ],
  development:{
    web: [
      { name:"Peter", salary: 2000 },
      { name:"Alex", salary: 1800 },
    ],
    internals: [
      { name: "Jack", salary: 1300}
    ],
  }
}

function sumSalaries(data) {
  
  if (Array.isArray(data)) {

    return data.reduce((sum, user) => sum + user.salary, 0);
  } else {
    let sum = 0;

    for (let value of Object.values(data)) {
      sum += sumSalaries(value);
    }

    return sum;
  }
}
console.log(sumSalaries(company));