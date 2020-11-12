const img_1 = document.getElementById('i1');
const img_2 = document.getElementById('i2');
const img_3 = document.getElementById('i3');
const img_4 = document.getElementById('i4');
const img_5 = document.getElementById('i5');

let count = 0;

const slides = () => {
    images = [img_1, img_2, img_3, img_4, img_5];
    for(elements of images)
    {
        elements.style.display = 'none';
    }
    images[count].style.display = 'inline-block';
    count == images.length-1 ? count = 0 : count++;
    setTimeout(slides, 5000);
}

slides();

let user = document.getElementById('p/u/e');
let pass = document.getElementById('password');
let submit = document.getElementById('submit');

let show = document.getElementById('show');

show.addEventListener('click', () => {
    if (pass.type === 'password') {
        pass.type = 'text';
        show.innerHTML = 'Hide';
    } else {
        pass.type = 'password';
        show.innerHTML = 'Show';
    }
});

show.addEventListener('mousedown', colorLight);
show.addEventListener('mouseup', colorDark);

function colorLight() {
    show.style.color = 'rgb(100, 100, 100)';
}

function colorDark() {
    show.style.color = 'rgb(0, 0, 0)';
}

window.onload = () => {
    submit.disabled = true;
    submit.style.backgroundColor = 'rgb(153, 219, 255)';
    show.style.display = 'none';
}

user.addEventListener('input', toggleDisable);
pass.addEventListener('input', toggleDisable);

pass.addEventListener('input', () => {
    if (pass.value.length == "") {
        show.style.display = 'none';
    } else {
        show.style.display = 'block';
    }
});

function toggleDisable() {
    if (user.value.length < 6 || pass.value.length == "")
    {
        submit.disabled = true;
        submit.style.backgroundColor = 'rgb(178, 223, 252)';
    } else {
        submit.disabled = false;
        submit.style.backgroundColor = 'rgb(0,149,246)';
    }
}

let year = new Date();
document.getElementById('year').innerHTML = year.getFullYear();
