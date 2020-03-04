function submitButton(){
    $(".submitform").on("submit", event =>{
        event.preventDefault();
        $(".repo-results").empty()
        let userInput = $(".usernameinput").val()
        console.log(userInput);
        console.log("submitButton"); 
    })
    }
    submitButton();