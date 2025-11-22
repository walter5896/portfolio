// explicitly watch only the sections we care about
const myListOfItems = document.querySelectorAll('#intro, #education, #goals, #skills, #projects, #contact');

const observerOptions = {
  root: null,                     // viewport
  rootMargin: '0px 0px -80px 0px', // adjust for sticky nav
  threshold: 0.15                 // trigger when 25% visible
};

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      highlightNav(entry.target);
    }
  });
}, observerOptions);

function highlightNav(section){
  // remove existing active
  document.querySelectorAll('#navWrapper ul li').forEach(li => li.classList.remove('active'));

  const id = section.getAttribute('id');
  const newActive = document.querySelector(`#navWrapper ul li a[href="#${id}"]`).parentElement;
  newActive.classList.add('active');
}

// observe each section
myListOfItems.forEach(item => myObserver.observe(item));
