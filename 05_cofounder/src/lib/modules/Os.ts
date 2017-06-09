import childProcess = require('child_process');
import immunity = require('immunity');

export class Os {
    shell(command, args = [], env) {
        const env_ = (env === undefined) ?
            process.env :
            immunity.appendToObject(process.env, env);

        const proc = childProcess.spawnSync(
            command,
            args,
            {
                stdio: 'inherit',
                shell: true,
                env: env_,
                encoding: 'utf8'
            }
        );

        process.on('SIGTERM', () => proc.kill('SIGTERM'));

        return proc;
    }
}

export default Os;