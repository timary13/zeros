module.exports = function zeros(expression) {

    let flagTwo = false; //if have 2
    let uneval = 0;
    return expression.split('*')
        .reduce(function (acum, fact) {
            let num = parseInt(fact);
            if (fact.endsWith("!!")) { //at eval !! we can get 5 from /10 and /50
                if (!(num % 2)) {
                    acum += Math.floor(num / 10);
                    acum += Math.floor(num / 50);
                    flagTwo = true;
                }
                else {
                    while (num > 0) { //at uneval !! we get 5 from /5, then this count/2
                        num = Math.floor(num / 5);
                        uneval += Math.ceil(num / 2);
                    }
                }
            }
            else { //simple !
                flagTwo = true;
                while (num > 0) {
                    num /= 5;
                    acum += Math.floor(num);
                }
            }
            if (flagTwo) { //if we haven't 2, maybe only 5
                acum += uneval;
                uneval = 0;
            }
            return acum;
        }, 0);

}
