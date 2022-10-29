import React from "react";



function AboutUs() {
  return (
    <div  className="about"
    name='about'>
      <section class="dark:bg-white dark:text-black">
        <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p class="p-2 text-sm font-medium tracking-wider text-center uppercase"></p>
          <h2 class="mb-12 text-4xl font-custom leading-none text-center sm:text-5xl">AboutUs</h2>
          <div class="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div>
              <h3 class="font-semibold">WOW CAKES</h3>
              <p class="mt-1 dark:text-black">We are exactly what you are looking for. Yes, we are an FSSAI certified online cake and Bakery Company that specializes in delivering absolutely lip-smacking delicacies. Currently, we are delivering cakes in Thane and soon in other cities. We are not just a bakery, we are not just bakers. In fact, we are just like you, a bunch of food lovers fascinated with sweet indulgence, who dreamt of creating an appetizing fairy land of divine delicacies that relishes the utmost desires.</p>
            </div>
            <div>
              <h3 class="font-semibold">Why To Choose WOW Cakes For Online Cake Delivery?</h3>
              <p class="mt-1 dark:text-black">Now,gorge on your favorite delicacies and take your special occasions to new heights with WOW Cakes online cake delivery service. With our melt-in-mouth delicacies now you can also deliver your heartfelt wishes and affection to your loved ones on their special days. For instance, if you want to send a delicious cake to your teacher on this Teachers Day on same day, then its possible through our online Teachers Day cakes delivery service. </p>
            </div>
            <div>
              <h3 class="font-semibold">Variety And Flavors Of Cakes To Make You Surrender Your Senses</h3>
              <p class="mt-1 dark:text-black">Cakes available in our bakery are always fresh, soft, moist, mushy and fluffy in texture. We have flavorsome cakes to illuminate your every occasion.These hard-to-resist delicacies are available in a plethora of flavors like Red Velvet, Butterscotch, Strawberry, Chocolate, Vanilla, Blueberry, Pineapple, Kiwi, Coffee, Mango, Ferrero Rocher, Kit-kat, Oreo and many more.</p>
            </div>
            {/* <div>
				<h3 class="font-semibold">Lorem ipsum dolor sit amet.</h3>
				<p class="mt-1 dark:text-black">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
			</div> */}
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutUs