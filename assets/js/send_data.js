let canSubmit = true;
        function sendData() {
            if (canSubmit) {
                const username = document.getElementById("username").value;
                const icname = document.getElementById("icname").value;
                const key_join = document.getElementById("key_join").value;
                const steamhex = document.getElementById("steamhex").value;
                const discordid = document.getElementById("discordid").value;
                const age = document.getElementById("age").value;
                const Q_1 = document.getElementById("Q_1").value;
                const Q_2 = document.getElementById("Q_2").value;
                const Q_3 = document.getElementById("Q_3").value;
                const Q_4 = document.getElementById("Q_4").value;
                const Q_5 = document.getElementById("Q_5").value;
                const Q_6 = document.getElementById("Q_6").value;
                const Q_RP_1 = document.getElementById("Q_RP_1").value;
                const Q_RP_2 = document.getElementById("Q_RP_2").value;
                const Q_RP_3 = document.getElementById("Q_RP_3").value;
                const Q_RP_4 = document.getElementById("Q_RP_4").value;
                const Q_RP_5 = document.getElementById("Q_RP_5").value;
                const Q_RP_6 = document.getElementById("Q_RP_6").value;
                const data = {
                    content: `
                    OOC Name : ${username}
                    \n ****************************
                    \n IC Name: ${icname}
                    \n ****************************
                    \n Steam Hex :  ${steamhex}
                    \n ****************************
                    \n Copy User ID :  <@${discordid}>
                    \n ****************************
                    \n Sen : ${age}
                    \n ****************************
                    \n Rp Chist : ${Q_1}
                    \n ****************************
                    \n Non Rp Chist : ${Q_2} 
                    \n ****************************
                    \n Sexual Rp Chist :${Q_3}
                    \n ****************************
                    \n Fear Rp Chist : ${Q_4} 
                    \n ****************************
                    \n Non Driving Chist :${Q_5}
                    \n ****************************
                    \n Heve Rp Chist : ${Q_6}
                    \n ****************************
                    \n Dar che Mavaghe Az /me astfadh mikonid : ${Q_RP_1}
                    \n ****************************
                    \n Kar /do ra tozih dahid : ${Q_RP_2}
                    \n ****************************
                    \n Mojrem Ro Chetor Azad Midonid : ${Q_RP_3}
                    \n ****************************
                    \n Aya CIA Dar Shahr Bage Darad ? : ${Q_RP_4}
                    \n ****************************
                    \n Braye Tir Andazi chand Ektar Niaz Ast : ${Q_RP_5}
                    \n ****************************
                    \n Agar Kheft Shoded Chekar Mikonid : ${Q_RP_6}
                    \n ****************************
                    `
                    
                };

                // بررسی کد CAPTCHA
                if (key_join === "1"){
                    fetch('https://discord.com/api/webhooks/1141404040681500832/SJp8-li_IBjjSrDVv2LLZ1NYY4CdHHjxs2TO8JaTOYEo1DuQwJPAhtpxZ5s_TfqQxrkq', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    }).then(response => {
                        if (response.ok) {
                            alert('اطلاعات با موفقیت ارسال شد.');
                            resetAndClear();
                            canSubmit = false;
                            setTimeout(resetForm, 1000 * 60 * 60 * 5); // 5 hours
                        } else {
                            alert('مشکلی در ارسال اطلاعات رخ داده است.');
                        }
                    }).catch(error => {
                        console.error('خطا:', error);
                    });
                } else {
                    alert('Key JOIN اشتباه است');
                }
            } else {
                alert('(زمان باقی مانده 5 ساعت )لطفاً صبر کنید. فرم بعد از مدت زمانی قابل استفاده خواهد شد.');
            }
        }

                function resetAndClear() {
                    document.getElementById("username").value = '';
                    document.getElementById("icname").value = '';
                    document.getElementById("key_join").value = '';
                    document.getElementById("steamhex").value = '';
                    document.getElementById("discordid").value = '';
                    document.getElementById("age").value = '';
                    document.getElementById("Q_1").value = '';
                    document.getElementById("Q_2").value = '';
                    document.getElementById("Q_3").value = '';
                    document.getElementById("Q_4").value = '';
                    document.getElementById("Q_5").value = '';
                    document.getElementById("Q_6").value = '';
                    document.getElementById("Q_RP_1").value = '';
                    document.getElementById("Q_RP_2").value = '';
                    document.getElementById("Q_RP_3").value = '';
                    document.getElementById("Q_RP_4").value = '';
                    document.getElementById("Q_RP_5").value = '';
                    document.getElementById("Q_RP_6").value = '';
                    canSubmit = true;
                }

                function validateAndSend() {
                    const inputs = document.querySelectorAll('#Test2 input[required]');
                    let valid = true;
                
                    inputs.forEach(input => {
                        if (input.value.trim() === '') {
                            valid = false;
                        }
                    });
                
                    if (!valid) {
                        alert('لطفاً تمامی ورودی‌ها را پر کنید.');
                    } else {
                        // کد ارسال داده‌ها به سرور را اینجا قرار دهید
                        sendData();
                    }
                }
                