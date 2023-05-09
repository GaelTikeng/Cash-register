
let currencyNotesDisplay = document.querySelector('.display')
// let cid = document.querySelector('.cash_register_state')

// let cid = [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]

let object1 = {
  status: "INSUFFICIENT_FUND",
  change: []
}

let object2 = {
  status: "OPEN",
  change: []
}

let object3 = {
  status: "CLOSED",
  change: []
}

function cashRegister() {
  let cid[0][1] = +document.querySelector('#penny').value,
      cid[1][1] = +document.querySelector('#nickel').value,
      cid[2][1] = +document.querySelector('#dime').value,
      cid[3][1] = +document.querySelector('#quarter').value,
      cid[4][1] = +document.querySelector('#one').value,
      cid[5][1] = +document.querySelector('#five').value,
      cid[6][1] = +document.querySelector('#ten').value,
      cid[7][1] = +document.querySelector('#twenty').value,
      B = +document.querySelector('.bill').value,
      N = +document.querySelector('.payment').value,
      balance = N - B,
      wholeBalance = Math.floor(balance),
      decimalBalance = balance - Math.floor(balance),
      whole = 0,
      modolus = 0,
      sum = 0,
			x = 0,
			y = 0
  // let CID =cid
  
  console.log(typeof N)
  console.log(N)
  console.log(typeof B)
  console.log(B)
  console.log(typeof balance)
  console.log(balance)
	for (let i = 0; i < cid.length; i++) {
		sum = +(sum + cid[i][1]).toFixed(2)
	}
	if (sum < balance) {
		document.querySelector('.display').innerHTML = JSON.stringify(object1)
    // console.log(object1)
	} else if (sum === balance) {
		object3.change = cid
    document.querySelector('.display').innerHTML = JSON.stringify(object3)
    // console.log(object3)
	} else {
    if (cid[7][1] !== 0) {
      whole = Math.floor(wholeBalance/20)
      modolus = wholeBalance % 20
      x = whole * 20
      // test if the number of twenty notes we have to give is greater than what is available in the cid
      if (x >= cid[7][1]) {
        y = x - cid[7][1]
        cid[7][1] = x - y
      } else {
        y = cid[7][1] - x
        cid[7][1] -= y
      }
    }
    if (cid[7][1] !== 0) {
      object2.change.push(cid[7])
    }
    if (cid[6][1] !== 0 && cid[7][1] === 0) {
      whole = Math.floor(wholeBalance/10)
      modolus = wholeBalance % 10
      x = whole * 10
      if (x >= cid[6][1]) {
        y = x - cid[6][1]
        cid[6][1] = x - y
      } else {
        y = cid[6][1] - x
        cid[6][1] -= y
      }
    } else if (cid[6][1] !== 0) {
      // in case the number of twenty in the cid < what is needed, we handle the difference
      if(x > cid[7][1]) {
        whole = Math.floor((y + modolus)/10)
      } else {
        whole = Math.floor(modolus/10)
      }
      modolus = modolus % 10
      x = whole * 10
      // test if the amount needed is greater that the available
      if (x >= cid[6][1]) {
        y = x - cid[6][1]
        cid[6][1] = x - y
      } else {
        y = cid[6][1] - x
        cid[6][1] -= y
      }
    } 
    if (cid[6][1] !== 0) {
      console.log(cid[6])
      console.log(cid[6][1])
      console.log(typeof cid[6][1])
      object2.change.push(cid[6])
    }
  
    // test if value of key "five" and "ten" are not 0 otherwise we push directly to "cahnge" 
    if (cid[5][1] !== 0) {
      if (x > cid[6][1]) {
        whole = Math.floor((modolus + y)/5)
      } else {
        whole = Math.floor(modolus/5)
      }
      modolus = modolus % 5
      x = whole * 5
      if (x >= cid[5][1]) {
        y = x - cid[5][1]
        cid[5][1] = x - y
      } else {
        y = cid[5][1] - x
        cid[5][1] -= y
      }
    } else if (cid[5][1] !== 0 && cid[6][1] === 0) {
      whole = Math.floor(wholeBalance/5)
      modolus = wholeBalance % 5
      x = whole * 5
  
      if (x >= cid[5][1]) {
        y = x - cid[5][1]
        cid[5][1] = x - y
      } else {
        y = cid[5][1] - x
        cid[5][1] -= y
      }
    }
    if (cid[5][1] !== 0) {
      object2.change.push(cid[5])
    }
  
    // test if value of key "one" is not 0 otherwise we push directly to "cahnge" 
    if (cid[4][1] !== 0) {
      // test this to ensure that the program clearly remove what is needed
      if(x > cid[5][1]) {
        x = y + modolus
      } else {
        x = modolus
      }
      if (x >= cid[4][1]) {
        y = x - cid[4][1]
        cid[4][1] = x - y
      } else {
        y = cid[4][1] - x
        cid[4][1] -= y
      }
    } else if (cid[4][1] !== 0 && cid[5][1] === 0) {
      whole = Math.floor(wholeBalance/1)
      modolus = wholeBalance % 1
      x = whole * 1
      if (x >= cid[4][1]) {
        y = x - cid[4][1]
        cid[4][1] = x - y
      } else {
        y = cid[4][1] - x
        cid[4][1] -= y
      }
    }
    if (cid[4][1] !== 0) {
      object2.change.push(cid[4])
    }
  
    // handeling the decimal part of the diffence btw N & B (balance)
    let dB = decimalBalance * 100, // multiply by 100 to take calculate the modolus and ease calculations
        dBwhole = 0,
        dBmodolus = 0
    if (cid[3][1] !== 0) {
      dBwhole = Math.floor(dB/25)
      dBmodolus = dB  % 25
      x = (dBwhole * 25)/100 // divide by 100 to come back to the initial value
      // test if the number of twenty notes we have to give is greater than what is available in the cid
      if (x >= cid[3][1]) {
        y = x - cid[3][1]
        cid[3][1] = x - y
      } else {
        y = cid[3][1] - x
        cid[3][1] -= y
      }
    }
    if (cid[3][1] !== 0) {
      object2.change.push(cid[3])
    }
    if (cid[2][1] !== 0) {
      if(x > cid[3][1]) {
        dBwhole = Math.floor((y + dBmodolus)/10)
      } else {
        dBwhole = Math.floor(dBmodolus/10)
      }
      dBmodolus = dBmodolus % 10
      x = (dBwhole * 10)/100
      if (x >= cid[2][1]) {
        y = x - cid[2][1]
        cid[2][1] = +(x - y).toFixed(2)
      } else {
        y = cid[2][1] - x
        cid[2][1] = +(cid[2][1] - y).toFixed(2)
      }
    } else if (cid[2][1] !== 0 && cid[3][1] === 0) {
      dBwhole = Math.floor(dB/10)
      dBmodolus = dB % 10
      x = (dBwhole * 10)/100
      if (x >= cid[2][1]) {
        y = x - cid[2][1]
        cid[2][1] = +(x - y).toFixed(2)
      } else {
        y = cid[2][1] - x
        cid[2][1] = +(cid[2][1] - y).toFixed(2)
      }
    }
    if (cid[2][1] !== 0) {
      object2.change.push(cid[2])
    }
    if (cid[1][1] !== 0) {
      if(x > cid[2][1]) {
        dBwhole = Math.floor((y + dBmodolus)/5)
      } else {
        dBwhole = Math.floor(dBmodolus/5)
      }
      dBmodolus = dBmodolus % 5
      x = (dBwhole * 5)/100
      if (x >= cid[1][1]) {
        y = x - cid[1][1]
        cid[1][1] = +(x - y).toFixed(2)
      } else {
        y = cid[1][1] - x
        cid[1][1] = +(cid[1][1] - y).toFixed(2)
      }
    } else if (cid[1][1] !== 0 && cid[2][1] === 0) {
      dBwhole = Math.floor(dB/5)
      dBmodolus = dB % 10
      x = (dBwhole * 5)/100
      if (x >= cid[1][1]) {
        y = x - cid[1][1]
        cid[1][1] = +(x - y).toFixed(2)
      } else {
        y = cid[1][1] - x
        cid[1][1] = +(cid[1][1] - y).toFixed(2)
      }
    }
    if (cid[1][1] !== 0) {
      object2.change.push(cid[1])
    }
    if (cid[0][1] !== 0) {
      if(x > cid[1][1]) {
        dBwhole = Math.floor((y + dBmodolus))
      } else {
        dBwhole = Math.floor(dBmodolus)
      }
      dBmodolus = dBmodolus % 1
      x = (dBwhole * 1)/100
      if (x >= cid[0][1]) {
        y = x - cid[0][1]
        cid[0][1] = +(x - y).toFixed(2)
      } else {
        y = cid[0][1] - x
        cid[0][1] = +(cid[0][1] - y).toFixed(2)
      }
    } else if (cid[0][1] !== 0 && cid[1][1] === 0) {
      dBwhole = Math.floor(dB/1)
      dBmodolus = dB % 1
      x = (dBwhole * 1)/100
      if (x >= cid[0][1]) {
        y = x - cid[0][1]
        cid[0][1] = +(x - y).toFixed(2)
      } else {
        y = cid[0][1] - x
        cid[0][1] = +(cid[0][1] - y).toFixed(2)
      }
    }
    if (cid[0][1] !== 0) {
      object2.change.push(cid[0])
    }
    document.querySelector('.display-currency-notes').innerHTML = `
    <h4> Your change is </h4>
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
    <div class="cid">
      <label for="onehundred">ONE HUNDRED</label>
      <input type="number" value="${cid[8][1]}" class="input">
    </div>`
    console.log(cid[1])
    console.log(cid[2])
    console.log(cid[3])
    console.log(cid[4])
    console.log(cid[5])
    console.log(cid[7])
    console.log(object2)
    for (let i=0; i<cid.length; i++) {
      cid[i][1] = CID[i][1] - cid[i][1]
    }
    console.log(cid)
    console.log(CID)
  }
  
  console.log(cid)

  // document.querySelector('.my_cid').innerHTML = JSON.stringify(object2)

  
}

// cashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
