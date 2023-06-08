import React from "react";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";
import pic5 from "../images/pic5.jpg";
import manup from "../images/manup.png";
import mashup from "../images/mashup.png";
import lastcomic from "../images/lastcomic.png";

const Main = () => {
 return (
  <>
   <div id='bio'>
    <h2>The story so far...</h2>
    <p style={{ textIndent: "20px" }}>
     Jeff Klinger is an American comedian who lives in Los Angeles. Born on
     February 7 in Brooklyn, NY, he attended school in Salt Lake City. In
     1996,while at the University of Utah, Jeff entered a comedy competition. It
     was on that stage that Jeff decided he would pursue comedy as his career.
     Klinger won the competition and left school. Two years later, Jeff would
     call Chicago his home base. After moving to Chicago Jeff wrote, produced
     and directed several short films including Thanks Tony! The 7-minute-long
     satire about the quest for self-esteem went straight to the film festival
     circuit. Thanks Tony! premiered at the Chicago Comedy Shorts Film Festival.
    </p>

    <p style={{ textIndent: "20px" }}>
     Jeff first developed his routine with his unique "flip-chart" explaining
     the current state of our society. Any one of his many hysterical and
     original charts is filled with absurd graphs, stats and "facts" on a single
     topic, ranging from "American history" to "Building self-esteem" to "The
     war on drugs". In addition to comedy, Klinger expanded his audience through
     a number of TV appearances. After appearing on PBS’s The Cheap Show, Jeff
     had his first taste of what celebrity might be like. For the next week or
     so, Klinger had numerous strangers offering comments such as, " Hey I saw
     you on the Cheap Show."
    </p>
    <p style={{ textIndent: "20px" }}>
     Jeff was also a key founding member in the pressure cooker style atmosphere
     that made the Lyons Den in Chicago a huge force in the development of
     several famous comedians. This intense open mic experience grew from the
     back of a slow bar, but rapidly became a true incubator for talent that
     would launch the career of stars like TJ Miller. It was a place that was
     known of its anything goes, but it better be funny atmosphere that was just
     getting started when all the other comedy clubs were closing for the night.
     <a
      target='_blank'
      rel='noreferrer'
      href=' https://chicagoreader.com/arts-culture/when-lyons-roared/'
      alt='When Lyons Roared'>
      {" "}
      Read more{" "}
     </a>{" "}
    </p>
    <p style={{ textIndent: "20px" }}>
     Jeff taught a stand up comedy class to children at the Village Players
     Theater. His class was so successful that he scheduled his next tour such
     that he could teach the class again in the spring. Later that year Jeff set
     a personal record with a 16-week, non-stop tour. He participated in
     multiple comedy festivals including Chicago Comedy Festival, Bridgetown
     Comedy Festival, and Bentzen Ball. In 2009 Jeff Klinger, was selected for
     the NACA national convention, a huge honor for comedians who perform for
     major Universities.
    </p>
    <p style={{ textIndent: "20px" }}>
     He performs stand-up in the Los Angeles area. He frequents The Comedy and
     Magic Club in Hermosa Beach, The Improv, Largo, and Upright Citizens
     Brigade. He was a Last Comic Standing Quarter Finalist and Comedy Central’s
     Laugh Riots Semi Finalist 3 years in a row. He also starred along side
     Daniel Tosh in the original pilot for comedy central's Tosh.0. He has
     appeared on the one-hour special Mashup on Comedy Central which led to his
     appearance on the show when it was picked up to series.
    </p>
   </div>
   <br />
   <br />
   <br />
   <h5>Fun Pictures</h5>
   <div id='photos' className='grid-5'>
    <div>
     {" "}
     <img src={pic1} alt='Jeff Klinger Comedy' />
    </div>
    <div>
     {" "}
     <img src={pic2} alt='Jeff Klinger Comedy' />
    </div>
    <div>
     <img src={pic3} alt='Jeff Klinger Comedy' />
    </div>
    <div>
     <img src={pic4} alt='Jeff Klinger Comedy' />
    </div>
    <div>
     <img src={pic5} alt='Jeff Klinger Comedy' />
    </div>
   </div>
   <br />
   <br />
   <br />
   <h5>
    Jeff has starred in a number of comedy pilots and series. See more{" "}
    <a
     target='_blank'
     rel='noreferrer'
     href='https://www.imdb.com/name/nm3889169/'>
     here
    </a>
   </h5>
   <div className='grid-3 all-center' id='credits'>
    <div>
     <p>
      <a
       target='_blank'
       rel='noreferrer'
       href='https://www.vudu.com/content/movies/details/Mash-Up-Season-1/391776'>
       Mashup
      </a>
     </p>
     <img
      style={{ height: "100px", width: "100px" }}
      src={mashup}
      alt='Mash Up'
     />
    </div>
    <div>
     <p>
      <a
       target='_blank'
       rel='noreferrer'
       href='https://www.amazon.com/Man-Up-Stand/dp/B088Q1SDQ1'>
       Man Up Stand Up
      </a>
     </p>
     <img
      style={{ height: "100px", width: "100px" }}
      src={manup}
      alt='Man Up Stand Up'
     />
    </div>
    <div>
     <p>
      <a
       target='_blank'
       rel='noreferrer'
       href='https://www.imdb.com/title/tt0364829/'>
       Last Comic Standing
      </a>
     </p>
     <img
      style={{ height: "100px", width: "100px" }}
      src={lastcomic}
      alt='Last Comic Standiung'
     />
    </div>
   </div>
  </>
 );
};

export default Main;
