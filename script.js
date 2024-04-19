var current = "dark";
var once = false;

function toggle() {
  var body = document.body;
  console.log("a");
  if (once == false) {
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

document.addEventListener("DOMContentLoaded", function() {

  const text = document.getElementById("text");

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

  updateText();

});
