
//unsplash api  
//* URL: https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature

fetch(" URL: https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(response => response.json())
    .then(data => console.log(data))
