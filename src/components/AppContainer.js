import React from 'react'
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax"

const AppContainer = () => {
  return (
    <div className="parallax">
      <ParallaxProvider>
        <ParallaxBanner
          className="logo-letters"
          layers={[
            {
              image:
                "https://images.pexels.com/photos/4710556/pexels-photo-4710556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              amount: 0.3,
            },
          ]}
          style={{
            height: "800px",
          }}
        >
          <h4>RSC</h4>
        </ParallaxBanner>
        <ParallaxBanner
          className="really"
          layers={[
            {
              image:
                "https://images.pexels.com/photos/5618651/pexels-photo-5618651.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              amount: 0.5,
            },
          ]}
          style={{
            height: "800px",
          }}
        >
          <h3>Really Sweet Content</h3>
          <p>
            Bold and beautiful design is key to a great online experience. While
            learning color theory at the School of the Art Institute of Chicago,
            our lead designer formed the foundation of her design ethos. We
            pride ourselves on delivering a website we can all be proud of.
          </p>
        </ParallaxBanner>
        <ParallaxBanner
          className="remarkable"
          layers={[
            {
              image:
                "https://images.pexels.com/photos/5319953/pexels-photo-5319953.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
              amount: 0.4,
            },
          ]}
          style={{
            height: "800px",
          }}
        >
          <h3>Remarkable Software Creation</h3>
          <p>
            First impressions matter. Your website (along with your social
            media) is often the first impression your business makes on a
            client. Consider your website to be a stand-in for a client meeting
            you in person and hearing your elevator pitch. You want to be sure
            you have a beautiful website that tells your story in a powerful way
            and increases conversions.
          </p>
        </ParallaxBanner>
        <ParallaxBanner
          className="razor"
          layers={[
            {
              image:
                "https://images.pexels.com/photos/2225771/pexels-photo-2225771.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
              amount: 0.5,
            },
          ]}
          style={{
            height: "800px",
          }}
        >
          <h3>Razor Sharp Communication</h3>
          <p>
            Our goal is to be great listeners. Nobody wants to feel like they're
            communicating with a brick wall when they email a software engineer.
            We pay attention and put your needs first. So no more missed
            messages, scope creep, or cranky developers. Good vibes and clear
            intentions only.
          </p>
        </ParallaxBanner>
        <ParallaxBanner
          className="refined"
          layers={[
            {
              image:
                "https://images.pexels.com/photos/3222412/pexels-photo-3222412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              amount: 0.5,
            },
          ]}
          style={{
            height: "800px",
          }}
        >
          <h3>Refined. Specific. Clean.</h3>
          <p>
            <span>
              This is our ethos.
              <br />
              <br />
              Refined
              <br />
              <em>elegant and cultured in appearance, manner, or taste.</em>
              <br />
              <br />
              Specific
              <br />
              <em>
                precise and clear in making statements or issuing instructions.
              </em>
              <br />
              <br />
              Clean
              <br />
              <em>having a simple, well-defined, and pleasing shape.</em>
            </span>
          </p>
        </ParallaxBanner>
      </ParallaxProvider>
    </div>
  )
}

export default AppContainer

