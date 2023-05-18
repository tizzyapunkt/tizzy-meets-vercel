import Image from 'next/image'

export default function ResumeItem(props) {
  return (
    <li>
        <div className="relative pb-8">
            <span className={`absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200 ${props.last && 'hidden'}`} aria-hidden="true"></span>
            <div className="relative flex items-start space-x-3">
                <div className="relative">
                    <img className="flex h-12 w-12 items-center justify-center bg-white ring-8 ring-white" src={props.image} alt="" />
                </div>
                <div className="min-w-0 flex-1">
                    <div>
                        <div className="text-sm">
                            <a href="#" className="font-medium text-gray-900">{props.time}</a>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">{props.company}</p>
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                        {props.positions.map( (pos, index) => <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-4" key={`pos-${index}`}>{pos}</span>)}
                    </div>
                </div>
            </div>
        </div>
    </li>
  )
}
