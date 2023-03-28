const myForm = document.getElementById('my-form')
const fnama = document.getElementById('fnama-text')
const jabatan = document.getElementById('jabatan-text')
const kesediaan = document.getElementById('kesediaan-text')
const fumur = document.getElementById('fumur-number')
const domisili = document.getElementById('domisili-text')
const tahun = document.getElementById('tahun-number')
const fmail = document.getElementById('fmail-email')

const buttonSubmit = document.getElementById('my-button')
const myKotakan = document.getElementById('my-kotakan')

let isLowerBracketShow = true
document.getElementById("fnama-text").innerHTML = "Elsa Dwi Sabrina";
document.getElementById("jabatan-text").innerHTML = "Front-End Developer";
document.getElementById("kesediaan-text").innerHTML = "Fulltime";
document.getElementById("fumur-number").innerHTML = "30";
document.getElementById("domisili-text").innerHTML = "Malang";
document.getElementById("tahun-number").innerHTML = "5";
document.getElementById("fmail-email").innerHTML = "elss@gmail.com";

myForm.addEventListener('submit', (event) =>{
    event.preventDefault()

    const currentName = myForm.elements.fnama.value
    const currentRole = myForm.elements.jabatan.value
    const currentAvailability =  myForm.elements.kesediaan.value
    const currentAge =  myForm.elements.fumur.value
    const currentLocation =  myForm.elements.domisili.value
    const currentYear =  myForm.elements.tahun.value
    const currentMail = myForm.elements.fmail.value

  
  fnama.innerHTML = currentName
  jabatan.innerHTML = currentRole
  kesediaan.innerHTML = currentAvailability
  fumur.innerHTML = currentAge
  domisili.innerHTML = currentLocation
  tahun.innerHTML = currentYear
  fmail.innerHTML = currentMail
  
toggleBox()
})
function toggleBox () {
    if(isLowerBracketShow) {
      isLowerBracketShow = false
      myKotakan.classList.remove('hide')
    } else {
      isLowerBracketShow = true
      myKotakan.classList.add('hide')
    }
  }
  buttonSubmit.addEventListener('click', (event) => {
    event.preventDefault()
    toggleBox()
  })