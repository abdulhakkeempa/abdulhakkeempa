export default function Title ({title, text_size = null, container_spacing = null}) {
  text_size = text_size !== null ? text_size : 'text-xl';
  container_spacing = container_spacing !== null ? container_spacing : 'p-10 pb-5 pt-5 md:pr-20 md:pl-20';
  return (
    <div className={`mx-auto max-w-screen-xl lg:px-30 lg:space-x-8 ${container_spacing}`}>
      <h1 className={`${text_size} font-semibold`}>{title}</h1>
    </div>
  )
}