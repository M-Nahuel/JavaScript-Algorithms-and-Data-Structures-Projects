/*Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)*/

function checkCashRegister(price, cash, cid) {
  const values = [
    ["ONE HUNDRED", 10000],
    ["TWENTY", 2000],
    ["TEN", 1000],
    ["FIVE", 500],
    ["ONE", 100],
    ["QUARTER", 25],
    ["DIME", 10],
    ["NICKEL", 5],
    ["PENNY", 1]
  ]
    /*const toReturn = {
    status: null,
     change: []
  }*/
  let price1 = Math.round(price*100);
  let cash1 = Math.round(cash*100);
  let change = cash1 - price1;
  let cid1 = cid.map(function(elem){
    elem[1] = Math.round(elem[1]*100);
    return elem;
  }).reverse();
  let totalAvCash = cid1.reduce(function (acum, curr){return acum+curr[1]},0);
  function substract(cond){
    let toReturn = values.reduce(function(acum, curr, ind){
      if(cond=="open"){
      if(curr[1]<=change){
        var cont = 0;        
        while(cid1[ind][1]>=curr[1]&&curr[1]<=change){ 
          change -= curr[1];
          cid1[ind][1] -= curr[1];
          cont++;
        };
        acum.push([curr[0], (curr[1]*cont)/100]);
        };
        } else if(cond == "closed"){
          acum.push([cid1[cid1.length-ind-1][0], cid1[cid1.length-ind-1][1]/100])
          return acum;
        };
    return acum;
    },[]);
    return toReturn
  }
  if(totalAvCash<change){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  if(totalAvCash===change){
    return {status: "CLOSED", change: substract("closed")}
  }
  /*if(change>0){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }*/
return {status:"OPEN", change: substract("open")};
}
//Tests
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
//Should return {status: "INSUFFICIENT_FUNDS", change: []}.
//testing for bills and coins availables needs to be fixed
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
//////
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));