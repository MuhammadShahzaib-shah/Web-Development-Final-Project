const scriptURL = 'https://script.google.com/macros/s/AKfycbxs4FsKnBtjd-85t-k7qF2L6e_gBQ_P3abjMY1OFAbZI4O74xHnfPF6DwYPEmJ9yatw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.querySelector("#msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thank You For sign up..."
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset();
        }
    )

})
