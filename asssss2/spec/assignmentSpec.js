//1
describe('items', () => {
    it('Should add an element to the end of the items', () => {
        const items = new Items();

        items.add(4)
        expect(items.fetch()).toEqual([4])


        items.add(5)
        expect(items.fetch()).toEqual([4, 5])
    })


    it("Should only allow 5 elements to be cart", () => {
        const items = new items();
        items.add(1)
        items.add(2)
        items.add(3)
        items.add(4)
        items.add(5)


        expect(items.add(6)).toBe("cart is empty")
    })


    it("Should remove the item in the items", () => {
        const items = new items();
        items.add(1)
        items.add(2)
        items.add(3)
        items.remove()

        expect(items.fetch()).toEqual([1, 2])

    })




    it("Should only take 5 items at once in the constructor", () => {
        const items = new items([1, 2, 3, 4, 5, 6]);

        expect(items.fetch()).toEqual([1, 2, 3, 4, 5])
    })

    it("Should remove the item in the items if it's not empty", () => {
        const items = new items();

        expect(items.remove()).toBe("items is empty")
    })

    it("SHould build a new items by taking paramteres into the constructor", () => {
        const items = new items([1, 2, 3, 4, 5]);
        expect(items.fetch()).toEqual([1, 2, 3, 4, 5])
    })

})



escribe('total', () => {
        it('should return the total of all items in the cart', () => {
            expect(cart.total()).toBe(0);
            cart.scan(items);
            expect(cart.total()).toBe(4);
            cart.scan(items);
            expect(cart.total()).toBe(9.99);
            cart.remove(items);
            expect(cart.total()).toBe(5.99);
        });
    });

    describe('discount', () => {
        it('should discount all items in the cart according to the given percentage', () => {
            cart.discount(20);
            cart.scan(items);
            expect(cart.total()).toBe(3.2);
            cart.scan(items);
            cart.discount(50);
            expect(cart.total()).toBe(4.6);
        });

        it('should not discount items more than 50%', () => {
            cart.scan(items);
            cart.discount(51);
            expect(cart.total()).toBe(2.6);
            cart.discount(100);
            expect(cart.total()).toBe(2.6);
        });
    });

})