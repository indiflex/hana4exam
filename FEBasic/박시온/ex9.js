const MENU = {
  짜장: { price: 7000 },
  짬뽕: { price: 9900 },
  탕슉: { price: 25000, taxfree: 1 },
};

function bill(tableNo) {
  const orderList = [];
  const totalPrice = { price: 0, surtax: 0 };

  return {
    order(food) {
      orderList.push(food);
      totalPrice.price += MENU[food].price;
      totalPrice.surtax += MENU[food].taxfree
        ? 0
        : calcSurtax(MENU[food].price);
    },
    printBill() {
      const PAPER = '=====================';
      const LINE = '---------------------';
      console.log('Table. ', tableNo);
      console.log(PAPER);
      orderList.forEach((food) => {
        const { price, taxfree } = MENU[food];
        console.log('*' + food);
        printLine`공급가액:${price}`;
        printLine`부가세액:${taxfree ? 0 : calcSurtax(price)}`;
        console.log(LINE);
      });
      printLine`주문합계:${totalPrice.price}`;
      printLine`주문합계:${totalPrice.surtax}`;
      console.log(PAPER + '\n');
    },
  };
}

const calcSurtax = (n) => Math.round((n / 1.1) * 0.1);
const printLine = ([label, _], price) =>
  console.log(`${label}${price.toLocaleString().padStart(9)}원`);

module.exports = { bill };
const table1 = bill(1);
table1.order('짜장');
table1.order('짬뽕');
table1.printBill();

const table2 = bill(2);
table2.order('짜장');
table2.printBill();

table1.order('탕슉');
table1.printBill();

table2.order('짬뽕');
table2.printBill();
