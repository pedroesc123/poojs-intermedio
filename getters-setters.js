function requireParam (param){
    throw new Error(param + " es obligatorio.");
}

function createStudent({
    name = requireParam("name"),
    email,
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}) {
    const private = {
        "_name": name,
    };

    const public = {
        email,
        age,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
        get name() {
            return private["_name"];
        },
        set name(newName) {
            if (newName.length != 0){
                private["_name"] = newName;
            } else {
                console.warn("Tu nombre debe tener al menos 1 caracter.")
            }
        }
        // readName() {
        //     return private["_name"];
        // },
        // changeName(newName) {
        //     private["_name"] = newName;
        // },
    };

    // Object.defineProperty(public, "readName", {
    //     configurable: false,
    //     writable: false, //Nos sirve para proteger nuestra propiedad readName.
    // })

    return public;
}

const juan = createStudent({name: "Juanito", email: "asdadasd.com"});