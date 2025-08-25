import { useState } from 'react'

function FunTerminal () {
  const [command, setCommand] = useState('')
  const [history, setHistory] = useState([])

  const commands = {
    help: 'Available commands: about, projects, contact, clear',
    hi: 'Hello, nice to meet you 👋. You can use "help" for available commands.',
    hey: "Hey, what's up?,  nice to meet you 👋. You can use 'help' for available commands.",
    hello:
      'Hi, how"s your day? nice to meet you👋. You can use "help" for available commands.',
    about:
      "Hi, I'm Eldad 👋. A computer science fresh graduate who want's to be software developer.",
    projects: 'Checkout my projects at Projects page for more details.',
    contact: 'You can reach me at: eldad.rizaldi@gmail.com'
  }

  const handleCommand = e => {
    e.preventDefault()

    let response =
      commands[command.toLowerCase()] || "Command not found. Try 'help'"
    if (command.toLowerCase() === 'clear') {
      setHistory([])
    } else {
      setHistory([...history, { cmd: command, res: response }])
    }

    setCommand('')
  }

  return (
    <section className='py-8 md:py-16 w-full'>
      <h2 className='text-2xl text-center font-bold text-slate-900 dark:text-white mb-8'>
        Fun Terminal
      </h2>
      <div className='bg-black text-green-400 font-mono p-4 rounded-l-2xl shadow-lg'>
        <div className='h-32 w-full overflow-y-auto'>
          {history.map((h, i) => (
            <div key={i}>
              <span className='text-blue-400'>guest@portfolio:~$</span> {h.cmd}
              <div>{h.res}</div>
            </div>
          ))}
        </div>
        <form onSubmit={handleCommand}>
          <span className='text-blue-400 mr-2'>guest@portfolio:~$</span>
          <input
            className='bg-transparent flex-11 outline-none text-green-300'
            type='text'
            value={command}
            onChange={e => setCommand(e.target.value)}
            autoFocus
          />
        </form>
      </div>
    </section>
  )
}

export default FunTerminal
