

let loggaInCounter = 0;
let inloggningOpen = false;

const loggaInRuta = function () {

    let loggaIn = document.getElementById("logga-inRuta");
    let headers =document.querySelectorAll('header');
    if(loggaInCounter %2 === 0) {
        loggaIn.style.display = 'block';
        inloggningOpen = true;
        setTimeout(() => {
            loggaIn.classList.add('show');
            if  (loggaIn.classList.contains('show')) {
                headers.forEach(header => header.classList.add('visa'));
            }
        }, 10);
    }
    else {
        loggaIn.classList.remove('show');
        inloggningOpen= false;
        setTimeout(() => {
            loggaIn.style.display = 'none';
            if  (!loggaIn.classList.contains('show')) {
                headers.forEach(header => header.classList.remove('visa'));
            }
        }, 300);
    }
    loggaInCounter++;
}
document.getElementById('logga-in').addEventListener('click',loggaInRuta);


let appear = document.querySelectorAll('.appear');
let cb = function (entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            setTimeout( () => {
                entry.target.classList.add('inView')
            }, 100)

        } else {
            entry.target.classList.remove('inView');
        }
    });
}
const io =  new IntersectionObserver(cb);
for(let i = 0; i < appear.length; ++i) {
    io.observe(appear[i]);
}

let activeGym = null;
document.querySelectorAll('.gym').forEach((gym) => {
    gym.addEventListener('click', function() {
        if(activeGym!== this) {
            if(activeGym) {
                activeGym.classList.remove('active');
            }
            this.classList.add('active');
            activeGym= this;
        }

    })
})


let threshold = 0;
let homeHeader = document.querySelector('body#home header');
let otherHeaders = document.querySelectorAll('header:not(body#home header)');

let updateThreshold = function(){
    if(window.matchMedia("(max-width: 500px)").matches) {
        threshold =0.6 * window.innerWidth;
    }
    else {
        threshold = 0.398 * window.innerWidth;
    }
};
updateThreshold();
window.addEventListener('resize',updateThreshold);

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;

    if(homeHeader && !inloggningOpen) {

        if (scrollTop >threshold) {
            homeHeader.classList.add("visa");
        } else {
            homeHeader.classList.remove("visa");
        }

    }
    if(!inloggningOpen) {
        otherHeaders.forEach(header => {
            if (scrollTop > 0.172 * window.innerWidth) {
                header.classList.add("visa");
            } else {
                header.classList.remove("visa");
            }
        });
    }

});

