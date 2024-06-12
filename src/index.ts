/*

Необхідно розробити програму для обліку витрат за покупками в магазині.
Програма повинна приймати на вхід інформацію про куплені товари і їх вартість,
а також вид оплати (готівка чи карта).
На виході програма повинна виводити загальну суму витрат.
При тому, потрібно виводити, яка сума була витрачена картою, а яка сума була витрачена готівкою


*/

type Purchase = {
    product: string,
    price: number;
    paymentMethod: 'готівка' | 'карта';
};

function calculateExpenses(purchases: Array<Purchase>): {
    total: number;
    cashTotal: number;
    cardTotal: number
} {
    let total = 0;
    let cashTotal = 0;
    let cardTotal = 0;

    for(const purchase of purchases) {
        total += purchase.price;

        if(purchase.paymentMethod === 'готівка') {
            cashTotal += purchase.price;
        } else {
            cardTotal += purchase.price;
        }
    }

    return {
        total,
        cashTotal,
        cardTotal
    };
}


const purchases: Array<Purchase> = [
    { product: 'Футболка', price: 25, paymentMethod: 'готівка' },
    { product: 'Шорти', price: 30, paymentMethod: 'карта' },
    { product: 'Носки', price: 5, paymentMethod: 'готівка' }
];

const expenses = calculateExpenses(purchases);
console.log(expenses);