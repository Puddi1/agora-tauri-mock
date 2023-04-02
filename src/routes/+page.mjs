import { invoke } from '@tauri-apps/api/tauri'

let greetMsg = ''
async function greet(name) {
    console.log(name)
    return greetMsg = await invoke('greet', { name })
}

// export async function connectToSwarm(value) {
//     console.log(value)
//     greetMsg = await greet(value);
//     console.log(greetMsg);
//     return greetMsg;
// }

import Hyperswarm from 'hyperswarm'
import goodbye from 'graceful-goodbye'
// import crypto from 'hypercore-crypto'
import b4a from 'b4a'

crypto.randomBytes(32)

export async function connectToSwarm(value) {
    const swarm = new Hyperswarm()
    goodbye(() => swarm.destroy())
}
