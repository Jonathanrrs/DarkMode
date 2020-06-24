const checkbox = document.querySelector('#checkbox');

/*  if(window.matchMedia('(prefers-color-scheme: dark)'.matches)) {
    checkbox.setAttribute('checked', true);
    
 } */
/* document.body.style.setProperty('--cardGray', 'red') */
 checkbox.addEventListener('change', function() {
        document.body.classList.toggle('is-dark-mode');
        if(this.checked) {
           /*  --cardGray: #252b43;
            --baseBackground:#1d2029;
            --baseColor: white;
            --gray: #8088ad;
            --lightGray: #1d2029;
            --cardTitle: #8088ad;
            --switchSpinner: #282943;
            --switch:  linear-gradient(to right, #4796d2 0%, #37ce8f 100%);
             */
        } else {

        }
 })