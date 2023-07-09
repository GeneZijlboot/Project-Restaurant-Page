import { Home } from "./Home";
import { Menu } from "./Menu";
import { Contact } from "./Contact";

export function Website(){
    //contents of main page
    const Content = document.querySelector('#Content');
    const MainPage = document.createElement('div');
    const LeftSide = document.createElement('div');
    const Img = document.createElement('img');
    const RightSide = document.createElement('div');
    const TaskBar = document.createElement('div');
    const MainText = document.createElement('div');
    const HomeBtn = document.createElement('button');
    const MenuBtn = document.createElement('button');
    const ContactBtn = document.createElement('button');
    const Delicious = document.createElement('p');
    const Parmigiano = document.createElement('p');
    const txt = document.createElement('p');
    const OrderBtn = document.createElement('button');
    const MadeBy = document.createElement('div');
    const Copyright = document.createElement('a');
    MainPage.id = 'MainPage';
    Delicious.id = 'Delicious';
    Delicious.textContent = 'Delicious';
    Parmigiano.id = 'Parmigiano';
    Parmigiano.textContent = 'Parmigiano';
    txt.id = 'txt';
    txt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi minus iusto<br>
    veniam magni numquam assumenda nesciunt non rem quas sequi necessitatibus tempore ullam<br>
    autem quam nulla sit pariatur Voluptas facilis`;
    OrderBtn.id = 'OrderBtn';
    OrderBtn.textContent = 'Order Now';
    HomeBtn.id = 'Buttons';
    MenuBtn.id = 'Buttons';
    ContactBtn.id = 'Buttons';
    HomeBtn.textContent = 'Home';
    MenuBtn.textContent = 'Menu';
    ContactBtn.textContent = 'Contact';
    MainText.id = 'MainText';
    TaskBar.id = 'TaskBar';
    RightSide.id = 'RightSide';
    LeftSide.id = 'LeftSide';
    Img.src = './images/Food.png';
    Copyright.textContent = 'Copyright © Gene Zijlmans';
    Copyright.href = 'https://github.com/GeneZijlboot/Project-Restaurant-Page';
    Content.appendChild(MainPage);
    MainPage.appendChild(LeftSide);
    MainPage.appendChild(RightSide);
    LeftSide.appendChild(Img);
    RightSide.appendChild(TaskBar);
    RightSide.appendChild(MainText);
    TaskBar.appendChild(HomeBtn);
    TaskBar.appendChild(MenuBtn);
    TaskBar.appendChild(ContactBtn);
    MainText.appendChild(Delicious);
    MainText.appendChild(Parmigiano);
    MainText.appendChild(txt);
    MainText.appendChild(OrderBtn);
    MainText.appendChild(MadeBy);
    MadeBy.appendChild(Copyright);

    //adding EventListener for the buttons
    HomeBtn.addEventListener('click', () => {
        Content.removeChild(MainPage);
        Home();
    })

    MenuBtn.addEventListener('click', () => {
        Content.removeChild(MainPage);
        Menu();
    })

    ContactBtn.addEventListener('click', () => {
        Content.removeChild(MainPage);
        Contact();
    })

    OrderBtn.addEventListener('click', () => {
        Content.removeChild(MainPage);
        Menu();
    })
}