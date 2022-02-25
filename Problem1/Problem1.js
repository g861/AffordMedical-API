const express = require('express') ;
const http = require('http')
const app = express() ;
const axios = require('axios') ; 



const getprimes = () =>{
  return new Promise((resolve,reject) => {
    const Numberdata =  axios.get('http://localhost:8090/primes')
    .then(result =>{
      arr = result.data.numbers;
      arr.sort(function(a, b) {
        return a - b;
      });

      console.log("The arr is ",arr);
      
      resolve(arr);
      } )
      .catch(error => {
        console.log(error)
        reject(error);
      });
  });
}  

const getfibo = () =>{
  return new Promise((resolve,reject) => {
    const Numberdata =  axios.get('http://localhost:8090/fibo')
    .then(result =>{
      arr = result.data.numbers;
      arr.sort(function(a, b) {
        return a - b;
      })
      console.log("The arr is ",arr);
      
      resolve(arr);
      } )
      .catch(error => {
        console.log(error)
        reject(error);
      });
  });
}  

const getodd = () =>{
  return new Promise((resolve,reject) => {
    const Numberdata =  axios.get('http://localhost:8090/fibo')
    .then(result =>{
      arr = result.data.numbers;
      arr.sort(function(a, b) {
        return a - b;
      })
      console.log("The arr is ",arr);
      
      resolve(arr);
      } )
      .catch(error => {
        console.log(error)
        reject(error);
      });
  });
}  

const getrand = () =>{
  return new Promise((resolve,reject) => {
    const Numberdata =  axios.get('http://localhost:8090/fibo')
    .then(result =>{
      console.log(result.data.numbers);
      resolve(result.data.numbers);
      } )
      .catch(error => {
        console.log(error)
        reject(error);
      });
  });
}  


app.get('/primes',(req,res) =>{
  getprimes().then(result => {
    res.json(result);
  })
  .catch((err) => {
    res.json(err);
  });
})
app.get('/fibo',(req,res) =>{
  getfibo().then(result => {
    res.json(result);
  })
  .catch((err) => {
    res.json(err);
  });
})

app.get('/odd',(req,res) =>{
  getodd().then(result => {
    res.json(result);
  })
  .catch((err) => {
    res.json(err);
  });
})
app.get('/rand',(req,res) =>{
  getrand().then(result => {
    res.json(result);
  })
  .catch((err) => {
    res.json(err);
  });
})
app.listen('5000',() => {
  console.log(`The server is started at http://localhost:${5000}`)
})