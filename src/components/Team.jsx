import React from 'react'
import team from '../images/illustration-stay-productive.png'
import arrow from '../images/icon-arrow.svg'

function Team() {
    return (
        <main className='team-container' id="team">
            <section className='team-photo'>
                <img src={team} alt="team"/>
            </section>
            <section className='team-info'>
                <h1>
                    Stay productive, wherever you are
                </h1>
                <p>
                    Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
                </p>
                <p>
                    Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
                </p>

                <p>
                    <a href='#random'>
                        See how Fylo works <span><img src={arrow} alt="arrow"></img></span>
                    </a>
                </p>
            </section>
        </main>
    )
}

export default Team
