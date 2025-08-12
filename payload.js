var logo = document.querySelector('[src="/images/logo.png"]');
logo.src = 'https://i.pinimg.com/736x/2c/ed/fd/2cedfdd46ef9fb3a826b234a014e7661.jpg';
logo.style.cssText = 'position:absolute;top:20px;left:20px;width:200px;height:auto;transition:all 0.3s ease-in-out;';
setInterval(() => {
    let maxX = window.innerWidth - logo.width;
    let maxY = window.innerHeight - logo.height;
    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);
    let scale = Math.random() * 4.5 + 0.8; // scale từ 0.8 tới 1.3
    logo.style.left = randomX + 'px';
    logo.style.top = randomY + 'px';
    logo.style.transform = `scale(${scale}) rotate(${Math.floor(Math.random()*360)}deg)`;
}, 500);

document.querySelector('[alt="MaiTech logo"]').nextElementSibling.querySelector("strong").innerText = "Cương Đẹp Zai";
