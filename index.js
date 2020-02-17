const dropButtons = document.querySelectorAll('.drop')

function handleDrop () {
  const children = this.parentNode.parentNode.childNodes
  
  children.forEach(child => {
    if (child.classList) {
      if (child.classList.contains('mobile-hide')) {
        child.classList.toggle('hidden')
        this.classList.toggle('show-plus')
        this.classList.toggle('show-minus')
    
      }
    } 
  })
}

dropButtons.forEach(drop => drop.addEventListener('click', handleDrop))