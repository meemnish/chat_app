var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++)         //to open and close the chat block smoothly
{
    coll[i].addEventListener("click", function () 
    {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) 
        {
            content.style.maxHeight = null;    //if true then change to null
        } 
        else 
        {
            content.style.maxHeight = content.scrollHeight + "px";  //else we want to expand it
        }

    });                                // open and close the chatbox
}

function getTime()                     // to set the current timespan
{                   
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10)                     // add a 0 before single digit hours
    {
        hours = "0" + hours;            // for example, 5:20 will be 05:20
    }

    if (minutes < 10)                   // add a 0 before single digit minute
    {                                  
        minutes = "0" + minutes;        // for example, 5:20 will be 05:20
    }

    let time = hours + ":" + minutes;   //retrieve the time and place it at the top of the message
    return time;
}

 
function firstBotMessage() {                      //inserting the first message in the chatbox
    let firstMessage = "Hi. I'm CSE library's AI agent, how can I help you?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';
                                                  
    let time = getTime();                         //retrieve the time

    $("#chat-timestamp").append(time);            //jquery
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();                                //calls the first message immediately as soon as we open the chatbox


function getHardResponse(userText) {              //Retrieves the response
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}


function getResponse()                            //Gets the text text from the input box and processes it
{
    let userText = $("#textInput").val();

    if (userText == "") 
    {
        userText = "I love Code Palace!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => 
    {
        getHardResponse(userText);
    }, 1000)

}


function buttonSendText(sampleText)            // Handles sending text via button clicks
{
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton()                           // when send button is clicked
{
    getResponse();
}

function heartButton()                          // when heart button is clicked
{
    buttonSendText("Heart clicked!")
}


$("#textInput").keypress(function (e)           // Press enter to send a message
{
    if (e.which == 13) {
        getResponse();
    }
});