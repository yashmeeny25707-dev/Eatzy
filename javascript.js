const form = document.querySelector(".contact-form");
if (form) {
    form.onsubmit = function (event) {
        event.preventDefault();
        alert("Message sent!");
        form.reset();
    };
}

const input = document.querySelector(".input-location input");
if (input) {
    input.onkeypress = function (event) {
        if (event.key === "Enter") {
            alert("Searching for: " + input.value);
        }
    };
}
