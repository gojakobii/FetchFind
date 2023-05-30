import React from "react"

import FooterLogo from "../assets/FooterLogo"

function Footer( props ) {
    return (
        <footer className="lozad pt-20 md:pt-24 bg-footer-texture bg-center bg-no-repeat flex flex-col justify-center md:px-10 px-2 mt-auto pb-5 md:pb-14" data-loaded="true">
                <div className="md:flex max-w-[92rem] mx-auto">
                    <div className="-mt-6 min-w-[252px] hidden md:block md:mr-[2rem] lg:mr-[10rem] xl:mr-[13rem]">
                        <img className="h-12[rem] mb-3 mx-auto" src="../assets/footer-logo.svg" alt="Fetch logo"/>
                    </div>
                </div>
                <div className="md:max-w-full sm:max-w-[35rem] max-w-[31rem] md:mx-0 mx-auto px-3">
                    <img className="h-12[rem] md:hidden mx-auto mb-8" src="../assets/footer-logo.svg" alt="Fetch logo"/>                    {/* <FooterLogo className="h-[12rem] lg:hidden mx-auto mb-8"/>  */}
                    <div className="grid grid-cols-2 mb-8 md:mb-24 lg:mb-[5.7rem] gap-2 md:gap-10 lg:gap-20 xl:gap-28">
                        <div className="flex flex-col space-y-4 md:space-y-5 font-medium">
                            <p className="flex text-white font-lexend text-base sm:text-lg md:text-sm hover:text-[#FBA919]">Fetch for Business</p>
                            <p className="flex text-white font-lexend text-base sm:text-lg md:text-sm hover:text-[#FBA919]">Contact Support</p> 
                            <p className="flex text-white font-lexend text-base sm:text-lg md:text-sm hover:text-[#FBA919]">Work at Fetch</p>
                            <p className="flex text-white font-lexend text-base sm:text-lg md:text-sm hover:text-[#FBA919]">Frequently Asked Questions</p>
                        </div>
                        <div className="flex flex-col space-y-4 md:space-y-5 font-light">
                            <p className="flex text-white font-lexend text-base sm:text-lg md:text-sm hover:text-[#FBA919]">Terms of Service</p>
                            <p className="flex text-white font-lexend text-base sm:text-lg md:text-sm hover:text-[#FBA919]">Privacy Policy</p>
                            <p className="flex text-white font-lexend text-base sm:text-lg md:text-sm hover:text-[#FBA919]">California Notice at Collection</p>
                        </div>
                        <div className="md:mt-auto my-5 md:my-0 flex flex-col justify-center md:justify-end">
                            <p className="text-white text-sm md:text-xs font-light font-primary sm:text-center md:text-left mb-0">© 2023, Fetch, All right reserved.</p>
                        </div>
                    </div>
                </div>
        </footer>
    )
}

export default Footer;