import React from "react";
import Layout from "../../components/layout";
export default function Referrals() {
  return (
    <>
      <Layout pageName="referrals" Description="referrals">
        <div className="flex flex-col justify-center items-center mx-10 md:mx-16 my-24 md:my-32 ">
          <div className="text-2xl tracking-wider mb-8">
            <h1>refer a friend and be rewarded</h1>
          </div>
          <div className="flex flex-col gap-4 mx-5 md:mx-32">
            <div>
              <h1 className="mb-4 text-lg tracking-wider">
                spread the word about lml repair - earn up to $1000 a year.
              </h1>

              <p>
                It pays to be<span className="font-bold"> good freind. </span>
                Share the lml repair experience with our refer-a-friend program.
                Each successful referral can lead to a $50 LML Repair
                promotional card to:
              </p>
            </div>
            <div className="flex flex-row gap-3 my-5">
              <div>
                <img className="w-14" src="/repair.png" />
              </div>
              <div>
                <h1 className="text-lg tracking-wider text-yellow-300">
                  use for your next repair.
                </h1>
                <h2>
                  use the money received from referring friends or family
                  towards your next repair service
                </h2>
              </div>
            </div>
            <div className="flex flex-row gap-3 my-2">
              <div>
                <img className="w-14" src="/repair.png" />
              </div>
              <div>
                <h1 className="text-lg tracking-wider text-yellow-300">
                  glam up your current device
                </h1>
                <h2>
                  Get a sweet new case and high-quality Screen Protectors with
                  Refer-a-Friend reward.
                </h2>
              </div>
            </div>
            <div>
              <h1>joining the refer-a-friend program is quick and easy!</h1>
              <h2>
                sign up now to start making referrals and reaping the benefits.
              </h2>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
