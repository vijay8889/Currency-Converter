const select=document.querySelectorAll(".currency");
const btn=document.getElementById("btn");
const input=document.getElementById("input");
const output=document.getElementById("output");
const fetchCurrency = async() => {
    try{
        const res = await fetch("http://api.exchangeratesapi.io/v1/latest?access_key=7abc39aed9ef2f462d62c7215e006a0c");
        const data =await res.json();
        var select = document.getElementById('source_curr');
        var select1 = document.getElementById('result_curr');
        if(data) {
            var arr = Object.keys(data.rates);
            for(var i=0;i<arr.length;i++) {
                select.options[i].text = arr[i];
                select1.options[i].text = arr[i];
            }
        }
    }
    catch(err) {}
} 
fetchCurrency();
