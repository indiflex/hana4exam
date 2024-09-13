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
      const PAPER = '=====================\n';
      const LINE = '---------------------\n';
      let ret = 'Table. ' + tableNo + '\n' + PAPER;
      orderList.forEach((food) => {
        const { price, taxfree } = MENU[food];
        ret += '*' + food + '\n';
        ret += priceLine`공급가액:${price}`;
        ret += priceLine`부가세액:${taxfree ? 0 : calcSurtax(price)}`;
        ret += LINE;
      });
      ret += priceLine`주문합계:${totalPrice.price}`;
      ret += priceLine`주문합계:${totalPrice.surtax}`;
      ret += PAPER + '\n';
      console.log(ret);
    },
  };
}

const calcSurtax = (n) => Math.round((n / 1.1) * 0.1);
const priceLine = ([label, _], price) =>
  `${label}${price.toLocaleString().padStart(9)}원\n`;

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
