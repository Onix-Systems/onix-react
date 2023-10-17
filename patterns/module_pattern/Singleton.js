const Singleton = (function () {
  let instance;

  function createInstance() {
    return {
      message: "I am the only instance!",
      showMessage: function () {
        console.log(this.message);
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2);
