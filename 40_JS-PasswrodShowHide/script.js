document.getElementById('eyeBtn').addEventListener('click', function (e) {
    e.preventDefault()
    const passField = document.getElementById('password')
    const eyeIcon = document.getElementById('eyeIcon')

    if (passField.type === 'password') {
        passField.setAttribute('type', 'text')
        eyeIcon.classList.remove('fa-eye')
        eyeIcon.classList.add('fa-eye-slash')
    }else{
        passField.setAttribute('type', 'password')
        eyeIcon.classList.remove('fa-eye-slash')
        eyeIcon.classList.add('fa-eye')
    }
})