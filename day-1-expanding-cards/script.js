const panels = document.querySelectorAll('.panel');

for (let i = 0; i < panels.length; i++ ) {
    panels[i].addEventListener('click', function() {
        removeActiveClasses();
        panels[i].classList.add('active');
    })
}

function removeActiveClasses() {
    for (let i = 0; i < panels.length; i++ ) {
        panels[i].classList.remove('active');
    }
}