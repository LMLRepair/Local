import Image from 'next/image';
import Layout from '../components/layout';
import Link from 'next/link';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';

export default function Home() {
  return (
    <Layout pageName="Home" pageDescription="Home">
      <Carousel
        className="p-10"
        showThumbs={false}
        showArrows={true}
        autoPlay={true}
      >
        <div>
          <Image
            src="/images/home/pic1.png"
            alt="pic1"
            width={378}
            height={504}
          />
          <p className="legend">Image 1</p>
        </div>
        <div>
          <Image
            src="/images/home/pic2.png"
            alt="pic2"
            width={378}
            height={504}
          />
          <p className="legend">Image 2</p>
        </div>
        <div>
          <Image
            src="/images/home/pic3.png"
            alt="pic3"
            width={378}
            height={504}
          />
          <p className="legend">Image 3</p>
        </div>
        <div>
          <Image
            src="/images/home/pic4.png"
            alt="pic4"
            width={378}
            height={504}
          />
          <p className="legend">Image 4</p>
        </div>
        <div>
          <Image
            src="/images/home/pic5.png"
            alt="pic5"
            width={378}
            height={504}
          />
          <p className="legend">Image 5</p>
        </div>
        <div>
          <Image
            src="/images/home/pic6.png"
            alt="pic5"
            width={378}
            height={504}
          />
          <p className="legend">Image 6</p>
        </div>
        <div>
          <Image
            src="/images/home/pic7.png"
            alt="pic5"
            width={378}
            height={504}
          />
          <p className="legend">Image 7</p>
        </div>
        <div>
          <Image
            src="/images/home/pic8.png"
            alt="pic5"
            width={378}
            height={504}
          />
          <p className="legend">Image 8</p>
        </div>
        <div>
          <Image
            src="/images/home/pic9.png"
            alt="pic5"
            width={378}
            height={504}
          />
          <p className="legend">Image 9</p>
        </div>
      </Carousel>
      <section className="flex flex-col justify-center items-center p-5 bg-white">
        <Image src="/images/arrow.png" alt="arrow" width={100} height={100} />
        <h1 className="text-3xl">West Seattle</h1>
      </section>
      <section className="flex flex-col justify-center items-center p-5 bg-white">
        <h1 className="text-3xl">Ballard</h1>

        <Image src="/images/arrow2.png" alt="arrow" width={100} height={100} />
      </section>

      <Carousel
        className="p-10"
        showThumbs={false}
        showArrows={true}
        autoPlay={true}
      >
        <div>
          <Image
            src="/images/ballardpics/1.png"
            alt="1"
            width={378}
            height={504}
          />
          <p className="legend">Image 1</p>
        </div>
        <div>
          <Image
            src="/images/ballardpics/2.png"
            alt="2"
            width={378}
            height={504}
          />
          <p className="legend">Image 2</p>
        </div>
        <div>
          <Image
            src="/images/ballardpics/3.png"
            alt="3"
            width={378}
            height={504}
          />
          <p className="legend">Image 3</p>
        </div>
        <div>
          <Image
            src="/images/ballardpics/4.png"
            alt="4"
            width={378}
            height={504}
          />
          <p className="legend">Image 4</p>
        </div>
        <div>
          <Image
            src="/images/ballardpics/5.png"
            alt="5"
            width={378}
            height={504}
          />
          <p className="legend">Image 5</p>
        </div>
        <div>
          <Image
            src="/images/ballardpics/6.png"
            alt="5"
            width={378}
            height={504}
          />
          <p className="legend">Image 6</p>
        </div>
        <div>
          <Image
            src="/images/ballardpics/7.png"
            alt="5"
            width={378}
            height={504}
          />
          <p className="legend">Image 7</p>
        </div>
        <div>
          <Image
            src="/images/ballardpics/8.png"
            alt="5"
            width={378}
            height={504}
          />
          <p className="legend">Image 8</p>
        </div>
        <div>
          <Image
            src="/images/ballardpics/9.png"
            alt="5"
            width={378}
            height={504}
          />
          <p className="legend">Image 9</p>
        </div>
        <div>
          <Image
            src="/images/ballardpics/10.png"
            alt="10"
            width={378}
            height={504}
          />
          <p className="legend">Image 10</p>
        </div>
        <div>
          <Image
            src="/images/ballardpics/11.png"
            alt="11"
            width={378}
            height={504}
          />
          <p className="legend">Image 11</p>
        </div>
        <div>
          <Image
            src="/images/ballardpics/12.png"
            alt="12"
            width={378}
            height={504}
          />
          <p className="legend">Image 12</p>
        </div>
        <div>
          <Image
            src="/images/ballardpics/13.png"
            alt="5"
            width={378}
            height={504}
          />
          <p className="legend">Image 13</p>
        </div>
      </Carousel>
      <div>
        <div className="bg-yellow-300 flex justify-center items-center p-10">
          <div className="text-center">
            <h1 className="text-6xl ">LML Repair</h1>
            <p className="text-3xl my-10">
              Providing The Best Electronic Repair <br />
              Service In The Greater Seattle Area.
            </p>

            <Link href="/bookings" className="text-3xl bg-black p-4 text-white hover:bg-white hover:text-black cursor-pointer">
           
                Book Repair
            
            </Link>
          </div>
        </div>
        <div className="text-center p-10 bg-white">
          <h1 className="text-2xl font-bold my-5">
            Experience An LML Repair Today
          </h1>
          <p className="text-lg">
            Enter our office today, and you can expect premier customer service,
            starting with a low cost diagnostic test and a free quote for
            repairs with no obligation to purchase. With waiting times as short
            as 30 minutes and a large stock of high quality parts, and
            reasonable prices we are ready to help you should you decide to go
            ahead with the fix. Combine this 5-star service with afforable
            warranty plans on all repairs, and it’s no wonder that LML Repair is
            Seattle’s first choice for electronic repairs.
          </p>

          <h1 className="text-2xl font-bold my-5">
            Schedule your repair online!
          </h1>
          <p className="text-lg">
            At LML Repair, all repairs come with low cost diagnostics and
            afforable warranty plans – use our fast device repair services with
            confidence and leave with peace of mind that we’ve got your back, no
            matter what happens.
          </p>
        </div>
        <div className="bg-yellow-300 text-center p-10 bg-white">
          <h1 className="text-2xl font-bold">HIGH-QUALITY PARTS</h1>
          <p className="text-lg my-5">
            LML Repair only uses high-quality OEM and aftermarket parts for
            repairs
          </p>

          <h1 className="text-2xl font-bold">LOST COST DIAGNOSIS</h1>
          <p className="text-lg my-5">
            Not sure what’s wrong? We’ll diagnose your issue at a low cost. With
            fix, no fee.
          </p>
          <h1 className="text-2xl font-bold">
            CERTIFIED TECHNICIAN SAME-DAY REPAIR
          </h1>
          <p className="text-lg my-5">
            Knowledgeable, passionate service from qualified and trained
            experts. Most LML repairs are completed within 30 minutes.
          </p>
          <h1 className="text-2xl font-bold">AFFORDABLE WARRANTY PLANS</h1>
          <p className="text-lg my-5">
            All repairs come with a multitude of afforable warranty plans for
            your peace of mind.
          </p>
          {/* <small className="text-sm my-5">No Refunds</small>*/}
          <h1 className="text-2xl font-bold">BEST REPAIR SERVICE IN SEATTLE</h1>
          <p className="text-lg my-5">
            LML Repair offers Seattle’s friendliest, fastest repair service with
            expert repairs for a variety of iPhone, iPad, Apple Watch, MacBook,
            Samsung, Pixel, Surface Pro, Nintendo Switch, Playstation, Xbox, LG,
            Oneplus, Motorola, PC devices. <br />
            And, with an affordable warranty plans on all repairs, we’ve got
            your back when things go wrong in future
          </p>
        </div>

        <div className="elfsight-app-46eba886-4955-417d-9e36-b02ca1a0e69b p-20"></div>

        <div className="elfsight-app-21af9976-08a4-410b-ab8c-1a076f700795 p-20"></div>

        <span>
          <div className="elfsight-app-6023ac63-076a-486b-ae9e-8c00b007ab8e"></div>
        </span>

        <span>
          <div className="elfsight-app-f2133ae9-d9ce-43bd-9523-90644adb4c8c"></div>
        </span>
      </div>
    </Layout>
  );
}
