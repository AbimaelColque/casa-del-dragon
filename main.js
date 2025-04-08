/*MODAL*/
const btn_ver_modal_1 = document.getElementById('btn-ver-modal-1');
const modal_1 = document.getElementById('modal-1');
const btn_cerrar_modal_1 = document.getElementById('btn-cerrar-modal-1');

btn_ver_modal_1.addEventListener('click',()=>{
    modal_1.classList.add('mostrar-modal');
})
btn_cerrar_modal_1.addEventListener('click',()=>{
    modal_1.classList.remove('mostrar-modal');
})


const btn_ver_modal_2 = document.getElementById('btn-ver-modal-2');
const modal_2 = document.getElementById('modal-2');
const btn_cerrar_modal_2 = document.getElementById('btn-cerrar-modal-2');

btn_ver_modal_2.addEventListener('click',()=>{
    modal_2.classList.add('mostrar-modal');
})
btn_cerrar_modal_2.addEventListener('click',()=>{
    modal_2.classList.remove('mostrar-modal');
})


const btn_ver_modal_3 = document.getElementById('btn-ver-modal-3');
const modal_3 = document.getElementById('modal-3');
const btn_cerrar_modal_3 = document.getElementById('btn-cerrar-modal-3');

btn_ver_modal_3.addEventListener('click',()=>{
    modal_3.classList.add('mostrar-modal');
})
btn_cerrar_modal_3.addEventListener('click',()=>{
    modal_3.classList.remove('mostrar-modal');
})


const btn_ver_modal_4 = document.getElementById('btn-ver-modal-4');
const modal_4 = document.getElementById('modal-4');
const btn_cerrar_modal_4 = document.getElementById('btn-cerrar-modal-4');

btn_ver_modal_4.addEventListener('click',()=>{
    modal_4.classList.add('mostrar-modal');
})
btn_cerrar_modal_4.addEventListener('click',()=>{
    modal_4.classList.remove('mostrar-modal');
})


const btn_ver_modal_5 = document.getElementById('btn-ver-modal-5');
const modal_5 = document.getElementById('modal-5');
const btn_cerrar_modal_5 = document.getElementById('btn-cerrar-modal-5');

btn_ver_modal_5.addEventListener('click',()=>{
    modal_5.classList.add('mostrar-modal');
})
btn_cerrar_modal_5.addEventListener('click',()=>{
    modal_5.classList.remove('mostrar-modal');
})


const btn_ver_modal_6 = document.getElementById('btn-ver-modal-6');
const modal_6 = document.getElementById('modal-6');
const btn_cerrar_modal_6 = document.getElementById('btn-cerrar-modal-6');

btn_ver_modal_6.addEventListener('click',()=>{
    modal_6.classList.add('mostrar-modal');
})
btn_cerrar_modal_6.addEventListener('click',()=>{
    modal_6.classList.remove('mostrar-modal');
})

/*Formulario */
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit',function(event){
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    const confirmacion = `
        <h3>Datos enviados correctamente</h3>
        <ul>
            <li>Nombre: ${nombre}</li>
            <li>Correo: ${correo}</li>
            <li>Mensaje: ${mensaje}</li>
        </ul>
    `;

    const formulario_datos = document.getElementById('formulario-datos');
    formulario_datos.innerHTML = confirmacion;

    const modal_formulario = document.getElementById('modal-formulario');
    modal_formulario.classList.add('mostrar-modal');

    const btn_cerrar_formulario = document.getElementById('btn-cerrar-formulario');
    btn_cerrar_formulario.addEventListener('click',()=>{
        modal_formulario.classList.remove('mostrar-modal');
    })
    this.reset();
})


