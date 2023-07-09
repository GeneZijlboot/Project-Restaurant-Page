export function Home(){
    const Buttons = document.querySelectorAll('#Buttons');

    Buttons.forEach(Element => {
        Element.addEventListener('click', () => {
            console.log('hello bitch');
        })
    });
}