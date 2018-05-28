
class scan{
constructor(items){
    if(items) {
        this.itemes= items.slice(0,5)
}else{
    this.items = []
}
}



add(value) {
    if(this.items.length<5) {
    
        this.items.push(value)

    }else{
        return "Your cart is full"
    }
}


remove() {
    if (this.items.length<1) {
        return "Your cart is empty"
    }else {
        this.items.pop
    }
}



total() {
    const price = this._items.reduce((accu, item) => accu + item.price, 0);
    return price * (100 - this._discount) / 100;
}

discount(percentage) {
    this._discount = percentage > 50 ? 50 : percentage;
}

}