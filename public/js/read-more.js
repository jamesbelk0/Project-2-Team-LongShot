async function readMoreHandler(event) {
    event.preventDefault();

    console.log("read button");

    const response = await fetch("/post/2", {
        method: "post",
        headers: { "Content-Type": "application/json" }
      });
    
    //   if(response.ok){
    //     //return to the homepage route
    //     // document.location.replace("/");
    //   } else {
    //     alert(response.statusText);
    //   }
  }
  
  document.getElementById('read-button').addEventListener('click', readMoreHandler);