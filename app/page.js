import Link from "next/link";
import React from "react";
import classes from "./page.module.css"
import ImageSlideshow from "@/components/(images)/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow></ImageSlideshow>
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste and share food from all over the world</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>Naglowek do uzupelnienia</h2>
          <p>sss</p>
          <p>ssss</p>
        </section>

        <section className={classes.section}>
          <h2>Naglowke do uzupelnienia</h2>
          <p>dsfdsfsdf</p>
          <p>sdsfsdfd</p>
        </section>
      </main>
    </>
  );
}
