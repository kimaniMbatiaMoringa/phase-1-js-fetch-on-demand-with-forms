/*************************************************************** 
    To post data using the fetch request, we need to specifty:
    1. The Destination URL
    2. A configuration object that sets what data we are posting
    and how that data is to be read:

    fetch(destinationURL, configurationObject) 

****************************************************************/

//Lets create a dog object to post to the json object array:

//const formData={
//    dogName:"Murembo",
//    dogBreed: "Toypom",
//};

// Now lets setup our configuration object:

//const configurationObject={
//    method: "POST",                                 //Sets this fetch request to use the "POST" functionality
//    headers:{
//        "Content-Type": "application/json",
//        Accept: "application/json"
//    },
//     body: JSON.stringify({                      //Data being sent in fetch() must be stored in the body of the configuration object
//        dogName: "Byron",
//        dogBreed: "Poodle"
//    }),

//OR

//    body: JSON.stringify(formData)

//    }

//Now lets create a fetch request with the directory to the JSON object and add our configuration object

//fetch ("http://localhost:3000/dogs", configurationObject)
//    .then(function(response) {
//        return response.json()                      //Returns a Json Object as a plain old java object
//   })
//    .then(function(object) {
//        console.log(object)                         //The returned Plain javascript object is then logged in the console
//    })
//    .catch(function (error) {
//        alert("Bad things! Ragnarok!");
//        console.log(error.message)
//    })

function submitData(userName, userEmail){

/*     let newUser = {
        "name":"Steve",
        "email": "steve@steve.com"
    } */

    let newUser = {
        "name": `${userName}`,
        "email" : `${userEmail}`
    }

    const postConfigurationObject ={
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(newUser)
    }

    fetch("http://localhost:3000/users", postConfigurationObject)
        .then(function (res){
            return res.json()
        })
        .then((object)=>{
            let id = document.createElement("h2");
            document.body.appendChild(id);
            id.innerHTML = object.id;
        })
        .catch(function(obj){
            alert(obj.message)
            let msgCont = document.createElement('span');
            msgCont.innerHTML = obj.message;
            document.body.append(msgCont)
        })
}

submitData("Steve", "steve@steve.com")

.catch((error)=>{
    let erMes = document.createElement("h3");
    document.body.appendChild(erMes)
    erMes.innerHTML= error.message;     
}); 