import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
      author: "David Fischer",
      role: "On Capterra",
      avatar: "DF",
      avatarBg: "bg-primary",
      rating: 5,
      image: "/Avatar Users.png",
    },
    {
      quote:
        "My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!",
      author: "Lillian Williams",
      role: "On Capterra",
      avatar: "LW",
      avatarBg: "bg-success",
      rating: 5,
      image: "/Avatar Users (1).png",
    },
    {
      quote:
        "Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
      author: "Michael",
      role: "On Capterra",
      avatar: "M",
      avatarBg: "bg-orange",
      rating: 5,
      image: "/Avatar Users (2).png",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className=" mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What people are saying about LeadCRM
          </h2>
          {/* <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-warning text-warning" />
            ))}
          </div> */}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#f5dcf2] rounded-2xl p-6 card-shadow hover-lift border border-border flex flex-col h-full"
            >
              {/* Quote */}
              <p className="text-[#2C2C2C] text-md leading-relaxed mb-3">
                "{testimonial.quote}"
              </p>

              {/* Stars — stays after quote */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#090F4E] text-[#090F4E]"
                  />
                ))}
              </div>

              {/* Push footer to bottom regardless of quote size */}
              <div className="border-t-2 pt-3 mt-auto flex items-center gap-3 border-[#7A7A7A4F]">
                <img
                  src={testimonial.image}
                  alt="avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
