let k = 0;
let str = 'ABCDDCDCADBDBCBAACBBCAABCA';

for (let i = 0; i < str.length - 1; i++) {

    if (str[i - 1] + str[i] === 'BC') {

        k++;

    }

}

console.log(k);