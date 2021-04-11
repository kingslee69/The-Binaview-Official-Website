function openMobileNav() {
  var element = document.getElementById('mobileNav');
  element.classList.add('appear');
}

function closeMobileNav() {
  var element = document.getElementById('mobileNav');
  element.classList.remove('appear');
}

let timer = 0;

window.addEventListener('load', event => {
  let intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(function () {
          entry.target.classList.add('up');
        }, timer);
        timer += 50;
        intersectionObserver.unobserve(entry.target);
        setTimeout(function () {
          timer = 0;
        }, 1000);
      }
    });
  });

  document.querySelectorAll('.animate').forEach(obj => {
    intersectionObserver.observe(obj);
  });
});

window.addEventListener('load', event => {
  let intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(function () {
          entry.target.classList.add('up');
        }, timer);
        timer += 50;
        intersectionObserver.unobserve(entry.target);
        setTimeout(function () {
          timer = 0;
        }, 1000);
      }
    });
  });

  document.querySelectorAll('.animate-right').forEach(obj => {
    intersectionObserver.observe(obj);
  });
});

window.addEventListener('load', event => {
  let intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(function () {
          entry.target.classList.add('up');
        }, timer);
        timer += 50;
        intersectionObserver.unobserve(entry.target);
        setTimeout(function () {
          timer = 0;
        }, 1000);
      }
    });
  });

  document.querySelectorAll('.animate-left').forEach(obj => {
    intersectionObserver.observe(obj);
  });
});
