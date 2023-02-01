function solution(a, b, n) {
    let cola = 0;
    while(n>=a){
        cola = cola + parseInt(n/a) * b;
        n = parseInt(n/a)*b + parseInt(n%a);
    }
    return cola;
}