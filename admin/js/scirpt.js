const userName = document.getElementById('username');
const password = document.getElementById('password');
const lgnBtn = document.getElementById('lgn');
const formLgn = document.getElementById('appear');
const alertWrong = document.querySelector('.alert-danger');
const alertEmpty = document.querySelector('.alert-warning');
const alertNoAcc = document.querySelector('.alert-noAcc');

function adminValidation(event) {
    event.preventDefault();

    // Owner credentials
    const ownerCredsUser = "SallaSello";
    const ownerCredsPass = "123";
    const Owner = "Salma";

    // Admin credentials
    let zordel = { username: "Zordel", passwordd: "123" };
    let maria = { username: "Maria", passwordd: "12345" };
    let xavier = { username: "Clavier", passwordd: "789" };

    // List of all admins
    const admins = [zordel, maria, xavier];

    // Clear previous alerts
    alertEmpty.classList.add('d-none');
    alertWrong.classList.add('d-none');
    alertNoAcc.classList.add('d-none');

    // Check for empty fields
    if (userName.value === "" || password.value === "") {
        alertEmpty.classList.remove('d-none');
        return;
    }
    // Check for owner credentials
    if (userName.value === ownerCredsUser && password.value === ownerCredsPass) {
        formLgn.innerHTML = `<h2>Welcome ${Owner}</h2>`;
        return;
    }

    // Check for admin credentials
    const admin = admins.find(admin => admin.username === userName.value);

    if (admin) {
        let kk = formLgn.innerHTML = `<h2>Welcome ${userName.value}</h2>`;
        // Username exists, now check if the password is correct
        if (admin.passwordd === password.value) {
            kk;

        } else {
            alertWrong.classList.remove('d-none');
        }
    } else {
        // Username does not exist
        alertNoAcc.classList.remove('d-none');
    }
}

// Attach event listener to login button
lgnBtn.addEventListener('click', adminValidation);
