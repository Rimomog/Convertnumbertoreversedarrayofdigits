function digitize(n) {
    let arr = n.toString().split('').reverse();
    return arr.map( e => Number(e) )
}