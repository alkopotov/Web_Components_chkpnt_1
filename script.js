

const template = document.getElementById('card');
const target = document.querySelectorAll('.row')[0];


function createCard(template, target, data) {
  const card = template.content.cloneNode(true);
  const cardContent = card.firstElementChild;
  cardContent.children[0].src = data.link;
  cardContent.children[1].children[0].innerText = data.name;
  cardContent.children[1].children[1].innerText = data.company;
  cardContent.children[1].children[2].innerText = data.position;
  cardContent.children[2].children[0].innerHTML = `<b>Дата рождения:</b> ${data.birthDate}`
  cardContent.children[2].children[1].innerHTML = `<b>Образование:</b> ${data.education}`;
  cardContent.children[2].children[2].innerHTML = `<b>Ключевые компетенции:</b> ${data.skills}`;
  cardContent.children[3].children[0].innerText = data.phone;
  cardContent.children[3].children[1].innerText = data.email;
  target.append(card)
}

USERDATA.forEach(elem => createCard(template, target, elem))
