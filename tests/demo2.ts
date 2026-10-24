let message1 : string = "hello";
message1="bye";  // Possible to change the value of message1 to a string because it is explicitly typed.
let age1 : number = 25;
let isStudent : boolean = true;
let hobbies : string[] = ["reading", "traveling", "coding"];
let data: any = "This can be any type";  // The 'any' type allows the variable to hold any type of value.
console.log(message1);
console.log(age1);
console.log(isStudent);
console.log(hobbies);

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(5, 10));
let user: { name: string; age: number; isActive: boolean } = {
    name: "John Doe",
    age: 30,
    isActive: true
};