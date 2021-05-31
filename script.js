document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('search-icon').addEventListener('click', function () {
        this.classList.toggle('fa-times')
        document.getElementById('search-box').classList.toggle('active')
    })

    document.getElementById('menu').addEventListener('click', function () {
        this.classList.toggle('fa-times')
        document.querySelector('.navbar').classList.toggle('nav-toggle')
    })

    window.addEventListener('scroll', function () {
        document.getElementById('search-icon').classList.remove('fa-times')
        document.getElementById('search-box').classList.remove('active')

        document.getElementById('menu').classList.remove('fa-times')
        document.querySelector('.navbar').classList.remove('nav-toggle')

        if (window.scrollY > 0) {
            document.querySelector('header').classList.add('sticky')
        } else {
            document.querySelector('header').classList.remove('sticky')
        }
    })

    document.querySelector('a[href="#"]').addEventListener('click', function (event) {
        event.preventDefault()
        document.querySelector('html')
    })
})