import React from 'react'

function AboutUsPage() {
  return (
    <div className="second">
        <img className="absolute left-2.5 top-[1000px]" src="src/assets/about us 1.png" alt="" />
        <h1 className="text-5xl font-medium absolute left-[900px] top-[859px] font-rubik  ">ABOUT US</h1>
        <hr className=" relative w-[238px] left-[895px] top-[940px] text-gray-400 " />
        <box className="absolute h-[3px] w-[156px] rounded bg-[#a9a9a9] left-[895px] top-[939.5px]"></box>
        <text className="absolute left-[887px] top-[970px] font-rubik ">
          We love what we do and are driven by achieving great results for our
          clients. <br />
          Our awards and impressive client list are testament to our high
          quality <br /> approach. We deliver value, creaKvity, results and
          excepKonal levels of <br />
          customer service and professionalism. We specialise in infrastructure{" "}
          <br /> development, energy and natural resources.
        </text>
        <img
          className="absolute left-[887px] top-[1109px] font-rubik "
          src="src/assets/Enagagement icon 1.png"
          alt=""
        />
        <img
          className="absolute left-[1207px] top-[1109px] font-rubik "
          src="src/assets/coomunication icon 1.png"
          alt=""
        />
        <h2 className="absolute text-2xl font-medium left-[887px] top-[1169px] font-rubik ">Engagement</h2>
        <h2 className="absolute text-2xl font-medium left-[1207px] top-[1169px] font-rubik ">Communication</h2>
        <text className="absolute text-lg font-normal left-[887px] top-[1209px] font-rubik ">
          We are engagement specialists,
          <br /> who have led projects at all <br /> levels of the IAP2
          spectrum. <br />
          READ MORE
        </text>
        <text className="absolute text-lg font-normal left-[1207px] top-[1209px] font-rubik ">
          We are award-winning leaders in <br />
          communications and campaign <br /> management. READ MORE
        </text>
      </div>
  )
}

export default AboutUsPage