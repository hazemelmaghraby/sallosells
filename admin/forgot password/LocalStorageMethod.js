const Backupfield = document.getElementById('username');
const lgnBtn = document.getElementById('lgn');
const popupModal = document.getElementById('popupModal');
const closeModalButtons = document.querySelectorAll('#closeModal, #closeModalFooter');
const donationField = document.getElementById('donation-field')
const changeInfoModal = document.getElementById('popupModal2')
const editBtn = document.getElementById('EditInfoBtn')
const changeEditionBtn = document.getElementById('saveEditionProcess');
const VALID_CODE_REGEX = /^[A-Z0-9]{4}-[A-Z0-9]{5}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;

// Default user information
let defaultUser = {
    username: "Jennifer",
    passwordd: "Qn's Agent#325!"
};

// Initialize with saved user information or default values
const initializeUser = () => {
    const savedUser = JSON.parse(localStorage.getItem('userInfo'));
    if (savedUser) {
        defaultUser = savedUser;
    }
};

// Call this function to initialize user data
initializeUser();

function backupCode(event) {
    event.preventDefault();
    const backupcode = Backupfield.value.trim();

    if (!VALID_CODE_REGEX.test(backupcode)) {
        alert('Please enter a valid backup code');
        return;
    }

    const SalmaCodes = {
        code1: "5FHI-5JWE8-RJC6-H3IE" // example valid code
    };

    if (backupcode === SalmaCodes.code1) {
        const Jennifer = "Jennifer Watson Miller";
        popupModal.style.display = 'block';
        const JennsDonation = "300$";
        const JennsBioField = document.getElementById('Jenns-bio');
        const JennsPasswordField = document.getElementById('jennifer-password');
        const title = document.getElementById('title');
        const Jennyrole = document.getElementById('basic-addon3');
        const Jennyrole2 = document.getElementById('basic-addon3-1');
        const userPlaceholder = document.getElementById('jennifer-username');
        const Jennsbio = `fascinated by the places I visit and the people I meet. Sometimes, I wonder how I’ve managed to turn my job into one big adventure, but I wouldn’t trade it for anything. It’s a whirlwind of excitement and discovery, and I wouldn’t have it any other way!`
        const roles = {
            Owner: "Owner",
            Admin: "Admin",
            Moderator: "Moderator",
            User: "Member"
        }

        // Set initial values
        donationField.innerHTML = JennsDonation;
        title.textContent = `${Jennifer}`;
        Jennyrole.innerHTML = roles.Moderator;
        Jennyrole2.innerHTML = roles.User;
        JennsBioField.innerHTML = Jennsbio;
        userPlaceholder.placeholder = defaultUser.username;
        JennsPasswordField.placeholder = defaultUser.passwordd;

        function EditInfo(event) {
            event.preventDefault();
            userPlaceholder.removeAttribute('readonly');
            JennsBioField.removeAttribute('readonly');
            JennsPasswordField.removeAttribute('readonly');
            editBtn.classList.add('d-none');
            changeEditionBtn.classList.remove('d-none');
            JennsPasswordField.style.border = '1px solid blue'; // Corrected method

            // Save changes to localStorage
            changeEditionBtn.addEventListener('click', () => {
                defaultUser.username = userPlaceholder.value.trim();
                defaultUser.passwordd = JennsPasswordField.value.trim();
                localStorage.setItem('userInfo', JSON.stringify(defaultUser));
                userPlaceholder.setAttribute('readonly', 'readonly');
                JennsPasswordField.setAttribute('readonly', 'readonly');
                editBtn.classList.remove('d-none');
                changeEditionBtn.classList.add('d-none');
            });
        }
        editBtn.addEventListener('click', EditInfo);

    } else {
        alert('Invalid backup code');
    }
}

// Close the modal
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        popupModal.style.display = 'none';
    });
});

lgnBtn.addEventListener('click', backupCode);
