



toggleActive (document.getElementById('hover-title'))


const paragraph = document.getElementById('liter-hov')
paragraph.innerHTML = paragraph.innerText.split(' ').map(word => `<span>${word}</span>`).join(' ')
console.log(paragraph.querySelectorAll('span'))
Array.from(paragraph.querySelectorAll('span')).forEach(word => {
    toggleActive (word)
})

function toggleActive (element){
    element.addEventListener('mouseenter', (e) => {
        e.target.className="active"
    })
    element.addEventListener('mouseleave', (e) => {
        e.target.className=""
    })
}