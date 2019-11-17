import {execSync} from 'child_process'

export class CommonUtilities {

    static async waitInSeconds (seconds) {
        seconds = seconds * 1000;
        const start = new Date().getTime();
        let end = start;
        while(end < start + seconds) {
            end = new Date().getTime();
        }
    }

    static async getTimeStampInMS () {
        return (new Date()).getTime();
    }

    static async executeCommandLine (command) {
        execSync(command, { encoding: 'utf-8' });
    }

}
