сonst MyModule = (() => {
    const privateVariable = 42;

    const privateFunction = () => "This is a private function";

    return {
        publicVariable: "Public variable",
        publicFunction: () => "Public function",
        getPrivateVariable: () => privateVariable
    };
})();

MyModule.publicVariable;
MyModule.publicFunction(); 
MyModule.getPrivateVariable();
MyModule.privateVariable; 
MyModule.privateFunction();

