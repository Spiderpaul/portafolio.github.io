const form =  document.querySelector("[data-form]");

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event){
    event.preventDefault();
    const newForm = new FormData(this);

    const response = await fetch(this.action, {
        method: this.method,
        body: newForm,
        headers: {
            'Accept': 'application/json'
        }
    })

    if(response.ok){
        this.reset();
        alert(`Hola ${newForm.get('nombre')}, le agradezco por contactarme, responderé su mensaje lo más pronto posible`);
    }

}