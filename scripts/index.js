const kf = document.querySelector('#kf').value
const win = document.querySelector('#win').value
const all = document.querySelector('#all').value
const result = document.querySelector('#result')
const btn = document.querySelector('#btn')

let val = (kf * (win / all) - 1) * 100 > 1
let valResult

if (val) {
   valResult = 'Да'
} else {
   valResult = 'Нет'
}

btn.addEventListener('click', () => {
   result.innerHTML = `
   <p>Вероятность букмекера: ${Math.floor(1 / kf * 100)}%</p>
   <p>Вероятность игрока ${Math.floor(win / all * 100)}%</p>
   <p>Коэффициент игрока: ${1 / (win / all * 100) * 100}</p>
   <p>Валуйность: ${valResult}</p>
   `
})