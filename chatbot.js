onEvent("btn", "click", () => {
  const input = getValue("input");
  if (input === "" || !input) {
    setText("output", "Please Enter a message");
    addClass("output", "alert");
    addClass("output", "alert-danger");

    console.log(input);
  } else {
    setText("output", "Thinking...");
    removeClass("output", "alert");
    removeClass("alert-danger");
  }
});
