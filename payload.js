var logo = document.querySelector('[src=\'/images/logo.png\']');
logo.src = 'https' + '://i.pinimg.com/736x/2c/ed/fd/2cedfdd46ef9fb3a826b234a014e7661.jpg';
logo.style.cssText = 'position:absolute;top:20px;left:20px;width:200px;height:auto;transition:all 0.5s ease-in-out;';
setInterval(() => { logo.style.transform = logo.style.transform === 'scale(1.2)' ? 'scale(1)' : 'scale(1.2)'; }, 500);
