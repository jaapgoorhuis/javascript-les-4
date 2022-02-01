// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];


//1A
const allResults = inventory.map((result) => {
  return result;
});

/*console.log(allResults);*/

//1B
const soldProducts = inventory.filter((result) => {

  if (result.originalStock === result.sold) {
    return true;
  }
  return false;
});

/*console.log(soldProducts);*/

//1C
const options = inventory.filter((result) => {

  if(result.options.ambiLight === true) {
    return true;
  }
  return false;
});

/*console.log(options);*/

//1D
inventory.sort((a, b) => {
  return a.price - b.price;
});

/*console.log(inventory);*/

//2A

let soldTvsPrice = 0;
for(let i = 0; i < inventory.length; i++) {
  soldTvsPrice+= inventory[i].price;
};

/*console.log(soldTvsPrice);*/
//2B
const element = document.getElementById('soldtvsprice');
element.textContent = soldTvsPrice;

//2C
let stockTvs = 0;
for(let i = 0; i < inventory.length; i++) {
  stockTvs+= inventory[i].originalStock;
};

//console.log(stockTvs);

//2D
const element2 = document.getElementById('stocktvs');
element2.textContent = stockTvs;

//2C
soldTvs = 0;
for (let i = 0; i < inventory.length; i++) {
  soldTvs+= inventory[i].sold;
}

let toBeSold = stockTvs - soldTvs;

//console.log(toBeSold);

//3A
const tvBrands = inventory.map((result) => {
  return result.brand;
});

const element3 = document.getElementById('tvbrands');
element3.textContent = tvBrands;

/*console.log(tvBrands);*/

//3B
function tvBrandsFunction() {
  arrays = [tvBrands];
  return arrays;
}

/*console.log(tvBrandsFunction());*/

//4A
function tvNameFunction(tvinfo) {
  const tvname = `${tvinfo.brand} ${tvinfo.type} - ${tvinfo.name}`;
  return tvname;
}
const printedTvName = tvNameFunction(inventory[2]);

/*console.log(printedTvName);*/

//4B
function tvPriceFunction(tvprice) {
  const tvPriceFormated = `\u20ac ${tvprice.price},-`;
  return tvPriceFormated;
}

const printedTvPrice = tvPriceFunction(inventory[0]);
/*console.log(printedTvPrice);*/

//4C
function tvSizeFunction(tvSize) {
  let calculatedCms = [];
  for (let i = 0; i < tvSize.length; i++) {
    incheToCm = Math.round(tvSize[i] * 2.54);
      calculatedCms.push(`${tvSize[i]} inch ( ${incheToCm} cm) `) ;
  }
  return calculatedCms;
}

const availableSizes = tvSizeFunction(inventory[3].availableSizes);
/*console.log(availableSizes)*/

//4D
const tvTitle = document.getElementById('tvtitle');
tvTitle.textContent = printedTvName;

const tvprice = document.getElementById('tvprice');
tvprice.textContent = printedTvPrice;

const tvinche = document.getElementById('tvinche');
tvinche.textContent = availableSizes.join('| ');

//4E
function allTvData(tvData) {
  for (let i = 0; i < tvData.length; i++) {
    tvname = tvNameFunction(tvData[i]);
    tvprices = tvPriceFunction(tvData[i]);
    tvinches = tvSizeFunction(tvData[i].availableSizes);

    const div = document.createElement('div');
    div.setAttribute('class', 'tvdata');
    div.innerText = `${tvname} 
                     ${tvprices}
                     ${tvinches}
                     
                     `;
    document.getElementById('alltvdata').appendChild(div);
  }
}

allTvData(inventory);