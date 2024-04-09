function myFunc(...args) {


    if (args.length <= 4) {
        let max = args[0];
        for (arg of args) {
            if (arg > max) {
                max = arg;
            }
        }
        console.log(max);

    } else {
        console.log("The number of argument should be maximum four.");
    }

}

myFunc(12, 3, 4);
