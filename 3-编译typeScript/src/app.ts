const NUM = 45;

interface Cat {
    name: string,
    age: number
}

function cat(cat: Cat) {
    console.log('cat',cat.name);
}

cat({
    name: 'jack',
    age:17
});