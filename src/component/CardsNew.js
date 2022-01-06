import React, { Component } from 'react'

export class CardsNew extends Component {
    render() {

        let {title, discription,  category , name, profile_pic, createdAt} = this.props
        return (
            <div>
                <div className='container font-serif bg-backg box-border flex-col h-screen flex'>
                    <div className='css-8quyoq box-border relative'>
                        <div className='css-1s3ligh box-border w-full max-w-width ml-auto mr-auto relative z-10 sm:px-8 '>
                            <div className='css-1rgegro box-border min-w-0 sm: flex flex-wrap justify-center  '>

                                {/* <div className='blog_card css-iackul box-border m-0  max-w-none flex-grow p-2  sm: m-w-width2 max-w-width3 flex-1  lg: basis-1/3 block'>
              <div className='css-1jnxsjy box-border m-0 min-w-0 rounded-2xl transition-transform duration-200 ease-in-out shadow-2xxl overflow-hidden h-full block bg-white '>
                <article className='css-1cl0udp box-border m-0 min-w-0 self-stretch h-full flex-row flex '>
                  <div className='css-uz7zjz box-border m-0 min-w-0 flex flex-col self-center justify-center flex-1 p-8'>
                    <div className='css-77wly box-border m-0 min-w-0 inline-block mb-4'>
                      <a className='css-1aepyww box-border m-0 min-w-0 text-ts whitespace-nowrap inline-block rounded-lg font-semibold align-middle pl-4 pr-4 pt-1 pb-1 transition-all duration-300 ease-in-out bg-grey text-gry'>Fashion & Beauty</a>

                    </div>

                    <a className="css-srmsip box-border m-0 min-w-0 leading-snug block text-black font-bold mb-4 text-xl flex-0" href="">This US Satets Test Dosen't End Until</a>

                    <div className='css-iqglz4 box-border min-w-0 text-sm m-0 flex-auto block'>
                      "Primo in altis pelle alumnae Lorem markdownum obvius in seque opus, est bicorni forte; laeva…"
                    </div>

                    <div className='css-104wsv3 box-border min-w-0 text-sm m-0 flex align-middle items-center p-1  '>
                      <a aria-label="Jhon Doe" className="css-15tmicc box-border m-0 min-w-0 select-none block pr-4  ">

                        <div className=''>


                          <div className='  '>


                            <picture className=''>
                              <source srcSet="https://randomuser.me/api/portraits/women/81.jpg" className='yoh cursor-pointer rounded-full object-cover w-widthp h-height1' sizes='48px' type="image/" />

                              <img width={38} height={48} className='yoo rounded-full object-cover opacity-100 bottom-0 h-full left-0 m-0 max-w-none p-0 absolute right-0 top-0 w-full relative w-12 h-12' src='https://randomuser.me/api/portraits/women/81.jpg' className='yo rounded-full object-cover opacity-100 bottom-0 h-full left-0 m-0 max-w-none p-0 right-0 top-0 w-full
                             '  />
                            </picture>

                            <noscript></noscript>
                            

                          </div>
                        </div>

                        

















                      </a>

                      <div className='css-1u093if box-border m-0 min-w-0 flex-1 flex-wrap justify-between flex text-gry'>

                        <div className='css-1f71sd8 box-border m-0 min-w-0 pr-2 inline-block basis-full'>

                          <a className='css-x0ewr6 box-border min-w-0 m-0 text-gry select-none' href='#'>
                            <strong className='yo text-xl box-border'>John Doe</strong>
                          </a>

                        </div>

                        <div className='css-ah2hnh box-border m-0 min-w-0 overflow-hidden turncate block '>

                          <div className='css-1woe70d box-border min-w-0 m-0 inline-block whitespace-nowrap '> May 24, 2021

                          </div>

                          
                          
                        </div>

                      </div>

                    </div>



                  </div>



                </article>

              </div>

            </div> */}


<div className='blog_card css-iackul box-border m-0  max-w-none flex-grow p-2  sm: m-w-width2 max-w-width3 flex-1  lg: basis-1/3 block'>
              <div className='css-1jnxsjy box-border m-0 min-w-0 rounded-2xl transition-shadow  duration-200 delay-0 ease-in-out overflow-hidden h-full block bg-white lg:hover:scale-y-105 hover:drop-shadow-lg  '>
                <article className='css-1cl0udp box-border m-0 min-w-0 self-stretch h-full flex-row flex '>
                  <div className='css-uz7zjz box-border m-0 min-w-0 flex flex-col self-center justify-center flex-1 p-8'>
                    <div className='css-77wly box-border m-0 min-w-0 inline-block mb-4'>
                      <a className='css-1aepyww box-border cursor-pointer m-0 min-w-0 text-ts whitespace-nowrap inline-block rounded-lg font-semibold align-middle pl-4 pr-4 pt-1 pb-1 hover: transition-all  hover: ease-in-out bg-grey text-gry hover:bg-gry transition-all hover:text-grey '>{category}</a>

                    </div>

                    <a className="css-srmsip box-border m-0 min-w-0 leading-snug block text-black font-bold mb-4 text-xl flex-0 cursor-pointer" href="">{title}</a>

                    <div className='css-iqglz4 box-border min-w-0 text-sm m-0 flex-auto block text-texxt'>
                      {discription}
                    </div>

                    <div className='css-104wsv3 box-border min-w-0 text-sm m-0 flex align-middle items-center  '>
                      <a aria-label="Jhon Doe" className="css-15tmicc box-border m-0 min-w-0 select-none block pr-4 ">

                        <div className=''>


                          <div className='  '>


                            <picture>

                              <img width={38} height={48} className='yoo rounded-full object-cover opacity-100 bottom-0 h-full left-0 m-0 max-w-none p-0 absolute right-0 top-0 w-full' src={profile_pic} className='yo rounded-full object-cover opacity-100 bottom-0 h-full left-0 m-0 max-w-none p-0 right-0 top-0 w-full cursor-pointer hover:contrast-125
                             '  />
                            </picture>

                            <noscript></noscript>
                            

                          </div>
                        </div>

















                      </a>

                      <div className='css-1u093if box-border m-0 min-w-0 flex-1 flex-wrap justify-between flex text-gry'>

                        <div className='css-1f71sd8 box-border m-0 min-w-0 pr-2 inline-block basis-full'>

                          <a className='css-x0ewr6 box-border min-w-0 m-0 text-gry select-none text-base hover:text-bluee hover:cursor-pointer' href='#'>
                            <strong className='yo box-border text-base'>{name}</strong>
                          </a>

                        </div>

                        <div className='css-ah2hnh box-border m-0 min-w-0 overflow-hidden turncate block '>

                          <div className='css-1woe70d box-border min-w-0 m-0 inline-block whitespace-nowrap text-texx font-sans '> {createdAt}

                          </div>

                          
                          
                        </div>

                      </div>

                    </div>



                  </div>



                </article>

              </div>

            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardsNew
