import Counter from "./Counter";
const CounterItems = () => {
  return (
    <div
      className="counter-wrap br-10 m-0"
      data-aos="fade-left"
      data-aos-duration={1500}
      data-aos-offset={50}
      style={{
        backgroundImage:
          "url(assets/images/background/counter-bg-with-dots.png)",
      }}
    >
      <div className="row">
        {[
          { end: 500, title: "Creative Projects Delivered" , text: "Branding, packaging, web, and marketing campaigns tailored to every client’s story." },
          { end: 350, title: "Happy Clients" , text: "Businesses that trust us to bring their ideas to life with design and strategy."},
          { end: 4, title: "Years of Excellence", text: "Since 2020, blending creativity and technology to fuel business growth." },
        ].map(({ end, title , text}, i) => (
          <div key={i} className="col-md-4 col-sm-6">
            <div className="counter-item counter-text-wrap">
              <span
                className="count-text plus"
                data-speed={3000}
                data-stop={end}
              >
                <Counter end={end} />
              </span>
              <span className="counter-title">{title}</span>
              <div className="text !text-justify">{text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CounterItems;
