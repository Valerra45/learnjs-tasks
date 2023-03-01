function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); // Каким будет результат?
  // Ошибка. this от function makeUser()  