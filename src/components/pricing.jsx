import React from "react"
import { CircleCheck } from "lucide-react";

export default function Pricing() {
  
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="relative w-full py-24 space-y-24">
          <div className="mx-auto max-w-5xl space-y-6 text-center">
            <p className="flex justify-center items-center header-text">Pricing</p>
            <p className="flex justify-center mx-60 text-center mt-5 paragraph-text">Unlock advanced filtering, hundreds of premium questions, video interview guides, and exclusive insider community access.</p>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">

            <div className="h-[55vh] rounded-3xl bg-secondary-color hover:bg-[#1F1C1C] duration-500">
              <div className="flex flex-1 flex-col p-8 space-y-4">
                <h3 className="font-medium text-xl mb-6">Monthly</h3>
                <div className="flex gap-2 items-baseline">
                  <span className="inline-flex items-baseline font-light text-4xl">$20</span>
                  <span className="paragraph-text">/month</span>
                </div>
                <p className="paragraph-text">Unrestricted platform access.</p>
                <button className="bg-white rounded-lg text-black py-2 mb-7 cursor-pointer hover:bg-white/80">Try a 3-day free trial</button>
                <ul className="flex flex-col space-y-3 justify-center align-middle">
                  <div className="flex space-x-3 items-center">
                    <CircleCheck className="paragraph-text"></CircleCheck>
                    <p className="pricing-text">Unlimited access to all questions</p>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <CircleCheck className="paragraph-text"></CircleCheck>
                    <p className="pricing-text">Get paid to contribute questions</p>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <CircleCheck className="paragraph-text"></CircleCheck>
                    <p className="pricing-text">Interview video guides</p>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <CircleCheck className="paragraph-text"></CircleCheck>
                    <p className="pricing-text">Advanced filtering and question playlists</p>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <CircleCheck className="paragraph-text"></CircleCheck>
                    <p className="pricing-text">Insider community access</p>
                  </div>
                </ul>
              </div>
            </div>

            <div className="relative h-[55vh] rounded-3xl bg-secondary-color border-1 border-yellow-500 bg-yellow-500/10 hover:bg-yellow-500/20 duration-500">
              <button className="absolute bg-yellow-500 z-10 left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 text-white rounded-3xl px-3 py-1 mx-auto">Best Value</button>
              <div className="flex flex-1 flex-col p-8 space-y-4">
                <h3 className="font-medium text-xl mb-6">Annual</h3>
                <div className="flex gap-2 items-baseline">
                  <span className="inline-flex items-baseline font-light text-4xl">$200</span>
                  <span className="paragraph-text">/year</span>
                </div>
                <p className="paragraph-text">Unrestricted platform and community access.</p>
                <button className="bg-white rounded-lg text-black py-2 mb-7 cursor-pointer hover:bg-white/80">Try a 3-day free trial</button>
                <ul className="flex flex-col space-y-3 justify-center align-middle">
                  <div className="flex space-x-3 items-center">
                    <CircleCheck className="paragraph-text"></CircleCheck>
                    <p className="pricing-text">Unlimited access to all questions</p>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <CircleCheck className="paragraph-text"></CircleCheck>
                    <p className="pricing-text">Get paid to contribute questions</p>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <CircleCheck className="paragraph-text"></CircleCheck>
                    <p className="pricing-text">Interview video guides</p>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <CircleCheck className="paragraph-text"></CircleCheck>
                    <p className="pricing-text">Advanced filtering and question playlists</p>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <CircleCheck className="paragraph-text"></CircleCheck>
                    <p className="pricing-text">Insider community access</p>
                  </div>
                </ul>
              </div>
            </div>




            <div className="h-[50vh] rounded-3xl bg-yellow-500/50">Pricing2</div>
          </div>
        </div>
      </div>
    </section>
  );
};
