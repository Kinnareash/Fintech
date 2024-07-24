
"use client";

import { Footer } from "flowbite-react";
import { BsLinkedin, BsFacebook, BsGithub, BsInstagram, BsThreads } from "react-icons/bs";

export function BFooter() {
  return (
    <Footer container className="p-0 text-white">
      <div className="w-full bg-black p-10">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <h1 className="font-bold text-[#7979ff] text-4xl">Groww.</h1>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title className="text-xl" title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-xl" title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link target="blank" href="https://github.com/Kinnareash">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-xl" title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="By Kinnareash™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon target="blank" href="https://www.facebook.com/profile.php?id=61556007002440&mibextid=ZbWKwL" icon={BsFacebook} />
            <Footer.Icon target="blank" href="http://instagram.com/kinnareash" icon={BsInstagram} />
            <Footer.Icon target="blank" href=" https://www.threads.net/@kinnareash" icon={BsThreads} />
            <Footer.Icon target="blank" href="https://github.com/Kinnareash" icon={BsGithub} />
            <Footer.Icon target="blank" href="https://www.linkedin.com/in/kinnareash-v-49001624b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
