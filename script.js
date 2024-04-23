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

function toggle() {
  var body = document.body;
  console.log("a");
  if (!once) {
    once = true;
    body.classList.toggle("dark");
  }

  else if (current == "dark") {
    body.classList.toggle("nord");
    current = "nord";
  } 

  else if (current == "nord") {
    body.classList.toggle("sepia");
    current = "sepia";
  } 

  else if (current == "sepia") {
    body.classList.toggle("light");
    current = "light";
  } 

  else if (current == "light") {
    body.classList.add("dark");
    body.classList.toggle("nord");
    body.classList.toggle("sepia");
    body.classList.toggle("light");
    current = "dark";
  }
}

function russian() {swap("r.html", "content");}
function chinese() {swap("c.html", "content");}
function english() {swap("index.html", "content");}
function see() {swap("see.html", "upright")}
function about() {swap("about.html", "downright")}


function swap(page, backing) {
  const bg = getElementById(backing);
  setTimeout(() => {
    bg.style.animation = "swap 3s ease-in forwards";
  }, 3000);
  window.location.href = page;
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
});
  
