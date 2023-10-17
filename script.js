function validateInput(input) {
    let forbiddenChars = /[@!#$%^&*()]/g;
    input.value = input.value.replace(forbiddenChars, '');
}

//Animation

gsap.from(".hero-title, .hero-title_span, .hero-title__bottom", { opacity: 0, y: 50, duration: 1, stagger: 0.3 });

gsap.from(".hero-button", { opacity: 0, scale: 0.5, duration: 1, delay: 1 });

gsap.from(".hero-button", { opacity: 0, scale: 0.5, duration: 1, delay: 1 });

gsap.from(".search", { opacity: 0, y: 50, duration: 1, delay: 1.5 });

gsap.from(".photo-shape", { opacity: 0, y: 50, duration: 1, stagger: 0.3, delay: 2 });

gsap.from(".hero-photos__desc", { opacity: 0, x: -50, duration: 1, delay: 2.5 });

gsap.from(".hero-right__background", { opacity: 0, scale: 0, duration: 1.5, delay: 3 });
gsap.from(".hero-right__photo", { opacity: 0, scale: 0, duration: 1.5, delay: 4 });
gsap.from(".hero-flags__line", { opacity: 0, scale: 0, duration: 1.5, delay: 4.5 });
gsap.from(".hero-flags img", { opacity: 0, scale: 0, duration: 1.5, delay: 5 });


// Получаем элементы флагов
const flag1 = document.querySelector('#Flag1');
const flag2 = document.querySelector('#Flag2');
const flag3 = document.querySelector('#Flag3');
const flag4 = document.querySelector('#Flag4');
const flag5 = document.querySelector('#Flag5');
// Определяем начальные позиции флагов
const initialPositions = [
    { x: 100, y: 0 },
    { x: 0, y: 100 },
    { x: -100, y: 0 }
];

// Показываем флаги
gsap.set([flag1, flag2, flag3,flag4,flag5], { opacity: 1 });

// Анимация вращения флагов
gsap.to('.hero-flags', {
    duration: 3,
    ease: "power1.inOut",
    rotation: 360,
    repeat: -1,
    transformOrigin: "50% 50%",
    motionPath: {
        path: "M0,0 100,0 A100,100 0 1,1 -100,0 A100,100 0 1,1 100,0",
        align: "self",
        autoRotate: true
    }
});