
function KeyNumber({title, subtitle}: {title: string; subtitle: string;}) {
  return (
    <div className="flex flex-col items-center">
        <p className="text-md sm:text-xl font-bold">{title}</p>
        <p className="text-center text-[10px] sm:text-xs">{subtitle}</p>
    </div>
  )
}

export default KeyNumber