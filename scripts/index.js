const kf = document.querySelector('#kf')
const win = document.querySelector('#win')
const all = document.querySelector('#all')
const result = document.querySelector('#result')
const btn = document.querySelector('#btn')



btn.addEventListener('click', () => {
   let val = (+kf.value * (+win.value / +all.value) - 1) * 100 > 1
   let valResult

   if (val) {
      valResult = 'Да'
   } else {
      valResult = 'Нет'
   }
   result.innerHTML = `
   <p>Вероятность букмекера: ${Math.floor(1 / kf.value * 100)}%</p>
   <p>Вероятность игрока ${Math.floor(win.value / all.value * 100)}%</p>
   <p>Коэффициент игрока: ${(1 / (win.value / all.value * 100) * 100).toFixed(2)}</p>
   <p>Валуйность: ${valResult}</p>`
})