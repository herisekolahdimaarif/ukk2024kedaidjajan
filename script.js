document.querySelectonAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click',function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).Scrollintoview ({
            behavior:'smooth'
        });
    });
});