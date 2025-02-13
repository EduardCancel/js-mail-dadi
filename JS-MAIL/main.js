/* 

Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Lo svolgimento va fatto usando un ciclo for è non usando metodi degli array (come includes, per esempio) . Si puó fare??
eh si!  Basta ragionare un po’.

*/

// variables and structures

const email_list = [`marco@gmail.com`, `viola@gmail.com`, `pippo@gmail.com`, `marcello@gmail.com`, `pelè@gmail.com`]
let invited = false;
console.log(email_list);

// users input

const email_users = prompt(`Write your email address here`)
console.log(email_users);

// loop
for (let i = 0; i < email_list.length; i++){
    this_email = email_list[i]
    if (this_email === email_users){
        invited = true
    }
}

// result

if (invited){
    alert(`congratulazione, sei invitato al party`)
} else {
    alert(`non fai parte della lista`)
}
