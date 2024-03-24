import React from 'react'
import classes from './educationTab.module.css';
import useWow from '@/utils/useWow';
const EducationTab = () => {
  const wowRef = useWow();
  return (
      <div className={`${classes?.eduPad}`}>

          <div className={`${classes?.eduFlex} wow fadeInLeft`}>
              <div className={`${classes?.eduCardLeft}`}>
                  <div className={`${classes?.lineFlex}`}>
                      <div className={`${classes?.top_line}`}></div>
                      <div className={`${classes?.middle}`}>
                          <img src="/expIcon.svg" alt="Separator image" />
                      </div>
                      <div className={`${classes?.bottom_line}`}></div>
                  </div>
              </div>
              <div className={`${classes?.eduCardRight}`}>
                  <div className={`${classes?.eduCard}`}>
                      <div>
                          <h2 className={`${classes?.positionHead}`}>MSc Computer Science (2021)</h2>
                          <h5 className={`${classes?.compHead}`}>Satavaha University, Karimnagar. | CGPA : 7.3</h5>
                      </div>
                  </div>
              </div>
          </div>

          <div className={`${classes?.eduFlex} wow fadeInRight`}>
              <div className={`${classes?.eduCardLeft}`}>
                  <div className={`${classes?.lineFlex}`}>
                      <div className={`${classes?.top_line}`}></div>
                      <div className={`${classes?.middle}`}>
                          <img src="/expIcon.svg" alt="Separator image" />
                      </div>
                      <div className={`${classes?.bottom_line}`}></div>
                  </div>
              </div>
              <div className={`${classes?.eduCardRight}`}>
                  <div className={`${classes?.eduCard}`}>
                      <div>
                          <h2 className={`${classes?.positionHead}`}>BSc Computer Science (2017)</h2>
                          <h5 className={`${classes?.compHead}`}>Satavaha University, Karimnagar. | Percentage : 64.5%</h5>
                      </div>
                  </div>
              </div>
          </div>
          <div className={`${classes?.eduFlex} wow fadeInLeft`}>
              <div className={`${classes?.eduCardLeft}`}>
                  <div className={`${classes?.lineFlex}`}>
                      <div className={`${classes?.top_line}`}></div>
                      <div className={`${classes?.middle}`}>
                          <img src="/expIcon.svg" alt="Separator image" />
                      </div>
                      <div className={`${classes?.bottom_line}`}></div>
                  </div>
              </div>
              <div className={`${classes?.eduCardRight}`}>
                  <div className={`${classes?.eduCard}`}>
                      <div>
                          <h2 className={`${classes?.positionHead}`}>10+2 Classes (2013)</h2>
                          <h5 className={`${classes?.compHead}`}>Sree Bharathi Junior College, Karimnagar | Percentage : 64.8%</h5>
                      </div>
                  </div>
              </div>
          </div>
          <div className={`${classes?.eduFlex} wow fadeInRight`}>
              <div className={`${classes?.eduCardLeft}`}>
                  <div className={`${classes?.lineFlex}`}>
                      <div className={`${classes?.top_line}`}></div>
                      <div className={`${classes?.middle}`}>
                          <img src="/expIcon.svg" alt="Separator image" />
                      </div>
                      <div className={`${classes?.bottom_line}`}></div>
                  </div>
              </div>
              <div className={`${classes?.eduCardRight}`}>
                  <div className={`${classes?.eduCard}`}>
                      <div>
                          <h2 className={`${classes?.positionHead}`}>10th Class (2011)</h2>
                          <h5 className={`${classes?.compHead}`}>ZPHS Pachunoor, Karimnagar. | Percentage : 77.5%</h5>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default EducationTab
