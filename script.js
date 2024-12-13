// Function to create authentication token
async function createAuthToken() {
    // Get the values from the text areas
    const api_key = document.getElementById("box1").value;
    const access_key = document.getElementById("box2").value;
    const domain_name = document.getElementById("box3").value;
    const secret_key = document.getElementById("box4").value;

    // Create the HMAC signature
    const encoder = new TextEncoder();
    const keyData = encoder.encode(secret_key);
    const msgData = `${domain_name}.macmms.com/api/?service=cmms&appKey=${api_key}&accessKey=${access_key}&signatureMethod=HmacSHA256&signatureVersion=1`;

    // Import the secret as a cryptographic key
    const key = await crypto.subtle.importKey(
        "raw", keyData, { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign"]
    );

    // Sign the message using HMAC
    const signature = await crypto.subtle.sign("HMAC", key, msgData);

    // Convert the signature to a hexadecimal string
    const signatureArray = new Uint8Array(signature);
    const signatureHex = Array.from(signatureArray).map(byte => byte.toString(16).padStart(2, '0')).join('');

    // Display the processed text in the result box
    document.getElementById("resultBox").value = signatureHex;
}

// Event listener for the button click
document.getElementById("processButton").addEventListener("click", createAuthToken);