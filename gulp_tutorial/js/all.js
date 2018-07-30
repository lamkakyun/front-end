var index={};
index={
    test:function(argument){
        console.log('test');
    }
};
index.test();

var main = {};
main.test=function(argument){
    console.log("main test");
};
main.test();
