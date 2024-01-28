const NameLastNameInput = document.getElementById('firstNameLastName');
const AgeInput = document.getElementById('age');
const RegionSelect = document.getElementById('region');
const EmailInput = document.getElementById('email');
const PasswordInput = document.getElementById('password');
const gridcheckInput = document.getElementById('gridcheck');
const button = document.getElementById('button');

const inputCheckFunction = () => {
    if (NameLastNameInput.value === "" || AgeInput.value === "" || EmailInput.value === "" || PasswordInput.value == "" || gridcheck.checked == false || RegionSelect.value == "Viloyatingizni tanlang") {
        button.classList.add("disabled");
    } else {
        button.classList.remove("disabled");
    }
};

setInterval(() => {
    inputCheckFunction();
}, 500);