
/* ******************* Start Loading ****************** */
    $(document).ready(function(){
        $('.my-logo').fadeOut(2500, () => {
            $('.my-logo').parent().fadeOut(3500 , () => {
                $('.loading').remove();
                $('body').css("overflow-y" , "auto");
            })
        });
    })
/* ******************* End Loading ****************** */

/* ****************** Start QR Code Generator ****************** */
    const wrapper = document.querySelector('.wrapper'),
    generateBtn = wrapper.querySelector('.form button'),
    
    qrInput = wrapper.querySelector('.form input'),
    qrContainer = wrapper.querySelector('.qr-code'),
    qrImg = wrapper.querySelector('.qr-code img');
    let preValue;

    generateBtn.addEventListener('click',()=>{

        let qrValue = qrInput.value.trim();
        if(!qrValue || preValue === qrValue) return;
        preValue = qrValue;
        
        qrContainer.classList.remove('hidden');
        setTimeout(function () {
            qrContainer.classList.remove('visibility');
        }, 10);

        generateBtn.innerText = "Generate QR Code...."
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
        
        qrImg.addEventListener('load',()=>{
            wrapper.classList.add('active');
            generateBtn.innerText = "Generate QR Code"
        });

    })
    
    qrInput.addEventListener("keyup", () => {
        if(!qrInput.value.trim()) {
            wrapper.classList.remove("active");
            preValue = "";

            qrContainer.classList.add('hidden');
            setTimeout(function () {
                qrContainer.classList.add('visibility');
            }, 10);
        }
    });
/* ****************** End QR Code Generator ****************** */




/* ******************* Start btnUp ****************** */
    let aboutOffset = $('#About_Me').offset().top;
    $(window).scroll(function(){
        let wScroll = $(window).scrollTop();
        if(wScroll > aboutOffset - 300){
            $('#btnUp').fadeIn(500);
        }
        else{
            $('#btnUp').fadeOut(500);
        }
    })
    $('#btnUp').click(function(){
        $('body,html').animate({scrollTop:0},1000)
    })
/* ******************* End btnUp ****************** */


