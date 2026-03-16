## How It Works
Mengambil variabel dari div display calculator. body -> div(calculator) -> div(display) atasnya bagian button. 
    
    const displayOutput = document.getElementById('display');

Mengambil class atau id pada button dengan nama variabel.numButton untuk tombol button yang akan ditampilkan kepada display.

    const inputButton = document.querySelectorAll('.numButton');    

Looping semua tombol yang artinya semua tombol yang ada pada script.js di proses satu per satu menggunakan forEach.

    inputButton.forEach(button => {

Menjalankan kode setiap tombol di klik melalui addEventListener setelah semua tombol telah diproses. Disini reactornya melalui click dan (e) sebagai event object.

    button.addEventListener('click', function(e) {

Jika sudah diklik maka elemen akan diambil bagian mana yang diklik oleh user.

    const buttonTarget = e.currentTarget;

Membuat variabel const dengan nama "action" yang dimana dia mengambil data-action="" pada html dan ini khusus digunakan pada operator clear and dellete yang nantinya akan digunakan sebagai fungsi melakukan penghapusan angka yang nantinya akan diteruskan melalui fungsi if, if else, dan else

    const action = buttonTarget.getAttribute('data-action');

Mengambil nilai tombol pada fungsi tombol yang menampilkan angka yang bisa diinteraksi dengan tombol operator atau data-action.

    let takeButtonValue = buttonTarget.getAttribute('data-value');

Untuk mencegah null pada display apabila angka pada button tidak ada data-value yang dimana ini langsung mengambil pada bagian < button >angka< button >. Alternatif bisa menggunakan data-value="" pada masing masing tombol

    if(!takeButtonValue) {
        takeButtonValue = buttonTarget.innerText.trim();
    }

Logika kalkulator untuk melakukan kalkulasi

    // Calculator Logical
        if(action === 'clear') {
            displayOutput.value = '';
        } else if(action === 'delete') {
            displayOutput.value = displayOutput.value.slice(0, -1);
        } else if(action === 'equal') {
            try {
                displayOutput.value = eval(displayOutput.value);
            } catch {
                displayOutput.value = 'Error';
            }
        } else if(action === 'squareRoot') {
            try {
                let currentValue = eval(displayOutput.value);
                displayOutput.value = Math.sqrt(currentValue);
            } catch {
                displayOutput.value = 'Error';
            }

Menampilkan semuanya ke dalam display kalkulator.

        } else {
            if (takeButtonValue != "") {
                displayOutput.value += takeButtonValue;
            }   
        }

Penutup

        });
    });