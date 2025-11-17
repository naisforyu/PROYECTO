// Seleccionar formularios
const formRegister = document.querySelector(".sign.up form");
const formLogin = document.querySelector(".login form");

// --- REGISTRO ---
formRegister.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const data = {
        nombre: formRegister.querySelector('input[name="txt"]').value,
        email: formRegister.querySelector('input[name="email"]').value,
        telefono: formRegister.querySelector('input[name="broj"]').value,
        password: formRegister.querySelector('input[name="pswd"]').value
    };

    console.log("Datos de registro:", data);

    // Aquí puedes conectar con tu backend:
    /*
    fetch("/api/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
    */
});


// --- LOGIN ---
formLogin.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
        email: formLogin.querySelector('input[name="email"]').value,
        password: formLogin.querySelector('input[name="pswd"]').value
    };

    console.log("Datos de login:", data);

    // Conexión con backend:
    /*
    fetch("/api/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
    */
});


// --- LOGIN CON GOOGLE (SOLO FRONTEND) ---
const googleBtn = document.querySelector(".Google");

googleBtn.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("Intento de login con Google");

    // Aquí iría la redirección o flujo OAuth real:
    // window.location.href = "/auth/google";
});
