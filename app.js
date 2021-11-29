
const text = document.querySelector('.demoDate')

const now2 = new Date().getTime();
const countdownDate2 = new Date('January 4, 2022 21:30:00').getTime();
 console.log(now2, countdownDate2);



function getChrono(){

const now = new Date().getTime();
const countdownDate = new Date('January 4, 2022 21:30:00').getTime();

const distanceBase = countdownDate - now;

const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
const hours = Math.floor((distanceBase % (1000 * 60 * 60 *24)) / (1000 * 60 *60));
const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000*60));
const seconds = Math.floor((distanceBase % (1000 * 60)) / 1000);
    

text.innerText = ` ${days}j ${hours}h ${minutes}m ${seconds}s `;


if (distanceBase < 0){
        let ending = document.querySelector('.nav-list');
        ending.classList.add("fin");
        let nop = document.querySelector('.demoDate');
        nop.classList.add("fini");
        let audi0 = document.querySelector('audio');
        audi0.play();

                setTimeout(oui, 4500);
                clearInterval(countDownInterval);
       
        



        
}






 			




}

getChrono()

const countDownInterval = setInterval(() => {

	getChrono()
}, 1000);


