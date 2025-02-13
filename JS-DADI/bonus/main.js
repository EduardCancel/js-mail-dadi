
const email_list = [`marco@gmail.com`, `viola@gmail.com`, `pippo@gmail.com`, `marcello@gmail.com`, `pelè@gmail.com`]
console.log(email_list);

const email_users = String(prompt(`Write your email address here`))


controllo = email_list.includes(email_users);
if(controllo === true){
    console.log("sei presente al party");
} else{
    console.log("non sei presente al party");
}