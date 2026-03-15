const teamListData = {

  juniorDevelopers:[
    {
      name: "Jack",
      age: 19,
      city: "London",
      isAdmin: true,
      email: "jack@gmail.com",
      phone: "+44 123 456 789",
      job: "developer",
    },
    {
      name: "Pol",
      age: 21,
      city: "Oslo",
      isAdmin: false,
      email: "Pol@gmail.com",
      phone: "+44 132 436 589",
      job: "developer",
    }
  ],

  findJuniorDeveloper(name) {
    const resultDev = teamListData.juniorDevelopers.find(juniorDevelopers => juniorDevelopers.name === name);
    return resultDev ? resultDev : " Developer not found!"
  },

  addContactToList(name, age, email, phone) {
    teamListData.juniorDevelopers.push({name, age, phone, email});
  }
}
 
teamListData.addContactToList("Dima", 76, "Dima@gmail.com", "+44 543 095 454");
console.log(teamListData.findJuniorDeveloper("Maxim"));
console.log(teamListData);