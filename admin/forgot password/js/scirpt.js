const Backupfield = document.getElementById('username');
const alertWrong = document.querySelector('.alert-danger');
const alertNoBackupCode = document.querySelector('.alert-noAcc');
const alertEmpty = document.querySelector('.alert-warning');
const lgnBtn = document.getElementById('lgn');
const popupModal = document.getElementById('popupModal');
const closeModalButtons = document.querySelectorAll('#closeModal, #closeModalFooter');
const donationField = document.getElementById('donation-field')
const changeInfoModal = document.getElementById('popupModal2')
const editBtn = document.getElementById('EditInfoBtn')
const changeEditionBtn = document.getElementById('saveEditionProcess');
// Regular expression for validating the format XXXX-XXXXX-XXXX-XXXX
const VALID_CODE_REGEX = /^[A-Z0-9]{4}-[A-Z0-9]{5}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;

let zordel = { username: "Zordel", passwordd: "123" };
let maria = { username: "Maria", passwordd: "12345" };
let xavier = { username: "Clavier", passwordd: "789" };
let jennifer = { username: "Jeeny6six", passwordd: "Qn's Agent#325!" }
function backupCode(event) {
    event.preventDefault();
    const backupcode = Backupfield.value.trim();

    if (Backupfield.value.trim() === "") {
        alertEmpty.classList.remove('d-none');
        alertNoBackupCode.classList.add('d-none');

        return;
    }

    // Check if the backup code matches the valid format
    if (!VALID_CODE_REGEX.test(backupcode) && Backupfield.value.trim() !== "") {
        alertNoBackupCode.classList.remove('d-none');
        alertEmpty.classList.add('d-none');

        return;
    }

    // Define your known valid backup codes
    const SalmaCodes = {
        code1: "5FHI-5JWE8-RJC6-H3IE",
        code2: "7Y2J-H1NSL-OL8N-H7MV",
    };

    // Check if the backup code matches haaa3
    if (backupcode === SalmaCodes.code1 || backupcode === SalmaCodes.code2) {
        alertWrong.classList.add('d-none');
        alertEmpty.classList.add('d-none');
        alertNoBackupCode.classList.add('d-none');
        let Jennifer = "Jennifer Watson Miller"
        popupModal.style.display = 'block';
        const JennsDonation = "300$";
        const JennsBioField = document.getElementById('Jenns-bio');
        const JennsPasswordField = document.getElementById('jennifer-password');
        const title = document.getElementById('title');
        const Jennyrole = document.getElementById('basic-addon3');
        const Jennyrole2 = document.getElementById('basic-addon3-1');
        const userPlaceholder = document.getElementById('jennifer-username');
        let Jennsbio = `fascinated by the places I visit and the people I meet. Sometimes, I wonder how I’ve managed to turn my job into one big adventure, but I wouldn’t trade it for anything. It’s a whirlwind of excitement and discovery, and I wouldn’t have it any other way!`
        const roles = {
            Owner: "Owner",
            Admin: "Admin",
            Moderator: "Moderator",
            User: "Member"
        }
        const JennsUserName = jennifer.username;
        const JennsPassword = jennifer.passwordd;
        donationField.innerHTML = JennsDonation;
        title.textContent = `${Jennifer}`;
        Jennyrole.innerHTML = roles.Moderator;
        Jennyrole2.innerHTML = roles.User;
        JennsBioField.innerHTML = Jennsbio;
        userPlaceholder.placeholder = JennsUserName;
        JennsPasswordField.placeholder = JennsPassword;

        function EditInfo(event) {
            event.preventDefault();
            userPlaceholder.removeAttribute('readonly');
            JennsBioField.removeAttribute('readonly');
            JennsPasswordField.removeAttribute('readonly');
            editBtn.classList.add('d-none');
            changeEditionBtn.classList.remove('d-none');
            JennsPasswordField.style.border('1px solid blue');
        }
        editBtn.addEventListener('click', EditInfo);
    } else {
        alertWrong.classList.remove('d-none');
    }
}

// Close the modal
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        popupModal.style.display = 'none';
    });
});

lgnBtn.addEventListener('click', backupCode);