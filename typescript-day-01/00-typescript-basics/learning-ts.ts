let number1;
let name1;
let stringExample : string;
let boolExample: boolean;
let numberExample: number;
let unionStringNumber: number | string;
unionStringNumber = 5;
unionStringNumber = "5";


stringExample = "Hello";

//stringExample = 4;//doesnt work

//Type Inference 
let number2 = 5;

////number2 = "five";//doesnt work

let restaurant = {
    name: "McDonalds",
    dineIn: false,
    foodItems: ["hamburgers", "fries", "apple pie"]
};

restaurant.foodItems.forEach((item) => {
    console.log(item.toUpperCase())
});



function buySellStock(stockName: string, quanity: number|string, action: "sell-stock" | "buy-stock")  {
let total = Number(quanity) * 15
let status = action === "sell-stock" ? "sold" :
"bought"

return `You just ${status} ${quanity} of ${stockName} for a total of $${total}.`
}


buySellStock("Bank of America", 15, "sell-stock");

interface IWeather{
temp: number;
cloudCondition: string;
next5dayTemps?: number[];
}

let weather: IWeather = {
    temp: 55,
    cloudCondition: "sunny"
}

console.log(weather.temp);

/*let weather = {
    temp: 78,
    cloudCondition: 'overcast',
    next5dayTemps: [81, 74, 79, 81, 81]
};
*/