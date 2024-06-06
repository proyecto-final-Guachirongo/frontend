const login = async () => {
    
    const user = document.getElementById("user").value;
    const pass = document.getElementById("password").value;
    const url = document.getElementById("url").value;

    sessionStorage.setItem("urlBuho", url);

    const urlBuho = sessionStorage.getItem("urlBuho") + "/api/login";
    const options = {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            usuario: user,
            clave: pass
        })
    }

    await fetch(urlBuho, options)
    .then(res => res.json())
    .then(data => {
        if(data.error == true){
            alertify.error("Clave errada")
        }else{
            sessionStorage.getItem("token", data.body.token);
        }
    })
    .catch(err => {
        console.error("Tenemos un problema", err);
    })
}