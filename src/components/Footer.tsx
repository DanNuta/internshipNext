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

const flex = "flex items-center gap-2";

export const Footer = () => {
  return (
    <footer className="bg-[white] dark:bg-footer-dark">
      <div className="max-w-7xl mx-auto py-14 grid grid-cols-12 gap-6 border-b-[1px] border-clr-primary dark:border-footer-text-dark">
        <div className="col-span-3">
          <Link className="dark:text-[white]" href="/">
            <Logo />
          </Link>
          <p className="mt-8 mb-6 text-[12px] font-medium text-clr-primary dark:text-footer-text-dark">
            Geosport mereu este gata să ofere servicii de calitate, în scurt
            timp, alături de o echipă bună și cu dorința de a aduce Europa
            acasă.
          </p>

          <ul className="flex items-center gap-6 dark:text-card">
            <li>
              <Link href="#">
                <Instagram />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Facebook />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Youtube />
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-2">
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

        <div className="col-span-3">
          <h1 className="font-bold text-[20px] text-clr-primary mb-8 dark:text-[white]">
            Contact
          </h1>

          <ul className="flex flex-col gap-5 dark:text-footer-text-dark">
            <li className={`${flex}`}>
              <Clock /> 9:00 - 18:00
            </li>

            <li className={`${flex}`}>
              <Tel /> +373 787 53 333
            </li>

            <li className={`${flex}`}>
              <Email /> scgeotermal.av@gmail.com
            </li>

            <li className={`${flex}`}>
              <Location />
              Chișinău, str. Alba-Iulia 190/1
            </li>
          </ul>
        </div>

        <div className="col-span-4">
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
          Copyright © 2022. Toate drepturile sunt rezervate.
        </p>
      </div>
    </footer>
  );
};
