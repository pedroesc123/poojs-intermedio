const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse (newCourse) {
        console.log("This", this);
        console.log("This.approvedCourses", this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
};

// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan));

// Object.defineProperty(juan, "", {
//     value: "",
//     enumerable:true,
//     writable: true,
//     configurable:true,
// })


// Object.defineProperty(juan, "pruebaNasa", {
//     value: "Extraterrestres",
//     enumerable:false,
//     writable: false,
//     configurable:false,
// })


// Object.defineProperty(juan, "navigator", {
//     value: "Chrome",
//     enumerable:false,
//     writable: true,
//     configurable:true,
// })


// Object.defineProperty(juan, "editor", {
//     value: "VSCode",
//     enumerable:true,
//     writable: false,
//     configurable:true,
// })


// Object.defineProperty(juan, "terminal", {
//     value: "WSL",
//     enumerable:true,
//     writable: true,
//     configurable:false,
// })

Object.seal(juan);

console.log(Object.getOwnPropertyDescriptors(juan));
