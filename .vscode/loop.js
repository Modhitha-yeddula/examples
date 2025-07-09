let employees = [
  {"id":1,"first_name":"David","email":"dpiff0@seattletimes.com","gender":"Male"},
  {"id":2,"first_name":"Jerry","email":"jdaintier1@yandex.ru","gender":"Male"},
  {"id":3,"first_name":"Kingsly","email":"kmolnar2@geocities.jp","gender":"Male"},
  {"id":4,"first_name":"Crawford","email":"charsant3@ow.ly","gender":"Male"},
  {"id":5,"first_name":"Elissa","email":"echainey4@microsoft.com","gender":"Female"},
  {"id":6,"first_name":"Vic","email":"vwegner5@washington.edu","gender":"Male"},
  {"id":7,"first_name":"Almira","email":"abrennon6@dailymotion.com","gender":"Female"},
  {"id":8,"first_name":"Ricardo","email":"rveltman7@army.mil","gender":"Male"},
  {"id":9,"first_name":"Beulah","email":"bmaunder8@about.me","gender":"Female"},
  {"id":10,"first_name":"Skip","email":"smcivor9@berkeley.edu","gender":"Male"},
  {"id":11,"first_name":"Quint","email":"qschubarta@mit.edu","gender":"Male"},
  {"id":12,"first_name":"Tate","email":"ttonryb@tiny.cc","gender":"Female"},
  {"id":13,"first_name":"Jacobo","email":"jlissandrec@netlog.com","gender":"Male"},
  {"id":14,"first_name":"Camilla","email":"cmolesd@360.cn","gender":"Female"},
  {"id":15,"first_name":"Gram","email":"gpinxtone@mediafire.com","gender":"Male"},
  {"id":16,"first_name":"Bernard","email":"binnettf@t-online.de","gender":"Male"},
  {"id":17,"first_name":"Alejandro","email":"acyplerg@blinklist.com","gender":"Male"},
  {"id":18,"first_name":"Johny","email":"jchelnamh@cbc.ca","gender":"Male"},
  {"id":19,"first_name":"Marco","email":"mloughtoni@pcworld.com","gender":"Male"},
  {"id":20,"first_name":"Ammamaria","email":"ashalcrasj@comsenz.com","gender":"Female"}
];

let no_male_employees = 0;

for (let i = 0; i < employees.length; i++) {
  if (employees[i].gender === 'Male') {
    no_male_employees++;
  }
}

console.log("Number of male employees:", no_male_employees);