function Badge ({ children }) {
  return (
    <span className='inline-flex items-center rounded-full bg-slate-100 dark:bg-zinc-700 text-slate-600 dark:text-zinc-200 py-0.5 px-2.5 text-xs font-medium'>
      {children}
    </span>
  )
}

export default Badge
