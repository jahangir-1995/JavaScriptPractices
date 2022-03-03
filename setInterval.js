let second = 0;

const timeID = setInterval(() => {
    //second++;
    console.log(second++); // ei vabe dile 0 theke suru hobe
    // console.log(++second); // 4 number line er kaj korbe
    if(second > 10) {
        clearInterval(timeID); // 0-10 porjonto hoye bondo hobe;
    }
}, 1000);