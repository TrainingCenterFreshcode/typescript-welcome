abstract class Server {
    abstract start(): void;
    abstract stop(): void;
}

class HTTPServer extends Server {
    start(): void {
        console.log('HTTP Server started');
    }

    stop(): void {
        console.log('HTTP Server stopped');
    }
}

class WebSocketServer extends Server {
    start(): void {
        console.log('WebSocket Server started');
    }

    stop(): void {
        console.log('WebSocket Server stopped');
    }
}

const firstHTTPServer = new HTTPServer();
const secondHTTPServer = new HTTPServer();

// Декоратор для рестарту
function addRestart(targetClass: Server): void {
    (targetClass as any).restart = function () {
        console.log(`Restarting ${this.constructor.name}...`);
        this.stop();
        this.start();
    }
}

const firstWSServer = new WebSocketServer();
const secondWSServer = new WebSocketServer();


// Декоратор для логування
function addLogingStart(targetClass: Server): void {
    const originalStart = targetClass.start.bind(targetClass);
    const originalStop = targetClass.stop.bind(targetClass);

    targetClass.start = function() {
        console.log(`[${new Date().toLocaleString()}] Starting ${this.constructor.name}...`);
        originalStart();
    }

    targetClass.stop = function() {
        console.log(`[${new Date().toLocaleString()}] Stopping ${this.constructor.name}...`);
        originalStop();
    }
}

// Декоратор для перевірки доступу
function addCheckAccessToStop(targetClass: Server): void {
    const originalStop = targetClass.stop.bind(targetClass);

    targetClass.stop = function() {
        console.log(`Checking access for ${this.constructor.name}...`);
        originalStop();
    }
}

// Тести

addRestart(firstHTTPServer);
addRestart(firstWSServer);
addLogingStart(firstHTTPServer);
addLogingStart(firstWSServer);
addCheckAccessToStop(firstHTTPServer);
addCheckAccessToStop(firstWSServer);





console.group('Декоратор');

console.log(firstHTTPServer);
firstHTTPServer.start();
(firstHTTPServer as any).restart();

console.log(firstWSServer);
firstWSServer.start();
(firstWSServer as any).restart();

console.groupEnd();


console.group('Без декоратору');

console.log(secondHTTPServer);
console.log(secondWSServer);
secondHTTPServer.start();
secondWSServer.start();

console.groupEnd();