"use client"
import React from 'react'
import classes from './profExpTab.module.css';
const ProfExpTab = () => {
    return (
        <div className={`${classes?.expPad}`}>

            <div className={`${classes?.expFlex} wow bounceInDown`}>
                <div className={`${classes?.expCardLeft}`}>
                    <div className={`${classes?.lineFlex}`}>
                        <div className={`${classes?.top_line}`}></div>
                        <div className={`${classes?.middle}`}>
                            <img src="/expIcon.svg" alt="Separator image" />
                        </div>
                        <div className={`${classes?.bottom_line}`}></div>
                    </div>
                </div>
                <div className={`${classes?.expCardRight}`}>
                    <div className={`${classes?.expCard}`}>
                        <div>
                            <h2 className={`${classes?.positionHead}`}>Software Development Engineer</h2>
                            <h5 className={`${classes?.compHead}`}>Infinity Learn | February 2023 - Present</h5>
                            <ul className={`${classes?.list}`}>
                                <li>
                                    Aligned closely with marketing and product teams, ensuring seamless in-
                                    terpretation and implementation of requirements, fostering synergy between
                                    development efforts and organizational objectives
                                </li>
                                <li>
                                    Leveraged advanced skills in Angular, React, and Next.js to craft cutting-edge,
                                    responsive web pages that consistently surpassed expectations, reflecting a
                                    commitment to staying at the forefront of industry trends.
                                </li>
                                <li>
                                    Demonstrated adept utilization of Jira at a project level, proficiently managing
                                    and tracking progress, contributing to a streamlined development process,
                                    and ensuring tasks were executed within defined timelines.
                                </li>
                                <li>
                                    Actively contributed to cross-functional discussions, providing valuable tech-
                                    nical perspectives that informed decision-making and played a pivotal role in
                                    the successful implementation of marketing and product initiatives.
                                </li>
                                <li>
                                    I adeptly collaborated with the team, swiftly troubleshooting and resolving
                                    issues to ensure timely delivery of error-free web pages, exemplifying a
                                    commitment to high-quality standards.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${classes?.expFlex} wow bounceInUp`}>
                <div className={`${classes?.expCardLeft}`}>
                    <div className={`${classes?.lineFlex}`}>
                        <div className={`${classes?.top_line}`}></div>
                        <div className={`${classes?.middle}`}>
                            <img src="/expIcon.svg" alt="Separator image" />
                        </div>
                        <div className={`${classes?.bottom_line}`}></div>
                    </div>
                </div>
                <div className={`${classes?.expCardRight}`}>
                    <div className={`${classes?.expCard}`}>
                        <div>
                            <h2 className={`${classes?.positionHead}`}>Software Consultant</h2>
                            <h5 className={`${classes?.compHead}`}>SmartGig Technologies Private Limited | January 2021 - January 2023</h5>
                            <ul className={`${classes?.list}`}>
                                <li>
                                    Engaged closely with clients, establishing effective communication for a comprehensive understanding of unique web development needs.
                                </li>
                                <li>
                                    Demonstrated an agile approach, ensuring quick and accurate development
                                    to align with project timelines and client deliverables.
                                </li>
                                <li>
                                    Applied versatility to craft customized web pages, seamlessly merging design
                                    and functionality.
                                </li>
                                <li>
                                    Executed effective version control using Bitbucket, maintaining code integrity
                                    and enabling collaborative development for client-driven solutions.
                                </li>
                                <li>
                                    Played a pivotal role in client meetings, actively contributing to technical
                                    discussions and iteratively optimizing web development based on client preferences and feedback.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfExpTab
