import Link from 'next/link'

export default function SocialLink({ platform, iconPath, text=null, link }) {
  let colorClass;
  switch (platform) {
    case 'instagram':
      colorClass = 'text-rose-500 hover:text-rose-400';
      break;
    case 'twitter':
      colorClass = 'text-blue-500 hover:text-blue-400';
      break;
    case 'linkedin':
      colorClass = 'text-sky-600 hover:text-sky-400';
      break;
    case 'github':
      colorClass = 'text-gray-500 hover:text-gray-300';
      break;
    default:
      colorClass = 'text-gray-500 hover:text-gray-700';
  }

  return (
  <div className={`flex items-center transition-colors duration-200 ${colorClass} gap-x-2`}>
    {text ? (
      <>
        <img src={iconPath} alt="" className="w-6 h-6" />
        <Link className='text-base' href={link} target='_blank'>{text}</Link>
      </>
    ) : (
      <Link href={link} target='_blank'>
        <img src={iconPath} alt="" className="w-6 h-6" />
      </Link>
    )}
  </div>
  )
}
