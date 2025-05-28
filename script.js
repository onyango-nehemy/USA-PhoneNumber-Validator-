const checkBtn=document.getElementById("check-btn");

checkBtn.onclick=checkInput;

//checking userinput

function checkInput(){
   const userInput = document.getElementById("user-input").value.trim();
  if(userInput===""){
    alert("Please provide a phone number");
    return;
  }

  //regular expression for a regular expression

  const usPattern = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;
  const resultDiv = document.getElementById("results-div");
      if (usPattern.test(userInput)) {
      resultDiv.textContent = `Valid US number: ${userInput}`;
      resultDiv.style.color = "green";
    } else {
      resultDiv.textContent = `Invalid US number: ${userInput}`;
      resultDiv.style.color = "red";
    }
  }
    document.getElementById("clear-btn").onclick = () => {
    document.getElementById("user-input").value = "";
    document.getElementById("results-div").textContent = "";


  
    }