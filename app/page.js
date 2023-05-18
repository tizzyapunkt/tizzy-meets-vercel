import ResumeItem from './resumeItem'

export default function Home() {
  return (
    <div className="flex justify-center items-center h-full ml-16 mr-16">
      <div className="flow-root">
        <ul role="list" className="-mb-8">
          {/* Hope the following comment will be removed soon :-)*/}
          {/* <ResumeItem time="Since 2023" company="Vercel, Planet Earth" positions={["Sales Engineer"]} image="/vercel.png"/> */}
          <ResumeItem time="Since 2020" company="NT Neue Technologie AG , Erfurt" positions={["Sofware Developer", "Leading Developer"]} image="./ntag.png"/>
          <ResumeItem time="Since 2015" company="tizzy.dev, Erfurt" positions={["Freelancing Consultant"]} image="./tizzy-small.png"/>
          <ResumeItem time="2016 - 2020" company="FITisFIT & Smartplatz GmbH, Erfurt / Berlin" positions={["Co-Founder", "Technical Lead", "Software Developer"]} image="./smartplatz.png"/>
          <ResumeItem time="2013 - 2017" company="Zalando Logistics SE & Co. KG, Erfurt" positions={["Support Engineer", "Support Engineering Team Lead"]} image="./zalando.png" last />
        </ul>
      </div>
	  </div>
  )
}
