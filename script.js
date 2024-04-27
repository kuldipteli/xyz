const rangeInput = document.querySelectorAll(".range-input input");
priceInput = document.querySelectorAll(".price-input input");
progress = document.querySelector(".slider .progress");
advanced = document.querySelector(".advanced");
let submitButton = document.querySelector(".apply-filter-btn");
let copyButton = document.getElementById('copyButton')
let faq = document.querySelectorAll('.accordion');
let panel = document.querySelector('.panel');
let panel2 = document.querySelector('.panel2');
let panel3 = document.querySelector('.panel3');

var form = document.getElementById("filterForm");
let priceGap = 10;
// api 
let submitBtn = document.getElementById('submitBtn');
let btn1 = document.getElementsByClassName('btn1')
// const submitBtn1 = document.getElementById("submitBtn1")

function hurrey(){
    if(panel.style.maxHeight == "0px"){
        panel.style.maxHeight = "4000px"
        console.log(panel.style.maxHeight)
    }
    else if(panel.style.maxHeight == 0){
        panel.style.maxHeight = "4000px"
    }
    else{
        panel.style.maxHeight = "0px"
        console.log(panel.style.maxHeight)
    }
}
function hurrey2(){
    if(panel2.style.maxHeight == "0px"){
        panel2.style.maxHeight = "4000px"
    }
    else if(panel2.style.maxHeight == 0){
        panel2.style.maxHeight = "4000px"
    }
    else{
        panel2.style.maxHeight = "0px"
    }
}
function hurrey3(){
    if(panel3.style.maxHeight == "0px"){
        panel3.style.maxHeight = "4000px"
    }
    else if(panel3.style.maxHeight == 0){
        panel3.style.maxHeight = "4000px"
    }
    else{
        panel3.style.maxHeight = "0px"
    }
}
  submitBtn.addEventListener('click', () => {
    // Disable button and show loading animation
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
  });
function loadremover(){
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
}
function loadremover1(url){
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            window.open(url);
}
// priceInput.forEach(input  =>{
//     input.addEventListener("input", e =>{
//         let minVal = parseInt(priceInput[0].value),
//         maxVal = parseInt(priceInput[1].value);

//         if((maxVal - minVal >= priceGap) && maxVal <= 100){
//             if(e.target.className === "input-min"){
//                 rangeInput[0].value = minVal;
//                 progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";


//             }
//             else{
//                 rangeInput[1].value = maxVal;
//                 progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
//             }
//         }

//     });

// });

rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap;


            }
            else {
                rangeInput[1].value = minVal + priceGap;
            }
        }
        else {
            // priceInput[0].value = minVal;
            // priceInput[1].value = maxVal;
            advanced.innerHTML = "Discount betweeen " + "<b class="+"greno"+">"+rangeInput[0].value+"% </b>"  + "and " + "<b class="+"greno"+">"+rangeInput[1].value+"% </b>" ;
            progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }

    });

});
// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + "px";
//         }
//     });
// }

// logic for discount value 
// let bigg ;
// if(rangeInput[0].value >= rangeInput[1].value){
//     bigg = rangeInput[0].value ;

// }
// else{
//     bigg = rangeInput[1].value 
// }
form.addEventListener("input", function () {
    var product = document.getElementById('product').value;
    var minBudget = document.getElementById('minBudget').value;
    var maxBudget = document.getElementById('maxBudget').value;
    
    if (product || minBudget || maxBudget) {
        submitButton.removeAttribute("disabled");
        loadremover();
        // submitBtn1.removeAttribute("disabled");
    } else {
        submitButton.setAttribute("disabled", "disabled");
    }
});
function redirectToFlipkart() {
    var discount = rangeInput[1].value;
    // alert("please wait while we are redirecting you")
    if (rangeInput[0].value >= 70) {
        discount = 70;
    }
    var product = document.getElementById('product').value;
    var minBudget = document.getElementById('minBudget').value;
    var maxBudget = document.getElementById('maxBudget').value;

    var sorter;
    if (document.getElementById('shortbySec-1').checked) {
        sorter = document.getElementById('shortbySec-1').value
    }
    else if (document.getElementById('shortbySec-2').checked) {
        sorter = document.getElementById('shortbySec-2').value
    }
    else if (document.getElementById('shortbySec-3').checked) {
        sorter = document.getElementById('shortbySec-3').value
    }
    else if (document.getElementById('shortbySec-4').checked) {
        sorter = document.getElementById('shortbySec-4').value
    }
    else {
        sorter = document.getElementById('shortbySec-5').value
    }
    console.log(discount);
    console.log(rangeInput[1].value + "%");
    var discount = rangeInput[0].value + "%";
    var flipkartAssured = document.getElementById('myonoffswitch').checked ? "true" : "";

    // Construct the URL with parameters
    var url = 'https://www.flipkart.com/search?q=' + encodeURIComponent(product) + '&p%5B%5D=facets.price_range.from%3D' + encodeURIComponent(minBudget) + '&p%5B%5D=facets.price_range.to%3D' + encodeURIComponent(maxBudget) + '&p%5B%5D=facets.discount_range_v1%255B%255D%3D' + encodeURIComponent(discount) + '25%2Bor%2Bmore' + "&p%5B%5D=facets.fulfilled_by" + encodeURIComponent(flipkartAssured ? "%5B%5D%3DPlus" : "") + "%2B%28FAssured%2529&sort=" + encodeURIComponent(sorter);
    // postman api
    fetch('https://earn.pe/api/affsol/conv.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            data: url,
            token: '0AueEu4lCEMNs4EUTqzRKDtSqmbvQTC1',
            mobile_no: '6354176209',
            url_shorten_type: 'dl',
        }),
    })
        .then(response => response.json())
        .then(data => {
            // window.open(data.result
            window.open(data.result)
            // submitBtn.classList.remove('loading');
            // submitBtn.disabled = false;
            loadremover();
        })

        .catch(error => console.error('Error', error));

    // Redirect the user to the constructed URL
    // window.open(data.result);
    console.log(flipkartAssured ? "tulu" : "pulu")
}
function redirectToMyntra() {
    var discount = rangeInput[0].value;
    // alert("please wait while we are redirecting you")
    if (rangeInput[0].value >= 70) {
        discount = 70;
    }
    var product = document.getElementById('product').value;
    var minBudget = document.getElementById('minBudget').value;
    var maxBudget = document.getElementById('maxBudget').value;
    var sorter;
    if(minBudget == "" || maxBudget == ""){
        minBudget = 0;
        maxBudget = 1000000;
    }

    if (document.getElementById('shortbySec-1').checked) {
        sorter = document.getElementById('shortbySec-1').value
    }
    else if (document.getElementById('shortbySec-2').checked) {
        sorter = document.getElementById('shortbySec-2').value
    }
    else if (document.getElementById('shortbySec-3').checked) {
        sorter = document.getElementById('shortbySec-3').value
    }
    else if (document.getElementById('shortbySec-4').checked) {
        sorter = document.getElementById('shortbySec-4').value
    }
    else if (document.getElementById('shortbySec-6').checked) {
        sorter = document.getElementById('shortbySec-6').value
    }
    else if (document.getElementById('shortbySec-7').checked) {
        sorter = document.getElementById('shortbySec-7').value
    }
    else {
        sorter = document.getElementById('shortbySec-5').value
    }
    console.log(discount);
    console.log(rangeInput[1].value + "%");
     // var discount = rangeInput[0].value ;
    // var flipkartAssured = document.getElementById('myonoffswitch').checked ? "true" : "";

    // Construct the URL with parameters
    var url = 'https://www.myntra.com/' + encodeURIComponent(product) + "?rawQuery=" + encodeURIComponent(product) + "&rf=Discount%20Range%3A"+ discount +".0_100.0_"+ discount +".0%20TO%20100.0" + "%3A%3APrice%3A"+ minBudget +".0_"+ maxBudget +".0_"+ minBudget +".0+TO+"+ maxBudget +".0&sort=" + sorter ;
    // postman api
    fetch('https://earn.pe/api/affsol/conv.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            data: url,
            token: '0AueEu4lCEMNs4EUTqzRKDtSqmbvQTC1',
            mobile_no: '6354176209',
            url_shorten_type: 'dl',
        }),
    })
        .then(response => response.json())
        .then(data => {
            // submitBtn.classList.remove('loading');
            // submitBtn.disabled = false;
            window.open(data.result)
            loadremover();
        })

        .catch(error => console.error('Error', error));
        //   window.open(url);
    // Redirect the user to the constructed URL
    // window.open(data.result);
    // console.log(flipkartAssured ? "tulu" : "pulu")
}
function redirectToAmazon() {
    var discount = rangeInput[1].value;
    var discount1 = rangeInput[0].value;
    if (rangeInput[0].value >= 70) {
        discount1 = 70;
    }
    
    // alert("please wait while we are redirecting you")
    
    var product = document.getElementById('product').value;
    var minBudget = document.getElementById('minBudget').value;
    var maxBudget = document.getElementById('maxBudget').value;
    if(minBudget== "" || maxBudget == ""){
        minBudget= 0;
        maxBudget= 99999;
    }
    var sorter;
    if (document.getElementById('shortbySec-1').checked) {
        sorter = document.getElementById('shortbySec-1').value
    }
    else if (document.getElementById('shortbySec-2').checked) {
        sorter = document.getElementById('shortbySec-2').value
    }
    else if (document.getElementById('shortbySec-3').checked) {
        sorter = document.getElementById('shortbySec-3').value
    }
    else if (document.getElementById('shortbySec-4').checked) {
        sorter = document.getElementById('shortbySec-4').value
    }
    else {
        sorter = document.getElementById('shortbySec-5').value
    }
    console.log(discount);
    console.log(rangeInput[1].value + "%");
    // var discount = rangeInput[1].value ;
    var flipkartAssured = document.getElementById('myonoffswitch').checked ? "&rh=p_85%3A10440599031%2" : "";

    // Construct the URL with parameters
    var url = "https://www.amazon.in/s?k=" + product + "&rh=p_36%3A"+ minBudget+"00-"+ maxBudget+"00" + flipkartAssured +"%2Cp_n_pct-off-with-tax%3A"+ discount1 +"-"+ discount   + "&s=" + sorter + "&tag=kuldiploot-21";
    // postman api
    // fetch('https://earn.pe/api/affsol/conv.php', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     body: new URLSearchParams({
    //         data: url,
    //         token: '0AueEu4lCEMNs4EUTqzRKDtSqmbvQTC1',
    //         mobile_no: '6354176209',
    //         url_shorten_type: 'dl',
    //     }),
    // })
    //     .then(response => response.json())
    //     .then(data => {
    //         // window.open(data.result
    //         window.open(data.result)
    //         submitBtn.classList.remove('loading');
    //         submitBtn.disabled = false;
    //     })

    //     .catch(error => console.error('Error', error));

    // Redirect the user to the constructed URL
    
    window.open(url);
    // loadremover();
    // loadremover1(url);
    console.log(submitBtn)
    console.log(flipkartAssured ? "tulu" : "pulu")
}


// document.addEventListener('DOMContentLoaded', function () {
//     // event.preventDefault();
//     if (rangeInput[1].value >= 70) {
//         rangeInput[1].value = 70;
//     }
//     var copyButton = document.getElementById('copyButton');
//     var product = document.getElementById('product').value;
//     var minBudget = document.getElementById('minBudget').value;
//     var maxBudget = document.getElementById('maxBudget').value;
//     var sorter;
//     if (document.getElementById('shortbySec-1').checked) {
//         sorter = document.getElementById('shortbySec-1').value
//     }
//     else if (document.getElementById('shortbySec-2').checked) {
//         sorter = document.getElementById('shortbySec-2').value
//     }
//     else if (document.getElementById('shortbySec-3').checked) {
//         sorter = document.getElementById('shortbySec-3').value
//     }
//     else if (document.getElementById('shortbySec-4').checked) {
//         sorter = document.getElementById('shortbySec-4').value
//     }
//     else {
//         sorter = document.getElementById('shortbySec-5').value
//     }

//     console.log(sorter)
//     var discount = rangeInput[1].value;
//     console.log(discount);
//     console.log(rangeInput[1].value + "%");
//     var discount = rangeInput[1].value + "%";
//     var flipkartAssured = document.getElementById('myonoffswitch').checked ? "true" : "";

//     // Construct the URL with parameters
//     var url = 'https://www.flipkart.com/search?q=' + encodeURIComponent(product) + '&p%5B%5D=facets.price_range.from%3D' + encodeURIComponent(minBudget) + '&p%5B%5D=facets.price_range.to%3D' + encodeURIComponent(maxBudget) + '&p%5B%5D=facets.discount_range_v1%255B%255D%3D' + encodeURIComponent(discount) + '25%2Bor%2Bmore' + "&p%5B%5D=facets.fulfilled_by" + encodeURIComponent(flipkartAssured ? "%5B%5D%3DPlus" : "") + "%2B%28FAssured%2529" + encodeURIComponent(sorter);




//     copyButton.addEventListener('click', function (event) {
//         // Prevent the default form submission behavior
//         event.preventDefault();

//         // Copy the link text to the clipboard
//         navigator.clipboard.writeText(linkText).then(function () {
//             alert('Link copied to clipboard!');
//             console.log(url)
//         }, function (err) {
//             console.error('Unable to copy: ', err);
//         });
//     });
// });

    submitButton.addEventListener('click',function(event){
        event.preventDefault();
    })
    
    copyButton.addEventListener('click',function(event){
            event.preventDefault();
    })
    function copyLink() {
       var discount = rangeInput[1].value + "%";
       // alert("please wait while we are redirecting you")
       if (rangeInput[0].value >= 70) {
          discount = 70 + "%";
       }
        var product = document.getElementById('product').value;
        var minBudget = document.getElementById('minBudget').value;
        var maxBudget = document.getElementById('maxBudget').value;
        
        var sorter;
        if (document.getElementById('shortbySec-1').checked) {
            sorter = document.getElementById('shortbySec-1').value
        }
        else if (document.getElementById('shortbySec-2').checked) {
            sorter = document.getElementById('shortbySec-2').value
        }
        else if (document.getElementById('shortbySec-3').checked) {
            sorter = document.getElementById('shortbySec-3').value
        }
        else if (document.getElementById('shortbySec-4').checked) {
            sorter = document.getElementById('shortbySec-4').value
        }
        else {
            sorter = document.getElementById('shortbySec-5').value
        }
        console.log(discount);
        console.log(rangeInput[1].value + "%");
        // var discount = rangeInput[1].value + "%";
        var flipkartAssured = document.getElementById('myonoffswitch').checked ? "true" : "";
    
        // Construct the URL with parameters
        var url = 'https://www.flipkart.com/search?q=' + encodeURIComponent(product) + '&p%5B%5D=facets.price_range.from%3D' + encodeURIComponent(minBudget) + '&p%5B%5D=facets.price_range.to%3D' + encodeURIComponent(maxBudget) + '&p%5B%5D=facets.discount_range_v1%255B%255D%3D' + encodeURIComponent(discount) + '25%2Bor%2Bmore' + "&p%5B%5D=facets.fulfilled_by" + encodeURIComponent(flipkartAssured ? "%5B%5D%3DPlus" : "") + "%2B%28FAssured%2529&sort=" + encodeURIComponent(sorter);
        // postman api
        fetch('https://earn.pe/api/affsol/conv.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                data: url,
                token: '0AueEu4lCEMNs4EUTqzRKDtSqmbvQTC1',
                mobile_no: '6354176209',
                url_shorten_type: 'dl',
            }),
        })
            .then(response => response.json())
            .then(data => {
                // window.open(data.result
                // window.open(data.result)
                var copyText = data.result;
                // copyText.select();
                // copyText.setSelectionRange(0, 99999);
                navigator.clipboard.writeText(copyText);
                // alert("Copied the text: " + copyText);
                copyButton.innerHTML = "copied"
                console.log(copyText.value)
                setTimeout(() => {
                    copyButton.innerHTML = "Copy Link"
                }, 2000);
                // submitBtn.classList.remove('loading');
                // submitBtn.disabled = false;
            })
    
            .catch(error => console.error('Error', error));
    
        // Redirect the user to the constructed URL
        // window.open(data.result);
        // console.log(flipkartAssured ? "tulu" : "pulu")
        // Get the text field
        // var copyText = document.getElementById("myInput");
      
        // Select the text field
        // copyText.select();
        // copyText.setSelectionRange(0, 99999); // For mobile devices
      
         // Copy the text inside the text field
        // navigator.clipboard.writeText(copyText.value);
      
        // Alert the copied text
        // alert("Copied the text: " + copyText.value);
      }
      function copyLink1() {
        // alert("please wait while we are redirecting you")
        var discount = rangeInput[0].value;
        // alert("please wait while we are redirecting you")
        if (rangeInput[0].value >= 70) {
            discount = 70;
        }
        var product = document.getElementById('product').value;
        var minBudget = document.getElementById('minBudget').value;
        var maxBudget = document.getElementById('maxBudget').value;
       
        var sorter;
        if(minBudget == "" || maxBudget == ""){
            minBudget = 0;
            maxBudget = 1000000;
        }
    
        if (document.getElementById('shortbySec-1').checked) {
            sorter = document.getElementById('shortbySec-1').value
        }
        else if (document.getElementById('shortbySec-2').checked) {
            sorter = document.getElementById('shortbySec-2').value
        }
        else if (document.getElementById('shortbySec-3').checked) {
            sorter = document.getElementById('shortbySec-3').value
        }
        else if (document.getElementById('shortbySec-4').checked) {
            sorter = document.getElementById('shortbySec-4').value
        }
        else if (document.getElementById('shortbySec-6').checked) {
            sorter = document.getElementById('shortbySec-6').value
        }
        else if (document.getElementById('shortbySec-7').checked) {
            sorter = document.getElementById('shortbySec-7').value
        }
        else {
            sorter = document.getElementById('shortbySec-5').value
        }
        console.log(discount);
        console.log(rangeInput[1].value + "%");
        // var flipkartAssured = document.getElementById('myonoffswitch').checked ? "true" : "";
    
        // Construct the URL with parameters
         var url = 'https://www.myntra.com/' + encodeURIComponent(product) + "?rawQuery=" + encodeURIComponent(product) + "&rf=Discount%20Range%3A"+ discount +".0_100.0_"+ discount +".0%20TO%20100.0" + "%3A%3APrice%3A"+ minBudget +".0_"+ maxBudget +".0_"+ minBudget +".0+TO+"+ maxBudget +".0&sort=" + sorter ;
        // postman api
        fetch('https://earn.pe/api/affsol/conv.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                data: url,
                token: '0AueEu4lCEMNs4EUTqzRKDtSqmbvQTC1',
                mobile_no: '6354176209',
                url_shorten_type: 'dl',
            }),
        })
            .then(response => response.json())
            .then(data => {
                // submitBtn.classList.remove('loading');
                // submitBtn.disabled = false;
                var copyText = data.result;
                // copyText.select();
                // copyText.setSelectionRange(0, 99999);
                navigator.clipboard.writeText(copyText);
                // alert("Copied the text: " + copyText);
                copyButton.innerHTML = "copied"
                console.log(copyText.value)
                setTimeout(() => {
                    copyButton.innerHTML = "Copy Link"
                }, 2000);
            })
    
            .catch(error => console.error('Error', error));
            //   window.open(url);
        // Redirect the user to the constructed URL
        // window.open(data.result);
        // console.log(flipkartAssured ? "tulu" : "pulu")
    }
    function copyLink2() {
        // alert("please wait while we are redirecting you")
         var discount = rangeInput[1].value;
         var discount1 = rangeInput[0].value;
         if (rangeInput[1].value >= 70) {
             discount  = 70;
         }
         if (rangeInput[0].value >= 70) {
              discount1 = 70;
         }
    
        var product = document.getElementById('product').value;
        var minBudget = document.getElementById('minBudget').value;
        var maxBudget = document.getElementById('maxBudget').value;
        if(minBudget== "" || maxBudget == ""){
            minBudget= 0;
            maxBudget= 99999;
        }
        
        var sorter;
        if (document.getElementById('shortbySec-1').checked) {
            sorter = document.getElementById('shortbySec-1').value
        }
        else if (document.getElementById('shortbySec-2').checked) {
            sorter = document.getElementById('shortbySec-2').value
        }
        else if (document.getElementById('shortbySec-3').checked) {
            sorter = document.getElementById('shortbySec-3').value
        }
        else if (document.getElementById('shortbySec-4').checked) {
            sorter = document.getElementById('shortbySec-4').value
        }
        else {
            sorter = document.getElementById('shortbySec-5').value
        }
        console.log(discount);
        console.log(rangeInput[1].value + "%");
        // var discount = rangeInput[1].value ;
        var flipkartAssured = document.getElementById('myonoffswitch').checked ? "&rh=p_85%3A10440599031%2" : "";
    
        // Construct the URL with parameters
           var url = "https://www.amazon.in/s?k=" + product + "&rh=p_36%3A"+ minBudget+"00-"+ maxBudget+"00" + flipkartAssured +"%2Cp_n_pct-off-with-tax%3A"+ discount1 +"-"+ discount   + "&s=" + sorter + "&tag=kuldiploot-21";
        // postman api
        // postman api
        // fetch('https://earn.pe/api/affsol/conv.php', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     body: new URLSearchParams({
        //         data: url,
        //         token: '0AueEu4lCEMNs4EUTqzRKDtSqmbvQTC1',
        //         mobile_no: '6354176209',
        //         url_shorten_type: 'dl',
        //     }),
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         // window.open(data.result
        //         window.open(data.result)
        //         submitBtn.classList.remove('loading');
        //         submitBtn.disabled = false;
        //     })
    
        //     .catch(error => console.error('Error', error));
    
        // Redirect the user to the constructed URL
        
        var copyText = url;
                // copyText.select();
                // copyText.setSelectionRange(0, 99999);
                navigator.clipboard.writeText(copyText);
                // alert("Copied the text: " + copyText);
                copyButton.innerHTML = "copied"
                console.log(copyText)
                setTimeout(() => {
                    copyButton.innerHTML = "Copy Link"
                }, 2000);
        // loadremover();
        // loadremover1(url);
        console.log(submitBtn)
        console.log(flipkartAssured ? "tulu" : "pulu")
    }
