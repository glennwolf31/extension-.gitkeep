console.log("Mirror TikTok Content Script Running");

// Example: Extract text from a TikTok video page
document.addEventListener("DOMContentLoaded", () => {
    let captions = document.querySelectorAll("p"); // Example: Grabbing text
    captions.forEach(cap => console.log(cap.innerText));
});
