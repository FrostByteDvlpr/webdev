const makeProfile = document.getElementById("makeProfile");
const makeProfileText = document.getElementById("makeProfileText");
const getStartedPage = document.querySelector(".getting-started-page__text-container");
const backArrow = document.querySelector('.back-arrow a');
const getStartedFormOne = document.querySelector('.getStartedFormOne');

window.addEventListener('load', () => {
    getStartedPage.classList.add('load-right');
    setTimeout(() => {
        getStartedPage.style.opacity = 1;
    }, 500);
})

makeProfile.addEventListener("click", () => {
  if (makeProfile.checked) {
    makeProfileText.innerHTML = "Yes, let's create an account.";
  } else {
    makeProfileText.innerHTML = "No thanks, not at this time.";
  }
});

let inputGroup = document.getElementsByClassName("input-group");
let getStartedInputs = document.getElementsByClassName(
  "getting-started-inputs"
);

for (const gsInput of getStartedInputs) {
  gsInput.addEventListener("focus", () => {
    for (const input of inputGroup) {
      if (input.className.includes(gsInput.id)) {
        input.classList.add("focused");
      }
    }
  });
  gsInput.addEventListener("blur", () => {
    gsValue = gsInput.value;
    for (const input of inputGroup) {
      if (gsValue === "" && input.className.includes(gsInput.id)) {
        input.classList.remove("focused");
        input.classList.remove("filled");
      } else if(gsValue !== "" && input.className.includes(gsInput.id)) {
        gsInput.classList.add("filled");
      }
    }
  });
}

backArrow.addEventListener('click', (event) => {
    onPageOut(event, getStartedPage,'/consultation')
})
function onPageOut(e, elm, redirect) {
    e.preventDefault();
    elm.classList.add('unload-left');
    elm.style.opacity = 0;
    setTimeout(() => {
      if(redirect) {
        window.location.replace(redirect)
      }
    }, 300)
}

const firstContBtn = document.getElementById('contFirst');
const firstContBtnText = document.querySelector('.getting-started-page__text-container');

firstContBtn.addEventListener('click', (event) => {
  onPageOut(event, getStartedFormOne);
  setTimeout(() => {
    onPageOut(event, firstContBtnText)
  }, 350);
});
