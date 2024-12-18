document.addEventListener("DOMContentLoaded", function () {
  const loginPage = document.getElementById("LoginPage");

  // Create the main container (flexbox)
  const container = document.createElement("div");
  container.classList.add("container");
  loginPage.appendChild(container);

  // Create the left container (for the image)
  const leftContainer = document.createElement("div");
  leftContainer.id = "left-container";
  container.appendChild(leftContainer);

  // Add the new image to the left container
  const leftImage = document.createElement("img");
  leftImage.src =
    "https://cdn.prod.website-files.com/64d1a97b791d8ca9bb004633/65ce1e7dd42d0efa7f6cbd79_LEAP2.webp"; // Provided image URL
  leftImage.alt = "Pinecone Image"; // Alternative text for the image
  leftContainer.appendChild(leftImage);

  // Create the right container (for the form and text)
  const rightContainer = document.createElement("div");
  rightContainer.id = "right-container";
  container.appendChild(rightContainer);

  // Create the big title at the top of the right container
  const title = document.createElement("h1");
  title.textContent = "Welcome to Pinecone";
  rightContainer.appendChild(title);

  // Create the form and elements dynamically
  const form = document.createElement("form");
  const fields = [
    { label: "First Name", id: "firstname", type: "text", name: "firstname" },
    { label: "Last Name", id: "lastname", type: "text", name: "lastname" },
    { label: "Age", id: "age", type: "number", name: "age" },
    { label: "Birthday", id: "birthday", type: "date", name: "birthday" },
    {
      label: "Gender",
      id: "gender",
      type: "select",
      name: "gender",
      options: [
        "",
        "Male",
        "Female",
        "Non-Binary",
        "Prefer not to say",
        "Other",
      ],
    },
    {
      label: "Relationship Status",
      id: "relationship",
      type: "select",
      name: "relationship",
      options: [
        "",
        "Single",
        "In a Relationship",
        "Married",
        "Divorced",
        "Complicated",
        "Prefer not to say",
      ],
    },
    { label: "Username", id: "username", type: "text", name: "username" },
    { label: "Password", id: "password", type: "password", name: "password" },
  ];

  // Create form fields dynamically
  fields.forEach((field) => {
    const div = document.createElement("div");
    div.classList.add("form-group");

    const label = document.createElement("label");
    label.setAttribute("for", field.id);
    label.textContent = field.label;

    div.appendChild(label);

    let input;
    if (field.type === "select") {
      input = document.createElement("select");
      field.options.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        input.appendChild(optionElement);
      });
    } else {
      input = document.createElement("input");
      input.setAttribute("type", field.type);
      input.setAttribute("id", field.id);
      input.setAttribute("name", field.name);
    }

    div.appendChild(input);
    form.appendChild(div);
  });

  // Create submit button
  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  form.appendChild(submitButton);

  // Error message div
  const errorDiv = document.createElement("div");
  errorDiv.classList.add("error");
  form.appendChild(errorDiv);

  // Validation on form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;
    errorDiv.innerHTML = ""; // Clear previous errors

    // Validate each field
    fields.forEach((field) => {
      const input = document.getElementById(field.id);
      if (
        input.value === "" ||
        (field.type === "select" && input.value === "")
      ) {
        isValid = false;
        errorDiv.innerHTML += `<p>${field.label} is required.</p>`;
      }
    });

    if (isValid) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });

  // Append form to the right container
  rightContainer.appendChild(form);

  // Create the bottom text dynamically
  const bottomText = document.createElement("p");
  bottomText.textContent = "Build Your Future";
  bottomText.id = "bottomText";
  rightContainer.appendChild(bottomText); // Add the bottom text after the form
});
