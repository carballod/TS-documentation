(() => {

    class Apocalipsis {

        static instance: Apocalipsis;

        private constructor( public name: string ) {}

        static callApocalipsis(): Apocalipsis {
            if( !Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis... el unico');
            }
            return Apocalipsis.instance;
        }

        changeName( newName: string ): void {
            this.name = newName;
        }
    
    }

    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    apocalipsis1.changeName('Xavier')

    // const apocalipsis1 = new Apocalipsis('Soy Apocalipsis1... el unico y verdadero!');
    // const acapocalipsis2 = new Apocalipsis('Soy Apocalipsis2... el unico y verdadero!');
    // const acapocalipsis3 = new Apocalipsis('Soy Apocalipsis3... el unico y verdadero!');


    console.log(apocalipsis1, apocalipsis2, apocalipsis3)



})()