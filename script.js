var current = "dark";
var once = false;
var once2 = false;

function randoms() {
  // Get all elements with the class 'link'
  const links = document.querySelectorAll('.link');

  // Add event listener for hover on each link
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      // Set random rotation for each hover
      for (let i = 1; i <= 12; i++) {
        document.documentElement.style.setProperty(`--rotate${i}`, Math.floor(Math.random() * 201) - 100 + 'deg');
        document.documentElement.style.setProperty(`--loc${i}`, Math.floor(Math.random() * 201) - 100 + '%');
        document.documentElement.style.setProperty(`--loctwo${i}`, Math.floor(Math.random() * 201) - 100 + '%');
      }
    });
  });
}

/* function scroller() {
  const scrollEvent = () => {
    const intro = document.getElementById("intro");
    const sticky = document.getElementById("sticky");

    if (!intro || !sticky) {
      console.log("Could not find elements with IDs 'intro' or 'sticky'");
      return;
    }

    console.log("Scroll event triggered");

    if (!once2) {
      intro.style.animationName = "scroll";
      intro.style.animationDuration = "1s";
      intro.style.animationTimingFunction = "ease-in";
      intro.style.animationDirection = "normal";

      sticky.style.animationName = "scroll";
      sticky.style.animationDuration = "1s";
      sticky.style.animationTimingFunction = "ease-in";
      sticky.style.animationDirection = "normal";
      
      once = true
    } 
    
    else {
      intro.style.animationName = "scroll";
      intro.style.animationDuration = "1s";
      intro.style.animationTimingFunction = "ease-in";
      intro.style.animationDirection = "reverse";

      sticky.style.animationName = "scroll";
      sticky.style.animationDuration = "1s";
      sticky.style.animationTimingFunction = "ease-in";
      sticky.style.animationDirection = "reverse";
    }
  };

  console.log("this works btw");

  window.addEventListener('scroll', scrollEvent);
}


document.addEventListener("mousemove", parallax);

function parallax(e) {
    const parallax = document.getElementById("par");
    const speed = 5;
    const x = (window.innerWidth - e.pageX * speed) / 500;
    const y = (window.innerHeight - e.pageY * speed) / 500;
    parallax.style.transform = `translateX(${x}px) translateY(${y}px)`;
} */

function toggle() {
  var body = document.body;
  console.log("a");
  if (!once) {
    once = true;
    body.classList.toggle("dark");
  }
  if (current == "dark") {
    body.classList.toggle("nord");
    current = "nord";
  } else if (current == "nord") {
    body.classList.toggle("sepia");
    current = "sepia";
  } else if (current == "sepia") {
    body.classList.toggle("light");
    current = "light";
  } else if (current == "light") {
    body.classList.add("dark");
    body.classList.toggle("nord");
    body.classList.toggle("sepia");
    body.classList.toggle("light");
    current = "dark";
  }
}

var language;
var page; 

function russian() {

}

function chinese() {

}

function english() {

}

function swaplang() {

}

function links() {

}

function see() {

}

function about() {
  
}

function back() {

}

function fancyText(elementIds) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const enhance = id => {
    const element = document.getElementById(id);
    if (!element) return; // Check if element exists
    
    const text = element.innerText.split("");
    
    element.innerText = "";
    
    text.forEach((value, index) => {
      const outer = document.createElement("span");
      outer.className = "outer";
      
      const inner = document.createElement("span");
      inner.className = "inner";
      inner.style.animationDelay = `${rand(-5000, 0)}ms`;
      
      const letter = document.createElement("span");
      letter.className = "letter";
      letter.innerText = value;
      letter.style.animationDelay = `${index * 100}ms`; // Adjust animation delay
      
      inner.appendChild(letter);
      outer.appendChild(inner);
      element.appendChild(outer);
    });
  }
  
  elementIds.forEach(id => enhance(id)); // Apply the effect to each element
}

function updateText() {
  (function () {
    var names = ["max lee carter", "максим ли раймондович картер", "祁明思", "مكس لي ابن ريمون ال كعطار"],
      i = 0;
    setInterval(function () {
      $("#names").fadeOut(function () {
        $(this)
          .html(names[(i = (i + 1) % names.length)])
          .fadeIn();
      });
    }, 3000);

    var jobs = ["student", "developer", "entrepreneur", "video editor"],
      i3 = 0;
    setInterval(function () {
      $("#jobs").fadeOut(function () {
        $(this)
          .html(jobs[(i3 = (i3 + 1) % jobs.length)])
          .fadeIn();
      });
    }, 3000);
    var langs = ["cantonese", "english", "russian", "mandarin", "indonesian"],
      i4 = 0;
    setInterval(function () {
      $("#langs").fadeOut(function () {
        $(this)
          .html(langs[(i4 = (i4 + 1) % langs.length)])
          .fadeIn();
      });
    }, 3000);
    var code = ["type/javascript", "python", "c#", "html+css"],
      i5 = 0;
    setInterval(function () {
      $("#code").fadeOut(function () {
        $(this)
          .html(code[(i5 = (i5 + 1) % code.length)])
          .fadeIn();
      });
    }, 3000);
  })();
}

document.addEventListener("DOMContentLoaded", function() {
  fancyText(["color", "tg", "ig", "gh", "email", "all"]); // Pass an array of element IDs
  updateText();
  randoms();
  scroller();
});
  
