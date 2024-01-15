"use strict";

// ELEMENT/S
const inputEl = document.querySelector(".header__input");
const inputContainerEl = document.querySelector(".header__input-container");
const submitBtnEl = document.querySelector(".header__button");

// FUNCTION/S
function addError() {
	inputContainerEl.classList.add("error");
}

function removeError() {
	inputContainerEl.classList.remove("error");
}

function validateInput(email) {
	// -- Email validation regex
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	// -- Testing the email, returns true if valid. Else, false
	return emailRegex.test(email);
}

function handleValdation() {
	const isValid = validateInput(inputEl.value);

	if (!isValid) {
		addError();
	} else {
		removeError();
	}
}

// EVENT LISTENER/S
submitBtnEl.addEventListener("click", handleValdation);

inputEl.addEventListener("keyup", (e) => {
	if (e.key === "Enter") {
		handleValdation();
	}
});
