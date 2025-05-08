    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper == false) {
            return input.toLocaleLowerCase();
        }
        else if (!toUpper) {
            return input.toUpperCase()
        }
        else {
            return input.toUpperCase();
        }
    }



    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
        const result = items.filter(item => item.rating >= 4)
        return result;
    }



    function concatenateArrays<T>(...arrays: T[][]): T[] {
        const result: T[] = [];
        for (const array of arrays) {
            result.push(...array)
        }
        return result;
    }



    class Vehicle {
        private make: string;
        private year: number;

        constructor(make: string, year: number) {
            this.make = make;
            this.year = year;
        }

        getInfo() {
            return console.log(`Make: ${this.make}, Year: ${this.year}`)
        }
    }

    class Car extends Vehicle {

        private model: string;

        constructor(make: string, year: number, model: string) {
            super(make, year);
            this.model = model;
        }

        getModel() {
            return console.log(`Model: ${this.model}`)
        }
    }



    function processValue(value: string | number): number {
        if (typeof value === 'string') {
            return value.length;
        }
        else {
            return value * 2;
        }
    }



    interface Product {
        name: string;
        price: number;
    }

    function getMostExpensiveProduct(products: Product[]): Product | null {
        if (products.length === 0) {
            return null;
        }

        const result = products.reduce((previous, present): Product => {
            return present.price > previous.price ? present : previous;
        }, products[0])

        return result;
    }



    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    function getDayType(day: Day): string {

        if (day === Day.Saturday || day === Day.Sunday) {
            return "Weekend"
        }

        return "Weekday"

    }


    
    async function squareAsync(n: number): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            if (n < 0) {
                reject("Negative number not allowed")
            } else {
                setTimeout(() => {
                    resolve(n * n)
                }, 1000)
            }
        })
    }

