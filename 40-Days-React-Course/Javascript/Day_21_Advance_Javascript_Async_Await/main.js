// async function GetData() {
    // let response = await fetch("https://api.github.com/users/Aestheticsuraj234")
    // let data = await response.json()
    // return data
// }

// async function main(){
//     let data = await GetData()
//     console.log(data);
// }

// main()


// async function runProcess()
// {
//     try{
//         let response = await fetch("https://api.github.com/users/Aestheticsuraj234")
//         let data = await response.json()
//         console.log(data)
//     }
//     catch(error){
//         console.log(error);
//     }
//     finally{
//         console.log("I am Finally and always run");
//     }
// }
// runProcess()


async function runProcess()
{
    try{
        let response = await fetch("https://api.github.com/users/Aestheticsuraj234" , {
            method : "POST",
            headers:"application/json",
            body:JSON.stringify({
                title:"HELLO",
                body:"I am Suraj",
                userId:2
            })
        })
        let data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("I am Finally and always run");
    }
}
runProcess()



