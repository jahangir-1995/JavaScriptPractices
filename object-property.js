var computer = {
    price: 38000, storage: '256Gb', processor: 'intel i5', color: 'silver'
};

// object er value change korte..
computer.price = 105000;
computer['price'] = 35000;

var storageProperty = 'storage';
computer[storageProperty] = '512Gb';

// computer['storage'] = '1TB';


console.log(computer);