const bench = require('nanobench');
const curry = require('../lib/curry').default;

const add3 = (a, b, c) => a + b + c
bench('add3 50,000 times', b => {
    b.start();
    for (let i = 0; i < 50000; i++) {
        add3(
            Math.random(),
            Math.random(),
            Math.random(),
        );
    }
    b.end();
});

bench('curried 50,000 times', b => {
    b.start();
    for (let i = 0; i < 50000; i++) {
        curry(add3)
            (Math.random())
            (Math.random())
            (Math.random());
    }
    b.end();
});


const add10 = (a, b, c, d, e, f, g, h, i, j) => a + b + c + d + e + f + g + h + i + j;
bench('add10 50,000 times', b => {
    b.start();
    for (let i = 0; i < 50000; i++) {
        add10(
            Math.random(),
            Math.random(),
            Math.random(),
            Math.random(),
            Math.random(),
            Math.random(),
            Math.random(),
            Math.random(),
            Math.random(),
            Math.random(),
        );
    }
    b.end();
});

bench('curried 50,000 times', b => {
    b.start();
    for (let i = 0; i < 50000; i++) {
        curry(add10)
            (Math.random())
            (Math.random())
            (Math.random())
            (Math.random())
            (Math.random())
            (Math.random())
            (Math.random())
            (Math.random())
            (Math.random())
            (Math.random());
    }
    b.end();
});
