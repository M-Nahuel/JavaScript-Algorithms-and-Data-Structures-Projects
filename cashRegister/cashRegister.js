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
const button = document.getElementById('submit');
const price = document.getElementById('purchase');
const cash = document.getElementById('cash');
const cid1 = document.getElementById('cid');
const stat = document.getElementById('status');
const table = document.getElementById('statusT');

function checkCashRegister(price, cash) {
//Cash in Drawer samples
let cids = [
  [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
  ],
  [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
  ],
  [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
  ]
  ];

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
  ];
  //select an aleatory cid
  let rnd = Math.floor(Math.random()*3);
  cid = cids[rnd];

    price = parseFloat(price);
    cash = parseFloat(cash);
    let change = Math.round(cash*100 - price*100);
    //cash in drawer but only values
    let cReg = cid.map(function(elem){
      return [Math.round(elem[1]*100)];
    });
    
    //add dennominations
    cReg.forEach(function(elem, ind){
      cReg[ind].unshift(cid[ind][0])
    });
    cReg.reverse();
    //total available
    let totalAv = cReg.reduce(function(acum,curr){
      return acum+=curr[1];
    },0);
    const final = {
      status: null,
      change: []
    };
    let open = [];
    if(totalAv<change){
      final.status = "INSUFFICIENT_FUNDS";
      console.log(final);
      return final;
    }
    if(totalAv===change){
      final.status = "CLOSED";
      final.change = cid;
      console.log(final);
      return final;
    }
    for(let i=0; i<cid.length; i++){
      if(change>0){
        //>= added 1st
        if(cReg[i][1]>=values[i][1]&&change>=values[i][1]){
        var cont = 0;
        while(cReg[i][1]>=values[i][1]&&change>=values[i][1]){
          change-=values[i][1];
          cReg[i][1]-=values[i][1];
          cont++;
        }
        open.push([values[i][0], (values[i][1]*cont)/100]);
      };
      };
    };
    if(change>0){
      final.status = "INSUFFICIENT_FUNDS";
      console.log(final);
      return final;
    };
  
    final.status = "OPEN, your change is:";
    final.change = open;
    console.log(final);
    return final;
  };

  function displayTable(st) {
    table.innerHTML = '';
    if(st.length >= 0){
    const head = document.createElement('tr');
    
    const thD = document.createElement('th');
    thD.textContent = 'Denomination';
    head.appendChild(thD);

    const thA = document.createElement('th');
    thA.textContent = 'Amount';
    head.appendChild(thA);

    table.appendChild(head);

    for (let i=0; i<st.length; i++) {
      const tr = document.createElement('tr');

      const tdD = document.createElement('td');
      tdD.textContent = st[i][0];
      tr.appendChild(tdD);
      
      const tdA = document.createElement('td');
      tdA.textContent = st[i][1];
      tr.appendChild(tdA);
      
      table.appendChild(tr);
    }

    const div = document.getElementById('result');
    div.appendChild(table);
  };
  };
  

  button.addEventListener('click', () => {
    const st = checkCashRegister(price.value, cash.value);
    stat.textContent = `Status: ${st.status}`;
    displayTable(st.change);
  });