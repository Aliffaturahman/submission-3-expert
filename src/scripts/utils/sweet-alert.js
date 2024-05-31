import Swal from 'sweetalert2';

const initSweetAlertSuccess = (title) => {
  Swal.fire({
    title,
    toast: true,
    icon: 'success',
    confirmButtonText: 'Ok',
  });
};

const initSweetAlertError = (title) => {
  Swal.fire({
    title,
    toast: true,
    icon: 'error',
    confirmButtonText: 'Ok',
  });
};

export { initSweetAlertSuccess, initSweetAlertError };
