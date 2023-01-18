"use strict";
const people = [
  {
    id: 1, name: "小四郎", street: "1", city: "江間", state: "坂東", country: "日本", telephone: "080-1111-1111", birthday: "1163/1/1"
  },
  {
    id: 2, name: "頼朝", street: "1-1", city: "鎌倉", state: "神奈川", country: "日本", telephone: "080-2222-2222", birthday:
      "1147/5/9"
  },
  {
    id: 3, name: "上総介", street: "1-2", city: "上総", state: "千葉", country: "日本", telephone: "080-3333-3333", birthday:
      "1111/1/1"
  },
];


for (var i = 0; i < people.length; i++) {
  var li = document.createElement('li');
  var button = document.createElement('button');

  var userId = people[i].id
  li.id = userId;
  button.textContent = people[i].name;
  button.id = userId;
  button.addEventListener("click", { userId: userId, handleEvent: showProfile })

  document.getElementById('list').appendChild(li);
  document.getElementById(userId).appendChild(button);
}

function showProfile(userId) {
  const user = people.find(({ id }) => id === this.userId)
  const name = document.createElement('p');
  const address = document.createElement('p');
  const telephone = document.createElement('p');
  const birthday = document.createElement('p');

  name.textContent = user.name
  address.textContent = user.country + user.state + user.city + user.street
  telephone.textContent = user.telephone
  birthday.textContent = user.birthday


  var nameElement = document.getElementById('name')

  if (nameElement.childElementCount == 1) {
    nameElement.removeChild(nameElement.firstElementChild);
    var addressElement = document.getElementById('address')
    addressElement.removeChild(addressElement.firstElementChild);
    var telephoneElement = document.getElementById('telephone')
    telephoneElement.removeChild(telephoneElement.firstElementChild);
    var birthdayElement = document.getElementById('birthday')
    birthdayElement.removeChild(birthdayElement.firstElementChild);
  }
  else { console.log('子要素を削除しない') }

  document.getElementById('name').appendChild(name);
  document.getElementById('address').appendChild(address);
  document.getElementById('telephone').appendChild(telephone);
  document.getElementById('birthday').appendChild(birthday);

}