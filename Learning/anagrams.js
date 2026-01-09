let s1="silent";
let s2="listen";
let sa1=s1.split("").sort().join();
let sa2=s2.split("").sort().join();

if(sa1==sa2)
console.log("given strings are anagram");
else
    console.log("given strings are not anagram");