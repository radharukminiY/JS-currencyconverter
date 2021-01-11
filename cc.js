var url = "https://api.exchangeratesapi.io/latest?base=";

function convert(){
    var base = document.getElementById('base').value;
    var out = document.getElementById('out').value;
    var amount = document.getElementById('amount').value;
    console.log(`${url}${base}`);
    fetch(`${url}${base}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        var final = data.rates[out];
        final = final*amount
        var result = `Converted value of ${amount} ${base} is ${final} ${out}`;
        document.getElementById('output').innerText = result
    })
    .catch((err) =>  {console.log(err)})
}
