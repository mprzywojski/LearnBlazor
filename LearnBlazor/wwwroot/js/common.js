window.showToastr = function (type, message) {
    if (type === 'success') {
        toastr.success(message);
    } else if (type === 'error') {
        toastr.error(message);
    } else if (type === 'info') {
        toastr.info(message);
    } else if (type === 'warning') {
        toastr.warning(message);
    }
}

window.showSwal = function (type, message) {
    if (type == "success") {
        Swal.fire({
            title: 'Good job!',
            text: message,
            icon: 'success',
            confirmButtonText: 'Cool'
        });
    }
    else {
        Swal.fire({
            title: 'Task failed!',
            text: message,
            icon: 'error',
            confirmButtonText: 'Cool'
        });
    }
}