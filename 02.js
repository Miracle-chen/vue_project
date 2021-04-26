class _LazyMan {
    constructor(name) {
        //定义一个任务队列
        this.taskQueue = [];
        this.runTimer = null;
        this.sayHi(name);
    }
    run() {
        if (this.runTimer) {
            clearTimeout(this.runTimer);
        };
        console.log( this.taskQueue );
        // runTimer 是一个id标识，延时器会返回一个id，清除延时器的时候，可以按照这个id进行匹配清除。
        this.runTimer = setTimeout(async () => {
            // 依次执行任务队列中的任务
            for (let asyncFun of this.taskQueue) {
                await asyncFun()
            }
            // 执行完之后，清空任务队列
            // this.taskQueue.length = 0;
            this.runTimer = null;
        })
        // 供链式调用
        return this;
    }
    sayHi(name) {
        this.taskQueue.push(async () => console.log(`Hi, this is ${name}`));
        return this.run();
    }
    eat(food) {
        this.taskQueue.push(async () => console.log(`Eat ${food}`));
        return this.run();
    }
    sleep(second) {
        this.taskQueue.push(async () => { console.log(`Sleep ${second} s`)
            return this._timeout(second)
        });
        return this.run();
    }
    sleepFirst(second) {
        this.taskQueue.unshift(async () => {
            console.log(`Sleep first ${second} s`)
            return this._timeout(second);
        });
        return this.run();
    }
    async _timeout(second) {
        await new Promise(resolve => {
            setTimeout(resolve, second * 1e3);
        })
    }
}

let lazy = name => new _LazyMan(name);

lazy('Hank').sleepFirst(2);