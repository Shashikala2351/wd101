let userForm = document.getElementById("u-form");

const retent = () => {
    let ent = localStorage.getItem("u-details");
    if (ent) {
        ent = JSON.parse(ent);
    } else {
        ent = [];
    }
    return ent;
};

let UserDet = retent();

const dispent = () => {
    const ent = retent();
    let tableEntries = '';
    for (const entry of ent) {
        const name1 = `<td>${entry.name}</td>`;
        const email1 = `<td>${entry.email}</td>`;
        const password1 = `<td>${entry.password}</td>`;
        const dob1 = `<td>${entry.dob}</td>`;
        const acceptTerms1 = `<td>${entry.acceptedTermsAndConditions ? 'true' : 'false'}</td>`;

        const row = `<tr>${name1}${email1}${password1}${dob1}${acceptTerms1}</tr>`;
        tableEntries += row;
    }
    const table = `<table><tr><th>Name</th><th>Email</th><th>Password</th><th>Dob</th><th>Accepted terms?</th></tr>${tableEntries}</table>`;
    let details = document.getElementById("u-details");
    details.innerHTML = table;
};

const saveUserForm = (event) => {
    event.preventDefault();
    const name = document.getElementById("name1").value;
    const email = document.getElementById("email1").value;
    const password = document.getElementById("pd1").value;
    const dob = document.getElementById("dob1").value;
    const acceptedTermsAndConditions = document.getElementById("ats1").checked;

    const entry = {
        name,
        email,
        password,
        dob,
        acceptedTermsAndConditions,
    };
    UserDet.push(entry);
    localStorage.setItem("u-details", JSON.stringify(UserDet));
    dispent();
};

userForm.addEventListener("submit", saveUserForm);
dispent();
