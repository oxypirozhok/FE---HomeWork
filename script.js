// 1)Создайте параграф и одну кнопку. Добавьте стили для этих элементов используя javascript.Сделайте так, чтобы при клике на кнопку исчезал параграф , а при повторном клике появлялся обратно.

const body = document.querySelector('body');

const paragraf = document.createElement('p');
paragraf.innerText = "I'll be a cool developer";
paragraf.classList.add('pvisible');
body.append(paragraf);

const button = document.createElement('button');
button.innerText = "ACCEPT";
button.classList.add('button');
body.append(button);

button.onclick = () => {

//   // variant #1
//   let empty = "";
//   if (paragraf.textContent !== empty){
//     paragraf.innerText = empty;
//   }else{
//     paragraf.innerText = "I'll be a cool developer";
//   } 

  //variant #2

  if(paragraf.className === "pvisible"){
    paragraf.classList.replace('pvisible','pinvisible');
   }else{
   paragraf.classList.replace('pinvisible','pvisible');
  }
}

//2)Создайте массив, содержащий названия цветов. На основе этого массива создайте список. При наведении на один из пунктов должен поменяться цвет фона всего документа на данный цвет.

// const colors = ['red','orange', 'yellow', 'green', 'blue', 'purple', ];
// const body = document.querySelector('body');


//   function rainbowList (arr){
//   for (let key in arr){
//   let div = document.createElement('div');
//   div.classList.add('block1');
//   div.innerText = arr[key];
//   div.style.background = arr[key];
//   document.body.append(div);

//   div.onmouseover = () =>{
//     body.style.backgroundColor = div.textContent;
//   }
// }
 
// } rainbowList(colors);

//3)Создайте массив с Вашими любимыми фильмами. Напишите цикл, который создает заголовки на основе этого массива. При клике на заголовок внизу появляется краткое описание данного фильма.

// const harry = [
//   {
//     title: "Harry Potter and the Philosopher's Stone",
//     image: "https://cdn.feedingtrends.com/old-images/1600538349article_img.jpg",
//     content: "Harry Potter and the Philosopher's Stone (released in the United States, India and the Philippines as Harry Potter and the Sorcerer's Stone) is a 2001 fantasy film directed by Chris Columbus from a screenplay by Steve Kloves, based on the 1997 novel of the same name by J. K. Rowling. It is the first instalment in the Harry Potter film series. The film stars Daniel Radcliffe as Harry Potter, with Rupert Grint as Ron Weasley, and Emma Watson as Hermione Granger. Its story follows Harry's first year at Hogwarts School of Witchcraft and Wizardry as he discovers that he is a famous wizard and begins his formal wizarding education.",
//   },
//   {
//     title: "Harry Potter and the Chamber of Secrets",
//     image: "https://raisingchildren.net.au/__data/assets/image/0021/51447/harry-potter-and-the-chamber-of-secrets.jpg",
//     content: "Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the Chamber of Secrets has been opened and that the 'heir of Slytherin' would kill all pupils who do not come from all-magical families. These threats are found after attacks that leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks.",
//   },
//   {
//     title: "Harry Potter and the Prisoner of Azkaban",
//     image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/5cab403b71444056c7ef11d1e299d46b59716e75a62fa879c019ce957db164da._RI_V_TTW_.jpg",
//     content: "Harry Potter and the Prisoner of Azkaban is a fantasy novel written by British author J. K. Rowling and is the third in the Harry Potter series. The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ronald Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban, the wizard prison, believed to be one of Lord Voldemort's old allies.",
//   },
//   {
//     title: "Harry Potter and the Goblet of Fire",
//     image: "https://raisingchildren.net.au/__data/assets/image/0020/51437/harry-potter-and-the-goblet-of-fire.jpg",
//     content: "Harry Potter and the Goblet of Fire is a 2005 fantasy film directed by Mike Newell from a screenplay by Steve Kloves, based on the 2000 novel of the same name by J.K. Rowling. It is the sequel to Harry Potter and the Prisoner of Azkaban (2004) and the fourth instalment in the Harry Potter film series. The film stars Daniel Radcliffe as Harry Potter, alongside Rupert Grint and Emma Watson as Harry's best friends Ron Weasley and Hermione Granger respectively. Its story follows Harry's fourth year at Hogwarts as he is chosen by the Goblet of Fire to compete in the Triwizard Tournament.",

//   },
//   {
//     title: "Harry Potter and the Order of the Phoenix",
//     image: "https://image.tmdb.org/t/p/w500/5aOyriWkPec0zUDxmHFP9qMmBaj.jpg",
//     content: "Harry Potter and the Order of the Phoenix is a 2007 fantasy film directed by David Yates from a screenplay by Michael Goldenberg, based on the 2003 novel of the same name by J. K. Rowling. It is the sequel to Harry Potter and the Goblet of Fire (2005) and the fifth instalment in the Harry Potter film series. The film stars Daniel Radcliffe as Harry Potter, alongside Rupert Grint and Emma Watson as Harry's best friends Ron Weasley and Hermione Granger. Its story follows Harry's fifth year at Hogwarts School of Witchcraft and Wizardry as the Ministry of Magic is in denial of Lord Voldemort's return.",
//   },
// ]

// const body = document.querySelector('body');
// const wrapper = document.createElement('div');
// wrapper.classList.add('wrap');


// function list (arr){
//   for (let key in arr){
//     const div = document.createElement("div");
//      div.classList.add('block');

//     const h2 = document.createElement('h2');
//     h2.innerText = arr[key].title;
//     h2.classList.add('h2');

    
     
//     const img = document.createElement('img');
//     img.setAttribute('src', `${arr[key].image}`);
//     img.classList.add('image');
   

//     div.append(h2, img);
//     wrapper.append (div);
    

//     h2.onclick = () =>{
//       let p = document.createElement('p');
//     p.innerText = arr[key].content;
    
//     div.append(p);

//     }
//     body.append(wrapper);

//   }
// }

// list (harry);






