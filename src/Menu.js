import { Contact } from "./Contact";
import { Website } from "./Website";
export function Menu(){
    const Content = document.querySelector('#Content');
    const Menu = document.createElement('div');
    const TaskBarMenu = document.createElement('div');
    const HomeBtn = document.createElement('button');
    const ContactBtn = document.createElement('button');
    const List = document.createElement('div');
    const emptyleft = document.createElement('div');
    const emptyright = document.createElement('div');
    const MadeByMenu = document.createElement('div');
    const copyright = document.createElement('a');
    const center = document.createElement('div');

    const MenuItem1 = document.createElement('div');
    const img1 = document.createElement('img');
    const FoodText1 = document.createElement('p');

    const MenuItem2 = document.createElement('div');
    const img2 = document.createElement('img');
    const FoodText2 = document.createElement('p');

    const MenuItem3 = document.createElement('div');
    const img3 = document.createElement('img');
    const FoodText3 = document.createElement('p');

    const MenuItem4 = document.createElement('div');
    const img4 = document.createElement('img');
    const FoodText4 = document.createElement('p');

    const MenuItem5 = document.createElement('div');
    const img5 = document.createElement('img');
    const FoodText5 = document.createElement('p');

    const MenuItem6 = document.createElement('div');
    const img6 = document.createElement('img');
    const FoodText6 = document.createElement('p');

    Menu.id = 'Menu';
    TaskBarMenu.id = 'TaskBarMenu';
    HomeBtn.id = 'Buttons';
    ContactBtn.id = 'Buttons';
    List.id = 'List';
    emptyleft.id = 'emptyleft';
    center.id = 'center';
    emptyright.id = 'emptyright';
    MadeByMenu.id = 'MadeByMenu';

    MenuItem1.id = 'MenuItem';
    img1.id = 'MenuImg';
    FoodText1.id = 'FoodText';

    MenuItem2.id = 'MenuItem';
    img2.id = 'MenuImg';
    FoodText2.id = 'FoodText';

    MenuItem3.id = 'MenuItem';
    img3.id = 'MenuImg';
    FoodText3.id = 'FoodText';

    MenuItem4.id = 'MenuItem';
    img4.id = 'MenuImg';
    FoodText4.id = 'FoodText';

    MenuItem5.id = 'MenuItem';
    img5.id = 'MenuImg';
    FoodText5.id = 'FoodText';

    MenuItem6.id = 'MenuItem';
    img6.id = 'MenuImg';
    FoodText6.id = 'FoodText';


    HomeBtn.textContent = 'Home';
    ContactBtn.textContent = 'Contact';
    copyright.textContent = 'Copyright © Gene Zijlmans';

    FoodText1.textContent = 'Baklava';
    FoodText2.textContent = 'Tacos';
    FoodText3.textContent = 'Piza';
    FoodText4.textContent = 'Spagheti';
    FoodText5.textContent = 'Nasi';
    FoodText6.textContent = 'Wrap';

    copyright.href = 'https://github.com/GeneZijlboot/Project-Restaurant-Page';
    img1.src = './images/Baklava.png';
    img2.src = './images/Taco.png';
    img3.src = './images/Piza.png';
    img4.src = './images/spagheti.png';
    img5.src = './images/nasi.png';
    img6.src = './images/wrap.png';

    Content.appendChild(Menu);
    Menu.appendChild(TaskBarMenu);
    TaskBarMenu.appendChild(HomeBtn);
    TaskBarMenu.appendChild(ContactBtn);
    Menu.appendChild(List);
    List.appendChild(emptyleft);
    List.appendChild(center);
    List.appendChild(emptyright);
    Menu.appendChild(MadeByMenu);
    MadeByMenu.appendChild(copyright);
    center.appendChild(MenuItem1);
    center.appendChild(MenuItem2);
    center.appendChild(MenuItem3);
    center.appendChild(MenuItem4);
    center.appendChild(MenuItem5);
    center.appendChild(MenuItem6);

    MenuItem1.appendChild(img1);
    MenuItem1.appendChild(FoodText1);

    MenuItem2.appendChild(img2);
    MenuItem2.appendChild(FoodText2);

    MenuItem3.appendChild(img3);
    MenuItem3.appendChild(FoodText3);

    MenuItem4.appendChild(img4);
    MenuItem4.appendChild(FoodText4);

    MenuItem5.appendChild(img5);
    MenuItem5.appendChild(FoodText5);

    MenuItem6.appendChild(img6);
    MenuItem6.appendChild(FoodText6);

    ContactBtn.addEventListener('click', () => {
        Content.removeChild(Menu);
        Contact();
    })

    HomeBtn.addEventListener('click', () => {
        Content.removeChild(Menu);
        Website();
    })
}