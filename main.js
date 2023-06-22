const cid = [
  ['PENNY', 0],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0]
]

const object1 = {
  status: 'INSUFFICIENT_FUND',
  change: []
}

const object2 = {
  status: 'OPEN',
  change: []
}

const object3 = {
  status: 'CLOSED',
  change: []
}

function cashRegister () {
  const a = +document.querySelector('#penny').value
  const b = +document.querySelector('#nickel').value
  const c = +document.querySelector('#dime').value
  const d = +document.querySelector('#quarter').value
  const e = +document.querySelector('#one').value
  const f = +document.querySelector('#five').value
  const g = +document.querySelector('#ten').value
  const h = +document.querySelector('#twenty').value
  const B = +document.querySelector('.bill').value
  const N = +document.querySelector('.payment').value
  const balance = N - B
  const arr = [a, b, c, d, e, f, g, h] // cash-in-drawer (cid)
  const wholeBalance = Math.floor(balance)
  const decimalBalance = balance - Math.floor(balance)
  let whole = 0
  let modolus = 0
  let sum = 0
  let x = 0
  let y = 0

  // loop through the array cid and sum all leaving the sum to two decimal places
  for (let i = 0; i < arr.length; i++) {
    sum = +(sum + arr[i]).toFixed(2)
  }
  if (sum < balance) {
    document.querySelector('.display').innerHTML = JSON.stringify(object1)
  } else if (sum === balance) {
    object3.change = cid
    document.querySelector('.display').innerHTML = JSON.stringify(object3)
  } else {
    if (arr[7] !== 0) {
      whole = Math.floor(wholeBalance / 20)
      modolus = wholeBalance % 20
      x = whole * 20 // gives us the number of twenty bank note we have to give as change

      // test if the number of twenty notes is greater than what is available in the cid
      if (x >= arr[7]) {
        y = x - arr[7]
        arr[7] = x - y // we update the cid variable with all what is available
      } else {
        y = arr[7] - x
        arr[7] -= y
      }
    }
    cid[7][1] = arr[7]
    object2.change.push(cid[7])
    if (arr[6] !== 0 && arr[7] === 0) {
      whole = Math.floor(wholeBalance / 10)
      modolus = wholeBalance % 10
      x = whole * 10
      if (x >= arr[6]) {
        y = x - arr[6]
        arr[6] = x - y
      } else {
        y = arr[6] - x
        arr[6] -= y
      }
    } else if (arr[6] !== 0) {
      // in case the number of twenty in the cid < what is needed, we handle the difference
      if (x > arr[7]) {
        whole = Math.floor((y + modolus) / 10)
      } else {
        whole = Math.floor(modolus / 10)
      }
      modolus = modolus % 10
      x = whole * 10
      // test if the amount needed is greater that the available
      if (x >= arr[6]) {
        y = x - arr[6]
        arr[6] = x - y
      } else {
        y = arr[6] - x
        arr[6] -= y
      }
    }
    cid[6][1] = arr[6]
    object2.change.push(cid[6])

    // test if value of key "five" and "ten" are not 0 otherwise we push directly to "cahnge"
    if (arr[5] !== 0) {
      if (x > arr[6]) {
        whole = Math.floor((modolus + y) / 5)
      } else {
        whole = Math.floor(modolus / 5)
      }
      modolus = modolus % 5
      x = whole * 5
      if (x >= arr[5]) {
        y = x - arr[5]
        arr[5] = x - y
      } else {
        y = arr[5] - x
        arr[5] -= y
      }
    } else if (arr[5] !== 0 && arr[6] === 0) {
      whole = Math.floor(wholeBalance / 5)
      modolus = wholeBalance % 5
      x = whole * 5
      if (x >= arr[5]) {
        y = x - arr[5]
        arr[5] = x - y
      } else {
        y = arr[5] - x
        arr[5] -= y
      }
    }
    cid[5][1] = arr[5]
    object2.change.push(cid[5])

    // test if value of key "one" is not 0 otherwise we push directly to "change"
    if (arr[4] !== 0) {
      // test this to ensure that the program clearly remove what is needed
      if (x > arr[5]) {
        x = y + modolus
      } else {
        x = modolus
      }
      if (x >= arr[4]) {
        y = x - arr[4]
        arr[4] = x - y
      } else {
        y = arr[4] - x
        arr[4] -= y
      }
    } else if (arr[4] !== 0 && arr[5] === 0) {
      whole = Math.floor(wholeBalance / 1)
      modolus = wholeBalance % 1
      x = whole * 1
      if (x >= arr[4]) {
        y = x - arr[4]
        arr[4] = x - y
      } else {
        y = arr[4] - x
        arr[4] -= y
      }
    }
    cid[4][1] = arr[4]
    object2.change.push(cid[4])

    // handeling the decimal part of the diffence btw N & B (balance)
    const dB = decimalBalance * 100 // multiply by 100 to take calculate the modolus and ease calculations
    let dBwhole = 0
    let dBmodolus = 0

    if (arr[3] !== 0) {
      dBwhole = Math.floor(dB / 25)
      dBmodolus = dB % 25
      x = (dBwhole * 25) / 100 // divide by 100 to come back to the initial value
      // test if the number of twenty notes we have to give is greater than what is available in the cid
      if (x >= arr[3]) {
        y = x - arr[3]
        arr[3] = x - y
      } else {
        y = arr[3] - x
        arr[3] -= y
      }
    }
    cid[3][1] = arr[3]
    object2.change.push(cid[3])
    if (arr[2] !== 0) {
      if (x > arr[3]) {
        dBwhole = Math.floor((y + dBmodolus) / 10)
      } else {
        dBwhole = Math.floor(dBmodolus / 10)
      }
      dBmodolus = dBmodolus % 10
      x = (dBwhole * 10) / 100
      if (x >= arr[2]) {
        y = x - arr[2]
        arr[2] = +(x - y).toFixed(2)
      } else {
        y = arr[2] - x
        arr[2] = +(arr[2] - y).toFixed(2)
      }
    } else if (arr[2] !== 0 && arr[3] === 0) {
      dBwhole = Math.floor(dB / 10)
      dBmodolus = dB % 10
      x = (dBwhole * 10) / 100
      if (x >= arr[2]) {
        y = x - arr[2]
        arr[2] = +(x - y).toFixed(2)
      } else {
        y = arr[2] - x
        arr[2] = +(arr[2] - y).toFixed(2)
      }
    }
    cid[2][1] = arr[2]
    object2.change.push(cid[2])

    if (arr[1] !== 0) {
      if (x > arr[2]) {
        dBwhole = Math.floor((y + dBmodolus) / 5)
      } else {
        dBwhole = Math.floor(dBmodolus / 5)
      }
      dBmodolus = dBmodolus % 5
      x = (dBwhole * 5) / 100
      if (x >= arr[1]) {
        y = x - arr[1]
        arr[1] = +(x - y).toFixed(2)
      } else {
        y = arr[1] - x
        arr[1] = +(arr[1] - y).toFixed(2)
      }
    } else if (arr[1] !== 0 && arr[2] === 0) {
      dBwhole = Math.floor(dB / 5)
      dBmodolus = dB % 10
      x = (dBwhole * 5) / 100
      if (x >= arr[1]) {
        y = x - arr[1]
        arr[1] = +(x - y).toFixed(2)
      } else {
        y = arr[1] - x
        arr[1] = +(arr[1][1] - y).toFixed(2)
      }
    }
    cid[1][1] = arr[1]
    object2.change.push(cid[1])
    if (arr[0] !== 0) {
      if (x > arr[1]) {
        dBwhole = Math.floor(y + dBmodolus)
      } else {
        dBwhole = Math.floor(dBmodolus)
      }
      dBmodolus = dBmodolus % 1
      x = (dBwhole * 1) / 100
      if (x >= arr[0]) {
        y = x - arr[0]
        arr[0] = +(x - y).toFixed(2)
      } else {
        y = arr[0] - x
        arr[0] = +(arr[0] - y).toFixed(2)
      }
    } else if (arr[0] !== 0 && arr[1] === 0) {
      dBwhole = Math.floor(dB / 1)
      dBmodolus = dB % 1
      x = (dBwhole * 1) / 100
      if (x >= arr[0]) {
        y = x - arr[0]
        arr[0] = +(x - y).toFixed(2)
      } else {
        y = arr[0] - x
        arr[0] = +(arr[0] - y).toFixed(2)
      }
    }
    cid[0][1] = arr[0]
    object2.change.push(cid[0])

    document.querySelector('.display-text').innerHTML = `<h3>Your change</h3>
    <div class="display-currency-notes">
      <div class="cid">
        <label for="penny">PENNY</label>
        <input type="number" value="${cid[0][1]}" class="input">
      </div>
      <div class="cid">
        <label for="nickel">NICKEL</label>
        <input type="number" value="${cid[1][1]}" class="input">
      </div>
      <div class="cid">
        <label for="dime">DIME</label>
        <input type="number" value="${cid[2][1]}" class="input">
      </div>
      <div class="cid">
        <label for="quarter">QUARTE</label>
        <input type="number" value="${cid[3][1]}" class="input">
      </div>
      <div class="cid">
        <label for="one">ONE</label>
        <input type="number" value="${cid[4][1]}" class="input">
      </div>
      <div class="cid">
        <label for="five">FIVE</label>
        <input type="number" value="${cid[5][1]}" class="input">
      </div>
      <div class="cid">
        <label for="ten">TEN</label>
        <input type="number" value="${cid[6][1]}" class="input">
      </div>
      <div class="cid">
        <label for="twenty">TWENTY</label>
        <input type="number" value="${cid[7][1]}" class="input">
      </div>
    </div>`

    // we are updating the values of the cid to display the current cid
    document.getElementById('penny').value = `${a - arr[0]}`
    document.getElementById('nickel').value = `${b - arr[1]}`
    document.getElementById('dime').value = `${c - arr[2]}`
    document.getElementById('quarter').value = `${d - arr[3]}`
    document.getElementById('one').value = `${e - arr[4]}`
    document.getElementById('five').value = `${f - arr[5]}`
    document.getElementById('ten').value = `${g - arr[6]}`
    document.getElementById('twenty').value = `${h - arr[7]}`

    // let newValues  = [x0, x1, x3]
    // let x0 = document.getElementById('penny').value,
    //     x1 = document.getElementById('nickel').value,
    //     x2 = document.getElementById('dime').value,

    // update the localStorage with the new values of the cid
    // localStorage.setItem('cash-in-drawer', JSON.stringify(newValues))
  }
}
