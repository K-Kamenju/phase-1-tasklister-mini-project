document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener("submit", e => {
    e.preventDefault()
    buildForm(e.target.new_task.value)
    form.reset()
  })
});

function buildForm(item) {
  let p = document.createElement("p")
  p.textContent = `${item}  `
  
  let btn = document.createElement("button")
  btn.addEventListener("click", handleDelete)
  btn.textContent = "X"

  let select = document.createElement("select")
  select.id = "select_list"
  select.name = "Colors"
  select.addEventListener("click", handleColors)

  let option1 = document.createElement("option")
  option1.value = "red"
  option1.textContent = "Red"
  
  let option2 = document.createElement("option")
  option2.value = "yellow"
  option2.textContent = "Yellow"

  let option3 = document.createElement("option")
  option3.value = "green"
  option3.textContent = "Green"

  select.appendChild(option1)
  select.appendChild(option2)
  select.appendChild(option3)

  p.appendChild(select)
  p.appendChild(btn)

  document.getElementById("list").appendChild(p)
}


function handleDelete(e) {
  e.target.parentNode.remove()
}


function handleColors(e) {
  e.target.parentNode.style.color = "red"
}