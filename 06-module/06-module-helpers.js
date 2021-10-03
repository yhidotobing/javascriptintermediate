function greeting(name) {
  alert(`Halo ${name}`);
}

function validateLoginData(email, password) {
  const emailValidator = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gim
  );
  const passwordValidator = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/gim
  );
  if (
    emailValidator.test(email) == true &&
    passwordValidator.test(password) == true
  ) {
    alert(`Welcome to the Jungle`);
  } else if (
    emailValidator.test(email) == false &&
    passwordValidator.test(password) == true
  ) {
    alert(`tolong masukan email yang valid`);
  } else if (
    passwordValidator.test(password) == false &&
    emailValidator.test(email) == true
  ) {
    alert(`tolong masukan password sesuai ketentuan`);
  } else {
    alert(`tolong masukkan email dan password yang sesuai`);
  }
  elForm.reset();
}
export { greeting, validateLoginData };
