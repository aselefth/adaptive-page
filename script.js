const menuBtn = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');
const profile = document.querySelector('.profile');
const header =document.querySelector('header');


menuBtn.addEventListener('click', () => {
    header.classList.toggle('active');
    profile.classList.toggle('unhide');
    navigation.classList.toggle('unhide');
});
