const filterBtns = document.querySelectorAll('.filter-btn');
const footerInput = document.querySelector('.footer-input');

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function () {
  $('.navbar-collapse').collapse('hide');
}); // Activate scrollspy to add active class to navbar items on scroll

$('body').scrollspy({
  target: '#mainNav',
  offset: 75,
}); // Collapse Navbar

var navbarCollapse = function () {
  if ($('#mainNav').offset().top > 100) {
    $('#mainNav').addClass('navbar-scrolled');
  } else {
    $('#mainNav').removeClass('navbar-scrolled');
  }
}; // Collapse now if page is not at top

navbarCollapse(); // Collapse the navbar when page is scrolled

$(window).scroll(navbarCollapse);

// Floating skill icons
$(document).ready(function () {
  $('.moving').each(function () {
    animateDiv(this.id);
  });
});

function makeNewPosition($container) {
  $container = $('.about');

  var h = $container.height() + 200;
  var w = $container.width();

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];
}

function animateDiv(targetid) {
  var $target = $('#' + targetid);
  var msRandom = (Math.floor(Math.random() * 3) + 1) * 1000;
  var newq = makeNewPosition($target.parent());
  var oldq = $target.offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);

  $('#' + targetid)
    .delay(msRandom)
    .animate(
      {
        top: newq[0],
        left: newq[1],
      },
      speed,
      function () {
        animateDiv(targetid);
      }
    );
}

function calcSpeed(prev, next) {
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);

  var greatest = x > y ? x : y;
  var speedModifier = 0.1;
  var speed = Math.ceil(greatest / speedModifier);

  return speed;
}

// Filter portfolio projects
filterBtns.forEach((btn) =>
  btn.addEventListener('click', () => {
    filterBtns.forEach((button) => button.classList.remove('active'));
    btn.classList.add('active');

    let filterValue = btn.dataset.filter;

    $('.grid').isotope({ filter: filterValue });
  })
);

$('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
  transitionDuration: '0.6s',
});

// Swipe reviews
var mySwiper = new Swiper('.swiper-container', {
  speed: 1100,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});

// Validate contact form
function validateForm() {
  let first = document.getElementById('first').value;
  if (first == '') {
    document.querySelector('#status').innerHTML = 'Please enter your name';
    return false;
  }
  let last = document.getElementById('last').value;
  if (last == '') {
    document.querySelector('#status').innerHTML = 'Please enter your last name';
    return false;
  }
  let email = document.getElementById('email').value;
  if (email == '') {
    document.querySelector('#status').innerHTML = 'Please enter your email';
    return false;
  } else {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      document.querySelector('#status').innerHTML =
        'This email format is invalid';
      return false;
    }
  }
  let subject = document.getElementById('subject').value;
  if (subject == '') {
    document.querySelector('#status').innerHTML = 'Please include a subject';
    return false;
  }
  let message = document.getElementById('message').value;
  if (message == '') {
    document.querySelector('#status').innerHTML = 'Please write your message';
    return false;
  }

  document.getElementById('status').innerHTML = 'Sending...';
  formData = {
    first: $('input[name=first]').val(),
    last: $('input[name=last]').val(),
    email: $('input[name=email]').val(),
    subject: $('input[name=subject]').val(),
    message: $('textarea[name=message]').val(),
  };

  $.ajax({
    url: 'mail.php',
    type: 'POST',
    data: formData,
    success: function (data, textStatus, jqXHR) {
      $('#status').text(data.message);
      if (data.code)
        //If mail was sent successfully, reset the form.
        $('#contact-form')
          .closest('form')
          .find('input[type=text], textarea')
          .val('');
    },
    error: function (jqXHR, textStatus, errorThrown) {
      $('#status').text(jqXHR);
    },
  });
}

// Validate hire me form
function validateHireMe() {
  var hiremeName = document.getElementById('hiremename').value;
  if (hiremeName == '') {
    document.querySelector('#hireme-status').innerHTML =
      'Please enter your name';
    return false;
  }
  var hiremeEmail = document.getElementById('hiremeemail').value;
  if (hiremeEmail == '') {
    document.querySelector('#hireme-status').innerHTML =
      'Please enter your email';
    return false;
  } else {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(hiremeEmail)) {
      document.querySelector('#hireme-status').innerHTML =
        'This email format is invalid';
      return false;
    }
  }
  var hiremeMessage = document.getElementById('hirememessage').value;
  if (hiremeMessage == '') {
    document.querySelector('#hireme-status').innerHTML =
      'Please write your message';
    return false;
  }

  document.getElementById('hireme-status').innerHTML = 'Sending...';
  hiremeFormData = {
    hiremeName: $('input[name=hiremename]').val(),
    hiremeEmail: $('input[name=hiremeemail]').val(),
    hiremeMessage: $('textarea[name=hirememessage]').val(),
  };

  $.ajax({
    url: 'hireme.php',
    type: 'POST',
    data: hiremeFormData,
    success: function (data, textStatus, jqXHR) {
      console.log(hiremeFormData);
      $('#hireme-status').text(data.message);
      if (data.code)
        //If mail was sent successfully, reset the form.
        $('#hireme-form')
          .closest('form')
          .find('input[type=text], textarea')
          .val('');
    },
    error: function (jqXHR, textStatus, errorThrown) {
      $('#hireme-status').text(jqXHR);
      console.log(jqXHR);
      console.log(hiremeFormData);
    },
  });
}

// Validate subscribe form
function validateSubscribe() {
  var subscribeEmail = document.getElementById('subscribe-email').value;
  if (subscribeEmail == '') {
    document.querySelector('#subscribe-status').innerHTML =
      'Please enter your email';
    return false;
  } else {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(subscribeEmail)) {
      document.querySelector('#subscribe-status').innerHTML =
        'This email format is invalid';
      return false;
    }
  }

  document.getElementById('subscribe-status').innerHTML = 'Sending...';
  subscribeFormData = {
    subscribeEmail: $('input[name=subscribe-email]').val(),
  };

  $.ajax({
    url: 'subscribe.php',
    type: 'POST',
    data: subscribeFormData,
    success: function (data, textStatus, jqXHR) {
      $('#subscribe-status').text(data.message);
      if (data.code)
        //If mail was sent successfully, reset the form.
        $('#subscribe-form').closest('form').find('input[type=text]').val('');
    },
    error: function (jqXHR, textStatus, errorThrown) {
      $('#subscribe-status').text(jqXHR);
    },
  });
}

// Footer input focus effect
footerInput.addEventListener('focus', () => {
  footerInput.classList.add('focus');
});

footerInput.addEventListener('blur', () => {
  if (footerInput.value != '') return;
  footerInput.classList.remove('focus');
});

// Check user device
function isMobile() {
  return window.innerWidth <= 768;
}

function updateLinkBehavior() {
  const projectLink = document.getElementById('project-link');
  const projectTitleLink = document.getElementById('project-title-link');

  if (isMobile()) {
    // On mobile, set the links to open the specified URLs
    projectLink.href =
      'exp://u.expo.dev/update/82a8fcd0-b7fb-40c0-9029-58574b4aeaa8';
    projectTitleLink.href =
      'exp://u.expo.dev/update/82a8fcd0-b7fb-40c0-9029-58574b4aeaa8';
  } else {
    // On non-mobile, open the modal on link click
    projectLink.addEventListener('click', function (event) {
      event.preventDefault();
      // Open the modal using Bootstrap's modal method
      $('#viewNovaQuest').modal('show');
    });
    projectTitleLink.addEventListener('click', function (event) {
      event.preventDefault();
      // Open the modal using Bootstrap's modal method
      $('#viewNovaQuest').modal('show');
    });
  }
}

updateLinkBehavior();

// Update link behavior on window resize
window.addEventListener('resize', updateLinkBehavior);
