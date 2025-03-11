let allData = document.querySelector('table')
let input = document.querySelector('input')
let opr = ['+', '-', '*', '/', '.']
allData.addEventListener('click', (e) => {
  if (e.target.tagName == 'BUTTON') {
    let OldValue = input.value

    let lastValue = OldValue[OldValue.length - 1]
    let lastValueremove = OldValue.slice(0, OldValue.length - 1)
    // console.log(e.target.innerHTML )
    if (e.target.innerHTML == 'C') {
      input.value = "";
    }
    else if (e.target.innerHTML == '=') {
      input.value = eval(input.value);
      console.log(input.value)

    }
    else {
      if (opr.includes(e.target.innerHTML) && (opr.includes(lastValue))) {
        input.value = lastValueremove + e.target.innerHTML
      } else {
        input.value = OldValue + e.target.innerHTML

      }

    }

  }
})






let A = 'Mohit'
//  last value  nika ti hai
//   console.log(A[A.length-1])
// and ast valuve remve
// y = A.slice(0,A.length-1)
// console.log(y)



