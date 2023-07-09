import { Home } from "./Home";
import { Menu } from "./Menu";
import { Contact } from "./Contact";

export function Website(){
    //contents of main page
    const Content = document.querySelector('#Content');
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
    Content.appendChild(LeftSide);
    Content.appendChild(RightSide);
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
    /*
    Home();
    Menu();
    Contact();

    addEventListener('click', Home) //hierin staat de dommanipulation voor Home
    */
}