// generatore random for user
const userId = Math.floor(((Math.random() * 10) % 6) +1)

// generatore randomi for pc
const userPc = Math.floor(((Math.random() * 10) % 6) +1)

if (userId > userPc){
    console.log(`L'utente ha vinto la partita`);
}else if ( userPc > userId){
    console.log(`Il computer ha vinto !`);
} else {
    console.log(`Pareggio!`);
}
