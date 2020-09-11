const id = setInterval(() => {
    const ad = document.querySelector('.ad-container');
    if(ad) {
        ad.parentNode.removeChild(ad);
        clearInterval(id);
    }
}, 300);
