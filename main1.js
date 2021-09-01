const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    }
};

function isObject(subject) {
    return typeof subject == "object";
}

function isArray(subject) {
    return Array.isArray(subject);
}


function deepCopy(subject) {
    let copySubject;

    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);

    if (subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    for (key in subject) {
        const keyIsObject = isObject(subject[key]);

        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]); 
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }

    return copySubject;
}


// const stringifiedComplexObj = JSON.stringify(obj1);
// const obj2 = JSON.parse(stringifiedComplexObj);


//SHALLOW COPY
// const obj2 = {};
// for (prop in obj1) {
//     obj2[prop] = obj1[prop]
// }


// const obj3 = Object.assign({}, obj1);
// const obj4 = Object.create(obj1);