(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress(id: string): string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Daniela',
        age: 24,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'London'
        },
        getFullAddress(id: string) {
            return `${this.address.city}, ${this.address.zip}, ${id}`;
        }
    }

    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'M5J 2N8'
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    }


})()