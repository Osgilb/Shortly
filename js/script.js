
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

const input = document.getElementById('input')
const form = document.getElementById('form')
const errMsg = document.getElementById('error')

form.addEventListener('submit', formSubmit)

// Validate a URL
function validURL(str) {
    var pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
        'i'
    )
    return !!pattern.test(str)
}

function formSubmit(e) {
    e.preventDefault()

    if (input.value === '') {
        errMsg.innerHTML = 'Please enter something'
        input.classList.add('border-red-400')
    } else if (!validURL(input.value)) {
        errMsg.innerHTML = 'Please input a valid URL'
        input.classList.add('border-red-400')
    } else {
        errMsg.innerHTML = ''
        input.classList.remove('border-red-400')
        alert('Your link is shorten successfully!')
    }
}
