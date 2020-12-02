import React from "react"
import Link from "next/link"
import linkStyles from "../styles/featured-row-1.module.scss"

export default function FeaturedRow1({  }) {
    return (
  <div class="container mx-auto">
  <div className={[ linkStyles.row, "grid grid-cols-1 sm:grid-cols-2 md:grid-rows-2 md:grid-cols-12 grid-flow-row md:grid-flow-col gap-4"].join(" ")}>
    <Link href="/sitecore">
    <a className={[ linkStyles.mainBlock, "md:col-span-5 md:row-span-2 pt-8 rounded-md flex justify-center items-center grid place-items-end place-content-end"].join(" ")} style={{ backgroundImage: "url(https://preview.colorlib.com/theme/eden/img/magazine/1.jpg)" }}>
      <div class="bg-white w-5/6 p-8">
        <div className="text-highlight mb-1">Sitecore</div>
        <div className="text-2xl font-semibold mb-2">HOW TO CREATE A CUSTOM DROPLIST IN SITECORE</div>
        <div className="text-xs">October 4, 2020</div>
      </div>    
    </a>
    </Link>
    <Link href="/sitecore">
    <a className={[ linkStyles.secondBlock, "md:col-span-4 md:row-span-2 p-8 rounded-md flex justify-center items-center"].join(" ")} style={{ backgroundImage: "url(https://preview.colorlib.com/theme/eden/img/magazine/1.jpg)" }}>
      <div>
        <div className="text-white mb-1 text-center max-w-prose">Dev Ops</div>
        <div className="text-white text-2xl font-semibold mb-2 text-center max-w-min mx-auto">WHAT ARE AUTOMATED DEPLOYMENTS AND WHY DO I NEED THEM?</div>
        <div className="text-white text-xs text-center max-w-prose">October 8, 2020</div>
      </div>
    </a>
    </Link>
    <Link href="/sitecore">
    <a className={[ linkStyles.finalBlocks, "md:col-span-3 md:row-span-1 pt-8 rounded-md flex justify-center items-center grid place-content-end"].join(" ")} style={{ backgroundImage: "url(https://preview.colorlib.com/theme/eden/img/magazine/1.jpg)" }}>
      <div class="bg-white w-5/6 p-4 mx-auto">
        <div className="text-highlight mb-1 text-xs text-center">Sitecore</div>
        <div className="text-sm font-semibold text-center">HOW TO CREATE A CUSTOM DROPLIST IN SITECORE</div>
      </div>
    </a>
    </Link>
    <Link href="/sitecore">
    <a className={[ linkStyles.finalBlocks, "md:col-span-3 md:row-span-1 pt-8 rounded-md flex justify-center items-center grid place-content-end"].join(" ")} style={{ backgroundImage: "url(https://preview.colorlib.com/theme/eden/img/magazine/1.jpg)" }}>
      <div class="bg-white w-5/6 p-4 mx-auto">
        <div className="text-highlight mb-1 text-xs text-center">Sitecore</div>
        <div className="text-sm font-semibold text-center">HOW TO CREATE A CUSTOM DROPLIST IN SITECORE</div>
      </div>
    </a>
    </Link>
  </div>
  </div>
    )
}
  