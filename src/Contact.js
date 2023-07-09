import { Menu } from "./Menu";
import { Website } from "./Website";

export function Contact(){
    const Content = document.querySelector('#Content');
    const TaskBarMenu = document.createElement('div');
    const Contacttab = document.createElement('div');
    const HomeBtn = document.createElement('button');
    const MenuBtn = document.createElement('button');
    const information = document.createElement('div');
    const Left = document.createElement('div');
    const Right = document.createElement('div');
    const MapImg = document.createElement('img');
    const MadeByContact = document.createElement('div');
    const Copyright = document.createElement('a');
    const First = document.createElement('div');
    const Adress = document.createElement('p');
    const FirstTxt = document.createElement('p');
    const Second = document.createElement('div');
    const Hours = document.createElement('p');
    const SecondTxt = document.createElement('p');
    const Third = document.createElement('div');
    const Contact = document.createElement('p');
    const ThirdTxt = document.createElement('p');

    Contacttab.id = 'Contacttab';
    TaskBarMenu.id = 'TaskBarMenu';
    HomeBtn.id = 'Buttons';
    MenuBtn.id = 'Buttons';
    information.id = 'information';
    Left.id = 'Left';
    Right.id = 'Right';
    MapImg.id = 'MapImg';
    MadeByContact.id = 'MadeByContact';
    Adress.id = 'Adress';
    Hours.id = 'Hours';
    Contact.id = 'Contact';

    HomeBtn.textContent = "Home";
    MenuBtn.textContent = "Menu";
    Copyright.textContent = "Copyright © Gene Zijlmans";
    Adress.textContent = 'Adress';
    Hours.textContent = 'Hours';
    Contact.textContent = 'Contact';

    FirstTxt.innerHTML = `123 Fake Street<br>
    Vancouver, BC<br>
    V06 0E1`;

    SecondTxt.innerHTML = `Tuesday: 12:00 - 22:00<br>
    Wednesday: 12:00 - 22:00<br>
    Thursday: 12:00 - 22:00<br>
    Friday: 12:00 - 23:30<br>
    Saturday: 12:00 - 23:30<br>
    Sunday: 12:00 - 23:30`;

    ThirdTxt.innerHTML = `123-456-7890<br>
    lepizz@notarealemail.com`;

    Copyright.href = 'https://github.com/GeneZijlboot/Project-Restaurant-Page';

    MapImg.src = "./images/Parmigiano.png";

    Content.appendChild(Contacttab);
    Contacttab.appendChild(TaskBarMenu);
    TaskBarMenu.appendChild(HomeBtn);
    TaskBarMenu.appendChild(MenuBtn);
    Contacttab.appendChild(information);
    information.appendChild(Left);
    information.appendChild(Right);
    Right.appendChild(MapImg);
    Contacttab.appendChild(MadeByContact);
    MadeByContact.appendChild(Copyright);
    Left.appendChild(First);
    First.appendChild(Adress);
    First.appendChild(FirstTxt);
    Left.appendChild(Second);
    Second.appendChild(Hours);
    Second.appendChild(SecondTxt);
    Left.appendChild(Third);
    Third.appendChild(Contact);
    Third.appendChild(ThirdTxt);

    HomeBtn.addEventListener('click', () => {
        Content.removeChild(Contacttab);
        Website();
    })

    MenuBtn.addEventListener('click', () => {
        Content.removeChild(Contacttab);
        Menu();
    })
}