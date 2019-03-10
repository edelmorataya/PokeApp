function toast(type, position) {
    const toast = swal.mixin({
        toast: true,
        position: position,
        showConfirmButton: false,
        timer: 3000

    });

    toast({
        type: type,
        title: 'Pokemon has been Captured!'
    })
}
