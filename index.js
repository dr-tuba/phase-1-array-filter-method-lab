const findMatching = (array, name) => {
    return array.filter(function(el) {
      return el.toLowerCase().indexOf(name.toLowerCase()) !== -1
    })
}

const fuzzyMatch = (array, name) => {
    return array.filter(function(el) {
      return el.toLowerCase().indexOf(name.toLowerCase()) === 0
    })
} 

// const matchName = (array, name) => {
//     let matchedName = [];
//     for (let i=0; i < array.length; i++) {
//         if (array[i].name === name) {
//             matchedName.push(array[i]);
//         }
//     }
//     console.log(matchedName);
// } 

const matchName = (array, name) => {
    let matchedName = array.filter(function(cb) {
        return cb.name === name;
    });
    return matchedName;
}


