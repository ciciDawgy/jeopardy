const gridItems= document.querySelectorAll('.grid-item');
const active = document.querySelector('.active');
var modal = document.querySelector('.modal');
const removeModal = document.querySelector('.fa-solid');


/*gridItem.addEventListener('click', () => {
    modal.classlist.add('.active');
})*/

/*
gridItems.forEach(gridItem => {
    gridItem.addEventListener('click', () => {
        gridItem.classList.add('active');
    })
}) */

gridItems.forEach(gridItem => {
    gridItem.addEventListener('click', () => {
        removeActiveClasses()
        modal.classList.add('active');
    })
})

function removeActiveClasses() {
    gridItems.forEach(gridItem => {
        gridItem.classList.remove('active')
    })
}

removeModal.addEventListener('click', () => {
    modal.classList.remove('active');
})

const jeopardyCategories = [
    {
        genre: "WHO", 
        questions: [
                {
                    question: "Why is the sky blue?", 
                    answers: ["dunnu", "sup", "yo"],
                    correct: "dunnu",
                    level: "easy"
                },
                {
                    question: "Why is grass green?", 
                    answers: ["dunnu", "sup", "yo"],
                    correct: "yo",
                    level: "medium"
                },
                {
                    question: "How many planets in the solar system?", 
                    answers: ["dunnu", "sup", "yo"],
                    correct: "yo",
                    level: "hard"
                },
                {
                    genre: "WHERE", 
                    questions: [
                {
                    question: "Why is the sky blue?", 
                    answers: ["dunnu", "sup", "yo"],
                    correct: "dunnu",
                    level: "easy"
                },
                {
                    question: "Why is grass green?", 
                    answers: ["dunnu", "sup", "yo"],
                    correct: "yo",
                    level: "medium"
                },
                {
                    question: "How many planets in the solar system?", 
                    answers: ["dunnu", "sup", "yo"],
                    correct: "yo",
                    level: "hard",
                },
            ]
            },
        ],
    },
]
    

// Get the modal


// When the user clicks anywhere outside of the modal, close it
/*window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} */
/* 
window.onclick = function(event) {
    if (event.target == modal) {
      modal.className.remove = "active";
    }
  } */

/*const btna = document.querySelector('.btna')
const input = document.querySelector('.input')

btna.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})  */
