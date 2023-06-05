import React from "react";
import Link from "next/link";

import {
  Logo,
  Instagram,
  Youtube,
  Facebook,
  Location,
  Tel,
  Email,
  Clock,
} from "@/icons";

export const Footer = () => {
  return (
    <footer className="bg-[white] dark:bg-footer-dark">
      <div className="max-w-7xl w-[95%] mx-auto py-14 grid grid-cols-12 gap-6 border-b-[1px] border-clr-primary dark:border-footer-text-dark">
        <div className="grid col-span-12 justify-center md:col-span-3 lg:col-span-2 ">
          <Link className="dark:text-[white]" href="/">
            <Logo />
          </Link>

          <p className="hidden md:flex md:mt-8 md:mb-6 md:text-[12px] md:font-medium md:text-clr-primary dark:text-footer-text-dark">
            Geosport is always ready to offer quality services, in short time,
            with a good team and with the desire to bring Europe the home.
          </p>

          <ul className="hidden md:flex md:items-center md:gap-6 dark:text-card">
            <li>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCmC_gBsoRYIik8Ez-Y1oPSA"
              >
                <Instagram />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCmC_gBsoRYIik8Ez-Y1oPSA"
              >
                <Facebook />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCmC_gBsoRYIik8Ez-Y1oPSA"
              >
                <Youtube />
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex lg:flex-col lg:col-span-2 ">
          <h1 className="font-bold text-[20px] text-clr-primary mb-8 dark:text-[white]">
            Link
          </h1>

          <ul className="flex flex-col gap-4 dark:text-footer-text-dark">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="col-span-12 text-center md:col-span-4  md:text-left lg:col-span-4">
          <h1 className="font-bold text-[20px] text-clr-primary mb-8 dark:text-[white]">
            Contact
          </h1>

          <ul className="flex flex-col gap-5 justify-center md:justify-start dark:text-footer-text-dark">
            <li className="flex justify-center items-center gap-2 md:justify-start ">
              <Clock /> 9:00 - 18:00
            </li>

            <li className="flex justify-center items-center gap-2 md:justify-start">
              <Tel />
              <Link href="tel:1-562-867-5309">1-562-867-5309</Link>
            </li>

            <li className="flex justify-center items-center gap-2 md:justify-start">
              <Email />
              <Link href="mailto:scgeotermal.av@gmail.com">
                scgeotermal.av@gmail.com
              </Link>
            </li>

            <li className="flex justify-center items-center gap-2  md:justify-start">
              <Location />
              <Link
                target="_blank"
                href="https://www.google.com/maps?ll=47.040759,28.846954&z=12&t=m&hl=ro&gl=US&mapclient=embed"
              >
                Chișinău, str. Alba-Iulia 190/1
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-12 md:col-span-5 lg:col-span-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d21751.593797945974!2d28.845790299072256!3d47.041227144482136!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sro!2s!4v1685084080939!5m2!1sro!2s"
            width="600"
            height="230"
            loading="lazy"
            className="w-full"
          ></iframe>
        </div>
      </div>

      <div>
        <p className="py-5 text-center dark:text-footer-text-dark">
          Copyright © 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
