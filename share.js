function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const store = params.get('store');
    const balance = params.get('balance');
    
    if (store && balance) {
        const details = document.getElementById('cardDetails');
        details.innerHTML = `
            <div class="store-name">${store}</div>
            <div class="balance">$${parseFloat(balance).toFixed(2)}</div>
        `;
    }
}

window.onload = getQueryParams;
