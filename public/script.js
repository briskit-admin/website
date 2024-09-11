const navLinks = document.querySelector('.nav-links')
const burger = document.querySelector('.burger')
const menuOverlay = document.querySelector('.menu-overlay')
const menuClose = document.querySelector('.menu-close')
const navItems = document.querySelectorAll('.nav-links a')
const menuItems = document.querySelectorAll('.menu-items a')

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuOverlay.classList.remove('active')
    burger.classList.remove('toggle')
  })
})

burger.addEventListener('click', () => {
  menuOverlay.classList.toggle('active')
  burger.classList.toggle('toggle')
  burger.classList.toggle('white') 
})

navItems.forEach(item => {
  item.addEventListener('click', () => {
    menuOverlay.classList.remove('active')
    burger.classList.remove('toggle')
  })
})

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section')
  const scrollPos = window.scrollY + 200

  sections.forEach(section => {
    if (scrollPos > section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      navItems.forEach(navItem => {
        navItem.classList.remove('active')
        if (navItem.getAttribute('href').substring(1) === section.id) {
          navItem.classList.add('active')
        }
      })
    }
  })
})

// document.querySelectorAll('.business-point').forEach(section => {
//   section.addEventListener('click', () => {
//       const content = section.querySelector('p');
//       const toggle = section.querySelector('.toggle');
//       const isVisible = content.style.display !== 'none';
//       content.style.display = isVisible ? 'none' : 'block';
//       toggle.textContent = isVisible ? 'v' : '^';
//   });
// });

document.querySelectorAll('.business-point').forEach(section => {
  section.addEventListener('click', () => {
      const content = section.querySelector('p');
      const toggleIcon = section.querySelector('.toggle-icon');
      const isExpanded = section.classList.contains('expanded');
      
      content.style.display = isExpanded ? 'none' : 'block';
      toggleIcon.src = isExpanded ? './images/arrow-down.png' : './images/arrow-up.png';
      section.classList.toggle('expanded');
  });
});