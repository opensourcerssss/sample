(function () {
  "use strict";

  // ==== Preloader
  window.onload = function () {
    window.setTimeout(fadeout, 500);
  };

  function fadeout() {
    document.querySelector(".preloader").style.opacity = "0";
    document.querySelector(".preloader").style.display = "none";
  }

  // ======= Sticky
  window.onscroll = function () {
    const header_navbar = document.querySelector(".navbar-area");
    const sticky = header_navbar.offsetTop;
    const logo = document.querySelector(".navbar-brand img");

    if (window.pageYOffset > sticky) {
      header_navbar.classList.add("sticky");
      logo.src = "assets/images/logo/sqlify-2.png";
    } else {
      header_navbar.classList.remove("sticky");
      logo.src = "assets/images/logo/sqlify-1.png";
    }

    // show or hide the back-top-top button
    const backToTop = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };

  // ==== for menu scroll
  const pageLink = document.querySelectorAll(".page-scroll");

  pageLink.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(elem.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        offsetTop: 1 - 60,
      });
    });
  });
// //login/signup
// const formOpenBtn=document.querySelector("#form-open"),
// home =document.querySelector(".home"),
// formContainer=document.querySelector("form-container"),
// formCloseBtn=document.querySelector(".form_close"),
// signupBtn=document.querySelector("#signup"),
// loginBtn=document.querySelector("#login"),
// pwShowHide=document.querySelectorAll(".pw_hide");

// formOpenBtn.addEventListener("click",()=>home.classList.add("show"));
// formCloseBtn.addEventListener("click",()=>home.classList.remove("show"));
// pwShowHide.forEach((icon)=>{
//   icon.addEventListener("click",()=>{
//     let getPwInput=icon.parentElement.querySelector("input");
//     if(getPwInput.type === "password"){
//       getPwInput.type="text";
//       icon.classList.replace("uli-eye-splash","uli-eye");
//     }else{
//       getPwInput.type="password";
//       icon.classList.replace("uli-eye","uli-eye-splash");
//     }
//   })
// })
// signupBtn.addEventListener("click",(e)=>{
//   e.preventDefault();
//   formContainer.classList.add("active");
// })
// loginBtn.addEventListener("click",(e)=>{
//   e.preventDefault();
//   formContainer.classList.remove("active");
// })

const formOpenBtn = document.querySelector("#form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form-container");
const formCloseBtn = document.querySelector(".form_close");
const signupBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");
const pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => {
  home.classList.add("show");
});

formCloseBtn.addEventListener("click", () => {
  home.classList.remove("show");
});

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // Toggle between the login and sign-up forms
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "block";
  formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // Toggle between the login and sign-up forms
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("signupForm").style.display = "none";
  formContainer.classList.remove("active");
});

  // section menu active
  function onScroll(event) {
    const sections = document.querySelectorAll(".page-scroll");
    const scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    for (let i = 0; i < sections.length; i++) {
      const currLink = sections[i];
      const val = currLink.getAttribute("href");
      const refElement = document.querySelector(val);
      const scrollTopMinus = scrollPos + 73;
      if (
        refElement.offsetTop <= scrollTopMinus &&
        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
      ) {
        document.querySelector(".page-scroll").classList.remove("active");
        currLink.classList.add("active");
      } else {
        currLink.classList.remove("active");
      }
    }
  }

  window.document.addEventListener("scroll", onScroll);

  //===== close navbar-collapse when a  clicked
  let navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  document.querySelectorAll(".page-scroll").forEach((e) =>
    e.addEventListener("click", () => {
      navbarToggler.classList.remove("active");
      navbarCollapse.classList.remove("show");
    })
  );
  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
  });

  // ========= glightbox
  const myGallery = GLightbox({
    href: "https://youtu.be/UaEEekr37Fc?si=6oM1BT5ZCW9sw2Yq",
    type: "video",
    source: "youtube", //vimeo, youtube or local
    width: 900,
    autoplayVideos: true,
  });

  //====== counter up
  const cu = new counterUp({
    start: 0,
    duration: 2000,
    intvalues: true,
    interval: 100,
    append:'',
  });
  cu.start();

  //=====  WOW active
  new WOW().init();

  //=====  particles
  if (document.getElementById("particles-1"))
    particlesJS("particles-1", {
      particles: {
        number: {
          value: 40,
          density: {
            enable: !0,
            value_area: 4000,
          },
        },
        color: {
          value: ["#FFFFFF", "#FFFFFF", "#FFFFFF"],
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#fff",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 33,
            height: 33,
          },
        },
        opacity: {
          value: 0.15,
          random: !0,
          anim: {
            enable: !0,
            speed: 0.2,
            opacity_min: 0.15,
            sync: !1,
          },
        },
        size: {
          value: 50,
          random: !0,
          anim: {
            enable: !0,
            speed: 2,
            size_min: 5,
            sync: !1,
          },
        },
        line_linked: {
          enable: !1,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: !0,
          speed: 1,
          direction: "top",
          random: !0,
          straight: !1,
          out_mode: "out",
          bounce: !1,
          attract: {
            enable: !1,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: !1,
            mode: "bubble",
          },
          onclick: {
            enable: !1,
            mode: "repulse",
          },
          resize: !0,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: !0,
    });

  if (document.getElementById("particles-2"))
    particlesJS("particles-2", {
      particles: {
        number: {
          value: 40,
          density: {
            enable: !0,
            value_area: 4000,
          },
        },
        color: {
          value: ["#FFFFFF", "#FFFFFF", "#FFFFFF"],
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#fff",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 33,
            height: 33,
          },
        },
        opacity: {
          value: 0.15,
          random: !0,
          anim: {
            enable: !0,
            speed: 0.2,
            opacity_min: 0.15,
            sync: !1,
          },
        },
        size: {
          value: 50,
          random: !0,
          anim: {
            enable: !0,
            speed: 2,
            size_min: 5,
            sync: !1,
          },
        },
        line_linked: {
          enable: !1,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: !0,
          speed: 1,
          direction: "top",
          random: !0,
          straight: !1,
          out_mode: "out",
          bounce: !1,
          attract: {
            enable: !1,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: !1,
            mode: "bubble",
          },
          onclick: {
            enable: !1,
            mode: "repulse",
          },
          resize: !0,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: !0,
    });
})();

