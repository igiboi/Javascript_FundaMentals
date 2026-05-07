const form = document.getElementById('form');
const fullNameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const orderNoInput = document.getElementById("order-no");
const productCodeInput = document.getElementById("product-code");
const quantityInput = document.getElementById("quantity");
const complaintDescriptionInput = document.getElementById("complaint-description");
const complaintCheckboxes = document.querySelectorAll(
  'input[name="complaint"]',
);
const otherComplaint = document.getElementById('other-complaint');
const complaintGroup = document.getElementById('complaints-group');
const solutionDescriptionInput = document.getElementById("solution-description");
const solutionCheckboxes = document.querySelectorAll(
  'input[name="solutions"]',
);
const otherSolution = document.getElementById('other-solution');
const solutionGroup = document.getElementById("solutions-group");



function validateForm() {
  const isValidName = fullNameInput.value.trim() !== "";
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
  const isValidOrderNo = /^2024\d{6}$/.test(orderNoInput.value);
  const isValidProductCode = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/.test(productCodeInput.value);
  const isValidQuantity = Number(quantityInput.value) > 0 && Number.isInteger(Number(quantityInput.value));
  const isValidComplaintsGroup = Array.from(complaintCheckboxes).some(
    (checkbox) => checkbox.checked,
  );
  const isValidSolutionGroup = Array.from(solutionCheckboxes).some((checkbox => checkbox.checked));
  const isValidComplaintDescription = !otherComplaint.checked
    ? true
    : complaintDescriptionInput.value.length >= 20;
  const isValidSolutionDescription = !otherSolution.checked ? true : solutionDescriptionInput.value.length >= 20;
  
  return {
    "full-name": isValidName,
    email: isValidEmail,
    "order-no": isValidOrderNo,
    "product-code": isValidProductCode,
    quantity: isValidQuantity,
    "complaints-group": isValidComplaintsGroup,
    "solutions-group": isValidSolutionGroup,
    "complaint-description": isValidComplaintDescription,
    "solution-description": isValidSolutionDescription,
  };
};

function isValid(validationResult) {
  return Object.values(validationResult).every(value => value === true);
};

fullNameInput.addEventListener("change", function () {
  const result = validateForm();
  fullNameInput.style.borderColor = result["full-name"] ? "green" : "red";
}); 

emailInput.addEventListener("change", () => {
  const result = validateForm();
  emailInput.style.borderColor = result["email"] ? "green" : "red";
});


orderNoInput.addEventListener("change", () => {
  const result = validateForm();
  orderNoInput.style.borderColor = result["order-no"] ? "green" : "red";
});


productCodeInput.addEventListener("change", () => {
  const result = validateForm();
  productCodeInput.style.borderColor = result["product-code"] ? "green" : "red";
});

quantityInput.addEventListener("change", () => {
  const result = validateForm();
  quantityInput.style.borderColor = result["quantity"] ? "green" : "red";
});

for (const checkbox of complaintCheckboxes) {
  checkbox.addEventListener("change", () => {
    const result = validateForm();
    complaintGroup.style.borderColor = result["complaints-group"] ? "green" : "red";
  });
};

for (const checkbox of solutionCheckboxes) {
  checkbox.addEventListener("change", () => {
    const result = validateForm();
    solutionGroup.style.borderColor = result["solutions-group"]
      ? "green"
      : "red";
  });
};

complaintDescriptionInput.addEventListener("change", () => {
  const result = validateForm();
  complaintDescriptionInput.style.borderColor = result["complaint-description"] ? "green" : "red";
});

solutionDescriptionInput.addEventListener("change", () => {
  const result = validateForm();
  solutionDescriptionInput.style.borderColor = result["solution-description"]
    ? "green"
    : "red";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const validateFormResult = validateForm();
  isValid(validateFormResult);

  const fieldMap = {
    "full-name": fullNameInput,
    email: emailInput,
    "order-no": orderNoInput,
    "product-code": productCodeInput,
    quantity: quantityInput,
    "complaints-group": complaintGroup,
    "complaint-description": complaintDescriptionInput,
    "solutions-group": solutionGroup,
    "solution-description": solutionDescriptionInput,
  };

  for (const [key, value] of Object.entries(validateFormResult)) {
    if (value === false) {
      fieldMap[key].style.borderColor = "red";
    }
  }
});

const word = "javascript";

const reversed = word.split("").reverse().join("");

console.log(reversed);