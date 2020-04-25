let isMomhappy = true;
let phone = {
    brand: 'Samsung',
    color: 'black'
};

var willIGetNewPhone =  (param) => {
    return new Promise((resolved, rejected) => {
            resolved(JSON.stringify(phone));
            
});
}




const test = willIGetNewPhone(true);

test.then();

