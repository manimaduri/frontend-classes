// Typescript for Frontend Developers - Browser types, Functions, DOM safety
// const heading  = document.getElementById('main-heading');
// if(heading instanceof HTMLElement){
//     heading.style.color='red';
// }

function formatPrice(amount :number, currency : string) : string{
    return `${currency} ${amount.toFixed(2)}`;
}

console.log(formatPrice(100,"$"))

function toPixels(value : number | string) : string{ //Union
    if(typeof value ==="number"){
        return value + "px";
    }

    return value;
}

interface UserCard {
    name : string;
    age? : number;
    isOnline : boolean;
}

const user1 :UserCard = {
    name : "Mary",
    isOnline :true,

}

// console.log(user1.xyz)

//button click
const btn = document.getElementById("save-btn") as HTMLButtonElement;
 btn.addEventListener("click",(event : MouseEvent)=>{
    console.log("Button cliked", event.clientX);
 })

 //input
 const username = document.getElementById("username") as HTMLInputElement;
 username.addEventListener("input", (e:Event)=>{
    const target = e.target as HTMLInputElement;
    console.log(target.value);
 })

 interface Profile{
    username : string;
    email : string;
    bio : string;
 }

 let updateData : Partial<Profile> ={
    bio :"Frontend developer"
 }

 const settings : Readonly< {
    theme : string
 }> = {
    theme : "dark",
 }

//  settings.theme="light"