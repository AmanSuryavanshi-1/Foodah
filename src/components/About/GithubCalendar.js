import React from 'react'
import GitHubCalendar from 'react-github-calendar';


const GithubCalendar = () => {
  return (
    <div className="p-8 m-12 overflow-hidden shadow-lg bg-primary-dark bg-opacity-80 rounded-3xl backdrop-filter backdrop-blur-lg sm:p-12">
    <h2 className="mb-8 font-serif text-3xl font-bold text-center text-primary-light">
        My GitHub Calendar
    </h2>
    <div className="flex justify-center text-primary-yellow">
        <GitHubCalendar
            username="AmanSuryavanshi-1"
            blockSize={12}
            blockMargin={5}
            fontSize={16}
            color="#FDDA24"
            className="calendar"
        />
    </div>
</div>
  )
}

export default GithubCalendar