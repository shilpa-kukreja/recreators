import Link from "next/link";

const Team = ({
  bg = "bgc-lighter",
  teamMembers = [
   
    {
      image: "assets/images/team/team-two3.png",
      name: "Shilpa Kukreja",
      designation: "Co-Founder & Creative Director",
      description: "The creative force behind our design vision. Shilpa specializes in branding, packaging, and communication design that not only looks iconic but drives real market impact.  ",
    },
    {
      image: "assets/images/team/team-two4.png",
      name: "Gaurav Kukreja",
      designation: "Co-Founder & Digital Marketing Expert",
      description: " A digital growth strategist with years of experience in SEO, social media, and performance marketing. Gaurav ensures every campaign delivers measurable results and long-term brand growth.", 
    },
  ],
}) => {
  return (
    <section className={`team-area-two ${bg}`}>
      <div className="container   sm:pt-130 !pt-10 rpt-100 sm:pb-100 !pb-5 rpb-70 px-sm-0">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div
              className="section-title text-center mb-50"
              data-aos="zoom-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="subtitle mt-10 mb-15">MEET OUR STUDIO</span>
              <h2>The Minds Behind Recreators</h2>
              <p>A power duo of creativity and strategy—leading a team that designs, builds, and grows brands.</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {teamMembers.map((member) => (
            <div
            className="col-xl-3 col-lg-3 col-sm-3"
              key={member.name}
              data-aos="flip-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="team-item style-two">
                <div className="image">
                  <img src={member.image} alt={member.name} />
                  <div className="social-style-one">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="content">
                  <h5>
                    <Link href="team-details">{member.name}</Link>
                  </h5>
                  <span className="designation text-black font-bold">{member.designation}</span>
                  <p className="text text-gray-700 text-justify">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Team;
