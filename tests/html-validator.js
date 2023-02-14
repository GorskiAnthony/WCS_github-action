import { w3cHtmlValidator } from "w3c-html-validator";

const options = { ignoreLevel: "info" };

// Validate 'home page'
w3cHtmlValidator
	.validate({ ...options, filename: "./src/index.html" })
	.then(w3cHtmlValidator.reporter);

// Validate 'contact page'
w3cHtmlValidator
	.validate({ ...options, filename: "./src/contact.html" })
	.then(w3cHtmlValidator.reporter);
