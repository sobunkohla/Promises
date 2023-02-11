// console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))
const emailRef = document.querySelector(".email")
const subStatus = document.querySelector(".subscriptionStatus")
const videoRef = document.querySelector(".video");
//1. Then
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     emailRef.innerHTML = data.email
//   });

//2. Async/Await
async function main() {
   const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
   const data = await response.json()
   emailRef.innerHTML = data.email
}

main()



function getSubscriptionStatus () {
    return new Promise ((resolve ,reject) => {
        setTimeout(() => {
            resolve("FREE")
        }, 2000);
    
    })
}
//then 
// getSubscriptionStatus ().then(
//     response => console.log(response)
// )



// aysnc/await



function getVideo (subscriptionStatus ) {
    return new Promise((resolve, reject) => {
        if (subscriptionStatus=== "VIP") {
           resolve("show video");
        }
        else if (subscriptionStatus=== "FREE") {
            resolve("show Trailer");
        }
        else {
            reject("no video");
        }
        
     
    })
}
async function promise(){
    const status = await getSubscriptionStatus ()
    subStatus.innerHTML = status
 
    try {
     const response = await getVideo(status)
     videoRef.innerHTML = response;
    }
    catch (e) {
        videoRef.innerHTML = e;
    }
    
}

promise()




