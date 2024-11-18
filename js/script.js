
const openMenu = (menu) => {
    const ExpansionMenu = document.getElementsByClassName("expansionMenu")[0];
    const BackDrop = document.getElementsByClassName("backdrop")[0];
    const Header = document.getElementsByClassName("header")[0];
    const Main = document.getElementsByClassName("main")[0];

    BackDrop.classList.toggle("h-full");
    ExpansionMenu.classList.toggle("h-full");
    menu.classList.toggle("open");

    if (menu.classList.contains("open")) {
        Header.classList.add("fixed", "left-0", "right-0", "top-0", "z-30");
        Main.classList.add("mt-24");
    }
    else {
        Header.classList.remove("fixed", "left-0", "right-0", "top-0", "z-30");
        Main.classList.remove("mt-24");
    }
};
