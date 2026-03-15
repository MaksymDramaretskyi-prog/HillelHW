const userData = {
  name: "Jack",
  age: 19,
  city: "London",
  isAdmin: true,
  email: "jack@gmail.com",
  phone: "+44 123 456 789",
  job: "developer",
  hobbies: ["football", "music", "travel"],
  address: {
    street: "Baker Street",
    house: 21
  },

  showUserData() {
    for (const key in userData) {
      console.log(`Key: ${key}, Value:`, userData[key]);
    }
  }
}


userData.showUserData();