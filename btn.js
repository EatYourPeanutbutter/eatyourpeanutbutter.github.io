const alltoggles = document.querySelectorAll('.toggle')

const toggleMe = () => {
    alltoggles.forEach((toggle) => {
    if (toggle.classList.contains('hidden'))
        toggle.classList.remove('hidden')
    else
        toggle.classList.add('hidden')
    }  
)
}

alltoggles.forEach((toggle) => {
    toggle.addEventListener('click', toggleMe)
});