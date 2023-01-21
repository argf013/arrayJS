// nested array object

const user = {
   name: 'rizal',
   age: 20,
   links: [
            {
            name: 'Facebook',
            url: 'fb.com/abcde'
            }
   ]
}

const { links: [ { name, url } ] } = user

console.log(name, url)
//Facebook fb.com/abcde
