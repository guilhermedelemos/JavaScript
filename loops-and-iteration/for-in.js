function dump_props(obj, obj_name) {
    let result = '';
    for (let i in obj) {
      result += obj_name + '.' + i + ' = ' + obj[i] + ', ';
    }
    return result;
}
let car = { make: 'Ford', model: 'Mustang' }
let result = dump_props(car, 'car');
console.log(`Result: ${result}`);