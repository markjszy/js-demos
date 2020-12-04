// Video: `window.prompt`, `window.alert`; `window.confirm` putting all this all together


// demonstration purposes -- one way of writing/using an infinite loop
for (;;) {
    let userVal = window.confirm("Do you agree?");
    if (userVal) {
        window.alert("you agreed")
        break;
    } else { 
        window.alert("apparently you disagree")
    }
}