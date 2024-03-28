let firstAnimal = document.getElementById('btn1');
let firstPage = document.getElementById('animal_1');
let backPage_1 = document.getElementById('animal_11');
let closeBtn_1 = document.getElementById('btn11');
firstAnimal.addEventListener('click', function () {
    firstPage.style.display = 'none';
    backPage_1.style.display = 'block';

})
closeBtn_1.addEventListener('click', function () {
    firstPage.style.display = 'block';
    backPage_1.style.display = 'none';
})



let secAnimal = document.getElementById('btn2');
let secPage = document.getElementById('animal_2');
let backPage_2 = document.getElementById('animal_22');
let closeBtn_2 = document.getElementById('btn22');
secAnimal.addEventListener('click', function () {
    secPage.style.display = 'none';
    backPage_2.style.display = 'block';
})
closeBtn_2.addEventListener('click', function () {
    secPage.style.display = 'block';
    backPage_2.style.display = 'none';
})


let thridAnimal = document.getElementById('btn3');
let thirdPage = document.getElementById('animal_3');
let backPage_3 = document.getElementById('animal_33');
let closeBtn_3 = document.getElementById('btn33');
thridAnimal.addEventListener('click', function () {
    thirdPage.style.display = 'none';
    backPage_3.style.display = 'block';
})
closeBtn_3.addEventListener('click', function () {
    thirdPage.style.display = 'block';
    backPage_3.style.display = 'none';
})


let fourthAnimal = document.getElementById('btn4');
let fourthPage = document.getElementById('animal_4');
let backPage_4 = document.getElementById('animal_44');
let closeBtn_4 = document.getElementById('btn44');
fourthAnimal.addEventListener('click', function () {
    fourthPage.style.display = 'none';
    backPage_4.style.display = 'block';
})
closeBtn_4.addEventListener('click', function () {
    fourthPage.style.display = 'block';
    backPage_4.style.display = 'none';
})


let fifthAnimal = document.getElementById('btn5');
let fifthPage = document.getElementById('animal_5');
let backPage_5 = document.getElementById('animal_55');
let closeBtn_5 = document.getElementById('btn55');
fifthAnimal.addEventListener('click', function () {
    fifthPage.style.display = 'none';
    backPage_5.style.display = 'block';
})
closeBtn_5.addEventListener('click', function () {
    fifthPage.style.display = 'block';
    backPage_5.style.display = 'none';
})


let sixthAnimal = document.getElementById('btn6');
let sixthPage = document.getElementById('animal_6');
let backPage_6 = document.getElementById('animal_66');
let closeBtn_6 = document.getElementById('btn66');
sixthAnimal.addEventListener('click', function () {
    sixthPage.style.display = 'none';
    backPage_6.style.display = 'block';
})
closeBtn_6.addEventListener('click', function () {
    sixthPage.style.display = 'block';
    backPage_6.style.display = 'none';
})
let isRotated = false;
let navPic_1 = document.getElementById('navPic_1')
navPic_1.addEventListener('click', function () {
    if (!isRotated) {
        navPic_1.style.transform = 'rotate(20deg)';
        isRotated = true;
    } else {
        navPic_1.style.transform = 'rotate(0deg)';
        isRotated = false;
    }
});
let isRotate = false;
let navPic_2 = document.getElementById('navPic_2')
navPic_2.addEventListener('click', function () {
    if (!isRotate) {
        navPic_2.style.transform = 'rotate(20deg)';
        isRotate = true;
    } else {
        navPic_2.style.transform = 'rotate(0deg)';
        isRotate = false;
    }
});


