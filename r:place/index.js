document.getElementById('options').addEventListener('click', function(e) {

    if (document.getElementById('image').value.length > 0) {
        chrome.cookies.set({
            "name": 'image',
            "url": "https://hot-potato.reddit.com/embed",
            "value": document.getElementById('image').value,
            "expirationDate": ((new Date().getTime() / 1000) + 2592000)
        });
    }

    if (document.getElementById('x-pos').value) {
        chrome.cookies.set({
            "name": 'x-pos',
            "url": "https://hot-potato.reddit.com/embed",
            "value": document.getElementById('x-pos').value,
            "expirationDate": ((new Date().getTime() / 1000) + 2592000)
        });
    }

    if (document.getElementById('y-pos').value) {
        chrome.cookies.set({
            "name": 'y-pos',
            "url": "https://hot-potato.reddit.com/embed",
            "value": document.getElementById('y-pos').value,
            "expirationDate": ((new Date().getTime() / 1000) + 2592000)
        });
    }


    if (document.getElementById('size').value) {
        chrome.cookies.set({
            "name": 'size',
            "url": "https://hot-potato.reddit.com/embed",
            "value": document.getElementById('size').value,
            "expirationDate": ((new Date().getTime() / 1000) + 2592000)
        });
    }

    if (document.getElementById('color').value) {
        chrome.cookies.set({
            "name": 'color',
            "url": "https://hot-potato.reddit.com/embed",
            "value": document.getElementById('color').value,
            "expirationDate": ((new Date().getTime() / 1000) + 2592000)
        });
    }
});

document.getElementById('drawingMode').addEventListener('click', function(e) {
    chrome.cookies.get({
        "name": 'drawMode',
        "url": "https://hot-potato.reddit.com/embed",
    }, function(cookie) {
        if (cookie == null) {
            chrome.cookies.set({
                "name": 'drawMode',
                "url": "https://hot-potato.reddit.com/embed",
                "value": 'true',
                "expirationDate": ((new Date().getTime() / 1000) + 2592000)
            });
        } else {
            chrome.cookies.set({
                "name": 'drawMode',
                "url": "https://hot-potato.reddit.com/embed",
                "value": cookie.value == 'true' ? 'false' : 'true',
                "expirationDate": ((new Date().getTime() / 1000) + 2592000)
            });
        }
    });

});