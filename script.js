// Function to process the input text from the boxes
function processText() {
    // Get the values from the text areas
    const text1 = document.getElementById("box1").value;
    const text2 = document.getElementById("box2").value;
    const text3 = document.getElementById("box3").value;

    // Combine and process the text (this is just a simple example)
    const processedText = `${text1}\n\n${text2}\n\n${text3}`;

    // Display the processed text in the result box
    document.getElementById("resultBox").value = processedText;
}

// Event listener for the button click
document.getElementById("processButton").addEventListener("click", processText);