//옷가게 할인 받기 math.floor()

function solution(price) {
    
    if(100000 <= price && price < 300000){
        price = price - price / 20;
    }
    else if(300000 <= price && price< 500000){
        price = price - price / 10;
    }
    else if(500000 <= price) {
        price = price - price / 5;
    }
    return parseInt(price);
}