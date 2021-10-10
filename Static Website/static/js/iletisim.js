$("#gonder_btn").click((e) => {
    e.preventDefault();
    let name = $("#exampleInputEmail1").val();
    let mesaj = $("#exampleFormControlTextarea1").val();
    if (name == "" || mesaj == "") {
        new Toast({
            message: 'Lütfen bütün form alanlarını doldurunuz!',
            type: 'warning'
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Tebrikler',
            text: `Bizimle iletişime geçtiğiniz için çok teşekkürler.`,
            footer: `<p>En yakın zamanda  <b>${name}</b> adresiniz ile iletişime geçeceğiz</p>`
        });
    }

});