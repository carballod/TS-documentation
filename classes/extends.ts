(() => {

    class Avenger {
        constructor(public name: string, public realName: string) {
            console.log('Constructor Avenger llamado!'); 
        }

        protected getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {

        constructor( name: string, realName: string, public isMutant: boolean ) {
            super('Wolverine', 'Logan');
            console.log('Constructor Xmen llamado!');
        }

        get fullName() {
            return `${this.name} - ${this.realName}`;
        }

        set fullName( name: string ) {
            if ( name.length < 3 ) {
                throw new Error('El nombre debe ser mayor a 3 caracteres');
            }

            this.name = name;
        }

        getFullNameDesdeXmen() {
            console.log( super.getFullName() );
            
        }

    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);

    console.log(wolverine);
    wolverine.getFullNameDesdeXmen();

    console.log(wolverine.fullName);
    wolverine.fullName = 'Saludos che soy el wolverine';
    console.log(wolverine.fullName);
    

    const nuevoAvenger = new Avenger('Capitan America', 'Steve Rogers')
    


})()