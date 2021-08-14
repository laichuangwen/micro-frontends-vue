const { green } = require('chalk');

const log = (str) => {
    const dateStr = green(`[${new Date().toLocaleString('zh-cn')}]`);
    console.log(`${dateStr} ${str}`);
};

class Manager {
    constructor() {
        this.allTasks = {}; // 任务池
        this.queue = []; // 任务队列
        this.ctx = {};
    }

    task(name, handle = () => { }) { // 添加任务
        if (this.allTasks[name]) {
            console.log(`任务${name}已存在，请勿重复添加`);
            process.exit(1);
        }
        this.queue.push(name);
        this.allTasks[name] = {
            name,
            handle,
        };
        return this;
    }

    async start(callback = () => { }) { // 启动
        try {
            for (let i = 0; i < this.queue.length; i++) {
                const name = this.queue[i];
                const task = this.allTasks[name];
                const { ctx } = this;

                log(`[${i + 1}/${this.queue.length}] ${name}...`);
                await task.handle({ ctx, log });
            }
            callback();
        } catch (e) {
            console.error(e);
            process.exit(1);
        }
    }
}

module.exports = new Manager();
