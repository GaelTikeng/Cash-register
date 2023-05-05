// let B = document.querySelector('.bill').value
// let N = document.querySelector('.payment').value
// let currencyNotesDisplay = document.querySelector('.display')
// let cashRegisterState = document.querySelector('.cash_register_state')

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

// function checkCashRegister(price, cash, cid) {
//   let balance = N - B
//   let wholeBalance = Math.floor(balance)
//   let decimalBalance = balance.toString().split('.')[1]
  


// }


function cashRegister(B, N, cid) {
	let balance = N - B
	let wholeBalance = Math.floor(balance)
	let decimalBalance = balance - Math.floor(balance)
  console.log(decimalBalance)
	let whole = 0,
			modolus = 0,
			sum = 0,
			x = 0,
			y = 0

	
	// let whole = 0
	let mod = 0
	let res = 0
	console.log(balance)
	for (let i = 0; i < cid.length; i++) {
		sum += cid[i][1]
	}
	console.log(sum)
	if (sum < balance) {
		console.log(object1)
	} else if (sum === balance) {
		object3.change = cid
		console.log(object3)
	} else {
    if (cid[7][1] !== 0) {
      whole = Math.floor(wholeBalance/20)
      modolus = wholeBalance % 20
      x = whole * 20
      console.log("first")
      console.log(modolus)
      // test if the number of twenty notes we have to give is greater than what is available
      if (x >= cid[7][1]) {
        y = x - cid[7][1]
        cid[7][1] = x - y
        // console.log(cid[7][1])
      } else {
        y = cid[7][1] - x
        cid[7][1] -= y
      }
    }
    object2.change.push(cid[7])
  
    
    console.log(cid[6])
    if (cid[6][1] !== 0 && cid[7][1] === 0) {
      whole = Math.floor(wholeBalance/10)
      modolus = wholeBalance % 10
      x = whole * 10
      console.log("else if")
  
      if (x >= cid[6][1]) {
        y = x - cid[6][1]
        cid[6][1] = x - y
      } else {
        y = cid[6][1] - x
        cid[6][1] -= y
      }
    } else if (cid[6][1] !== 0) {
      console.log("odolus")
      console.log(modolus)
      if(x > cid[7][1]) {
        console.log("los")
        whole = Math.floor((y + modolus)/10)
      } else {
        whole = Math.floor(modolus/10)
      }
      modolus = modolus % 10
      x = whole * 10
      console.log(modolus)
  
      if (x >= cid[6][1]) {
        y = x - cid[6][1]
        cid[6][1] = x - y
      } else {
        y = cid[6][1] - x
        cid[6][1] -= y
      }
    } 
    
    console.log("ten")
    console.log(cid[6][1])
    object2.change.push(cid[6])
  
    // test if value of key "five" and "ten" are not 0 otherwise we push directly to "cahnge" 
    if (cid[5][1] !== 0) {
      if (x > cid[6][1]) {
        whole = Math.floor((modolus + y)/5)
      } else {
        whole = Math.floor(modolus/5)
      }
      modolus = modolus % 5
      console.log(modolus)
      console.log(whole)
      console.log("fiveoff")
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
      console.log("ten zero")
  
      if (x >= cid[5][1]) {
        y = x - cid[5][1]
        cid[5][1] = x - y
      } else {
        y = cid[5][1] - x
        cid[5][1] -= y
      }
    }
    object2.change.push(cid[5])
  
    // test if value of key "one" is not 0 otherwise we push directly to "cahnge" 
    if (cid[4][1] !== 0) {
      if(x > cid[5][1]) {
        whole = Math.floor((y + modolus)/1)
      } else {
        whole = Math.floor(modolus/1)
      }
      modolus = modolus % 1
      console.log("modolus")
      x = whole * 1
  
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
      console.log("else")
      if (x >= cid[4][1]) {
        y = x - cid[4][1]
        cid[4][1] = x - y
      } else {
        y = cid[4][1] - x
        cid[4][1] -= y
      }
    }
    object2.change.push(cid[4])
  
    // handeling the decimal part of the diffence btw N & B (balance)


    decimalBalance
    
	  console.log(object2)

  }

	// test if value of key "twenty" is not 0 otherwise we push directly to "cahnge" 
	
	







	
}

cashRegister(1.25, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 50], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// console.log(x)