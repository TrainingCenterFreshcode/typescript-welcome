// tsc --watch ./src/index.ts -t ES6 --expirementalDecorators
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// Декоратор класу
function classDecorator(constructor) {
    // console.log('classDecorator called');
}
// Декоратор властивості класу
function propertyDecorator(target, propertyKey) {
    // console.group('PropertyDecorator');
    // console.log(propertyKey);
    // console.dir(target);
    // console.groupEnd();
}
// Декоратор методу
function methodDecorator(target, propertyKey, descriptor) {
    // Зберігаємо оригінальний метод
    const originalMethod = target;
    // Створюємо новий метод, який замінює оригінальний
    return (target = function (...args) {
        console.log(`Calling with args: ${args}`);
        return originalMethod.apply(this, args);
    });
}
let User = (() => {
    let _classDecorators = [classDecorator];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let __nickname_decorators;
    let __nickname_initializers = [];
    let __nickname_extraInitializers = [];
    let _greet_decorators;
    var User = _classThis = class {
        constructor(nickname) {
            this._nickname = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, __nickname_initializers, void 0));
            __runInitializers(this, __nickname_extraInitializers);
            this._nickname = nickname;
        }
        get nickname() {
            return this._nickname;
        }
        set nickname(value) {
            this._nickname = value;
        }
        greet(greeting) {
            return `${greeting}, ${this.nickname}!`;
        }
    };
    __setFunctionName(_classThis, "User");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __nickname_decorators = [propertyDecorator];
        _greet_decorators = [methodDecorator];
        __esDecorate(_classThis, null, _greet_decorators, { kind: "method", name: "greet", static: false, private: false, access: { has: obj => "greet" in obj, get: obj => obj.greet }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, null, __nickname_decorators, { kind: "field", name: "_nickname", static: false, private: false, access: { has: obj => "_nickname" in obj, get: obj => obj._nickname, set: (obj, value) => { obj._nickname = value; } }, metadata: _metadata }, __nickname_initializers, __nickname_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
})();
const alice = new User('Alice');
console.log(alice.greet('Hello'));
// console.log(alice.nickname); // getter
// alice.nickname = 'Bob'; // setter
// console.log(alice.nickname); // getter
