//যদি কোন সংখ্যা দিয়ে ভাগ যাই তবে ভাগশেষ ০ হয়। (সেই অনুযায়ী কাজ করতে হবে)
// যদি ৩,৫ দিয়ে ভাগ যায় তবে foo, foobar দেখাবে তা লিখ,...

for (let i =1; i <50; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("foobar");
    }
    else if(i % 3 == 0) {
        console.log("foo");
    }
    else if(i % 5 == 0){
        console.log("bar");
    }
    else{
        console.log(i);
    }
}