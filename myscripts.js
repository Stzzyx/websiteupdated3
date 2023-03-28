$('.responsive').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
function answer(answerOption) {
  // Do something with the user's answer
  console.log('User answered:', answerOption);

  // If the user clicked "Not so good" or "Terrible", show the text area pop-up
  if (answerOption === 'not-so-good' || answerOption === 'terrible' || answerOption === 'okay') {
    showTextArea();
  }
  else {
    showHappyArea()
  } 
  // Hide the pop-up
  document.querySelector('.popup').style.display = 'none';
}
//Shows the happy area pop-up
function showHappyArea() {
  //hides the initial pop-up
  document.querySelector('.popup').style.display = 'none';
  // Show the happy area pop-up
  document.getElementById('happy-area-popup').style.display = 'block'; 
}
function showTextArea() {
  // Show the text area pop-up
  document.getElementById('text-area-popup').style.display = 'block';
}

function submitTextArea() {
  // Get the text area value
  var textAreaValue = document.getElementById('text-area').value;

  // Do something with the user's response
  console.log('User wrote:', textAreaValue);

  // Hide the text area pop-up
  document.getElementById('text-area-popup').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
  var popup = document.querySelector('.popup');
// Get all close buttons on the page
const closeButtons = document.querySelectorAll('.close-button');

// Add event listener to each close button
closeButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Find the closest parent popup element and hide it
    const popup = button.closest('.popup');
    popup.style.display = 'none';
  });
});

  // Show the pop-up when the page loads
  popup.style.display = 'block';
});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("header").classList.add("scrolled");
  } else {
    document.querySelector("header").classList.remove("scrolled");
  }
}
