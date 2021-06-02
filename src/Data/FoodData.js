
export function formatPrice(price) {
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}

export const foodItems = [
    {
        name: 'Cheese Pizza',
        img: '/img/pizza.png',
        section: 'Pizza',
        price: 10
    },
    {
        name: 'Pepperoni Pizza',
        img: '/img/pizza2.jpeg',
        section: 'Pizza',
        price: 12
    },
    {
        name: 'Chicken Pizza',
        img: '/img/chicken-pizza.jpeg',
        section: 'Pizza',
        price: 13
    },
    {
        name: 'Veggie Pizza',
        img: '/img/healthy-pizza.jpeg',
        section: 'Pizza',
        price: 11
    },
    {
        name: 'Burger',
        img: '/img/burger.jpeg',
        section: 'Sandwich',
        price: 9
    },
    {
        name: 'Gyro',
        img: '/img/gyro.jpeg',
        section: 'Sandwich',
        price: 9.5
    },
    {
        name: 'Shrimp PoBoy',
        img: '/img/sandwich.jpeg',
        section: 'Sandwich',
        price: 12
    },
    {
        name: 'Fries',
        img: '/img/fries.jpeg',
        section: 'Sides',
        price: 4
    },
]

export const foods = foodItems.reduce((res, food) => {
    if (!res[food.section]) {
        res[food.section] = []
    }
    res[food.section].push(food);
    return res;
}, {})