import { e as createComponent, g as addAttribute, k as renderHead, l as renderSlot, r as renderTemplate, h as createAstro, m as maybeRenderHead, s as spreadAttributes, n as renderComponent, o as renderScript } from '../chunks/astro/server_CQ69ruJb.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$9 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Sookshum labs</title>${renderHead()}</head> <body class="bg-black poppins-regular" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/layouts/Layout.astro", void 0);

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};

const $$Astro$8 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Icon;
  const {
    color = "currentColor",
    size = 24,
    "stroke-width": strokeWidth = 2,
    absoluteStrokeWidth = false,
    iconNode = [],
    class: className,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes({
    ...defaultAttributes,
    width: size,
    height: size,
    stroke: color,
    "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
    ...!hasA11yProp(rest) && { "aria-hidden": "true" },
    ...rest
  })}${addAttribute(["lucide", className], "class:list")}> ${iconNode.map(([Tag, attrs]) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs })}`)} ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/node_modules/@lucide/astro/src/Icon.astro", void 0);

const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

const createLucideIcon = (iconName, iconNode) => {
  const Component = createComponent(
    ($$result, $$props, $$slots) => {
      const { class: className, ...restProps } = $$props;
      return renderTemplate`${renderComponent(
        $$result,
        "Icon",
        $$Icon,
        {
          class: mergeClasses(
            Boolean(iconName) && `lucide-${toKebabCase(iconName)}`,
            Boolean(className) && className
          ),
          iconNode,
          ...restProps
        },
        { default: () => renderTemplate`${renderSlot($$result, $$slots["default"])}` }
      )}`;
    },
    void 0,
    "none"
  );
  return Component;
};

const ArrowUpRight = createLucideIcon("arrow-up-right", [["path", { "d": "M7 7h10v10" }], ["path", { "d": "M7 17 17 7" }]]);

const ChevronDown = createLucideIcon("chevron-down", [["path", { "d": "m6 9 6 6 6-6" }]]);

const Menu = createLucideIcon("menu", [["path", { "d": "M4 5h16" }], ["path", { "d": "M4 12h16" }], ["path", { "d": "M4 19h16" }]]);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-black w-full h-32 flex items-center relative max-w-480 mx-auto"> <div class="relative w-full px-5 lg:px-0 h-auto mx-auto lg:mx-20.25 flex justify-between items-center text-white"> <span class="inline-block"> <img src="sookshum-logo.svg" alt="sookshum-logo" width="155" height="45" class="object-contain"> </span> <div class="hidden md:flex font-bold"> <ul class="flex md:gap-2 lg:gap-8 items-center justify-between text-sm tlg:ext-md"> <li> <a>Home</a> </li> <li class="flex gap-1 items-center services cursor-pointer"> <a>Services</a> ${renderComponent($$result, "ChevronDown", ChevronDown, {})} </li> <li> <a>Work</a> </li> <li> <a>About us</a> </li> <li> <a>Blog</a> </li> </ul> </div> <div class="text-lg font-bold h-13.75 px-6 hidden md:flex items-center rounded-full bg-[#F79A12] cursor-pointer"> <button class="w-full h-full flex justify-between items-center gap-3">
Get In touch ${renderComponent($$result, "ArrowUpRight", ArrowUpRight, {})}</button> </div> <div class="flex justify-end items-center w-full md:hidden"> ${renderComponent($$result, "Menu", Menu, { "size": 30 })} </div> <!-- <div
    class='w-full h-0 p-0 bg-black overflow-hidden absolute left-0 right-0 top-[63%] dropdown z-20 flex justify-between'
  >
    <div class='flex justify-between w-full gap-10 relative'>
      {/** first option */}
      <div
        class='text-white font-black poppins-regular flex flex-col gap-2 min-w-125'
      >
        {
          navigations.map((text, index) => {
            return (
              <span class='flex w-full capitalize hover:bg-white/10 px-10 py-7 rounded-full items-center justify-between gap-10 text-xl'>
                {text}
                <ChevronRight color='white' />
              </span>
            );
          })
        }
      </div>
      <div class='w-full flex justify-between'>
        <div class='h-full w-[40%] gap-5 flex flex-col'>
          <span
            class='flex w-full text-white capitalize bg-white/10 hover:bg-white/20 transition-all duration-300 px-5 font-bold py-5 min-w-100 rounded-[50px] items-center gap-5 text-xl'
          >
            <span class='w-20 h-20 rounded-2xl inline-block bg-white'></span>
            Shopify
          </span>
          <span
            class='flex w-full text-white capitalize bg-white/10 hover:bg-white/20 transition-all duration-300 px-5 font-bold py-5 min-w-100 rounded-[50px] items-center gap-5 text-xl'
          >
            <span class='w-20 h-20 rounded-2xl inline-block bg-white'></span>
            Shopify
          </span>
        </div>
        <div class='w-[40%]'>
          <div
            class='w-full h-fit flex flex-col rounded-4xl bg-white/10 p-5 gap-2'
          >
            <video
              src='/let-connect.webm'
              autoplay
              loop
              class='object-contain w-full z-1 rounded-4xl'
            ></video>
            <span
              class='text-white block px-5 text-2xl font-bold poppins-regular'
              >Let's create a project.</span
            >
          </div>
        </div>
      </div>
    </div>
  </div> --> </div> </header>`;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/components/header.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full h-fit text-white poppins-regular my-10 bg-black max-w-480 mx-auto"> <div class="flex relative md:flex-row flex-col justify-between h-fit max-w-480 mx-5 md:mx-20.25 my-20"> <div class="w-full md:w-fit min-h-142.5 flex flex-col justify-evenly md:justify-between font-poppins z-10 bg-transparent"> <div class="flex flex-col gap-10 w-full"> <span class="w-fit px-6.25 py-2.5 bg-white/10 border border-white/20 backdrop-blur-3xl rounded-[25px] flex justify-center items-center gap-3"> <span class="inline-block w-2 h-2 bg-green-400 rounded-full"></span> <span class="text-lg font-bold">Open For Projects</span> </span> <div class="flex flex-col gap-5 w-full"> <h1 class="text-[45px] md:text-[70px] lg:text-[80px] md:leading-26 font-extrabold bg-linear-to-r from-[#EAEAEA] to-[#ADADAD] text-transparent bg-clip-text h-fit">
We deliver <span class="inline-block bg-linear-to-r from-[#E17C27] to-[#DF5E26] bg-clip-text text-transparent">
top notch
</span><br> Custom Digital Solutions
</h1> <p class="lg:max-w-180 max-w-187.5 w-full sm:max-w-110.5 xs:max-w-[352px] font-poppins font-medium xs:font-normal xs:text-sm sm:text-2xl tracking-tight leading-8 text-[#F8F8F8B2] opacity-70">
We are a reliable technology partner to meet your custom software
            solution needs
</p> </div> </div> <div class="px-8 text-xl font-bold py-5 rounded-full bg-[#F79A12] w-fit md:mt-10 cursor-pointer"> <button class="w-full h-full flex justify-between items-center gap-2">
Request a Quote ${renderComponent($$result, "ArrowUpRight", ArrowUpRight, {})}</button> </div> </div> <video src="/sookshum-hero-video.webm" autoplay loop muted class="object-contain md:absolute md:-right-20 xl:bottom-0 xl:-top-10 md:top-30 w-auto h-150 z-1"></video> </div> </section>`;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/components/hero.astro", void 0);

const $$Astro$7 = createAstro();
const $$FeatureCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$FeatureCard;
  const { title, src, content, width, height } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full md:w-[32%] h-fit bg-[#282828B2] rounded-4xl relative flex flex-col p-2 lg:p-5 card card-animate"> <div class="relative w-full h-37.5"> <img${addAttribute(src, "src")} alt="feature-card-logo"${addAttribute(width, "width")}${addAttribute(height, "height")} class="absolute -top-16 -left-10 right-0 m-auto object-contain"> </div> <div class="px-4 flex flex-col gap-3"> <span class="text-white block relative text-2xl font-extrabold font-poppins capitalize">${title}</span> <p class="text-[#F8F8F8B2]">${content}</p> <button class="bg-[#282828B8] cursor-pointer opacity-70 text-white rounded-full w-fit py-3 px-8 mt-4 border-[0.5px] border-[#282828B2] font-bold">
Learn More
</button> </div> </div>`;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/components/features-section/FeatureCard.astro", void 0);

const $$Features = createComponent(($$result, $$props, $$slots) => {
  const p1 = "Transforming ideas into visual masterpieces, we craft stunning user experiences that captivate and convert your target audience.";
  return renderTemplate`${maybeRenderHead()}<section class="w-full min-h-172.5 max-w-480 mx-auto mt-20 flex justify-center items-center"> <div class="w-auto lg:w-[90%] h-full lg:mx-20 flex flex-col md:flex-row justify-center items-center mx-5 gap-20 md:gap-2 lg:gap-5"> ${renderComponent($$result, "Card", $$FeatureCard, { "src": "/Design.png", "title": "design", "content": p1, "width": "250", "heigh": "240" })} ${renderComponent($$result, "Card", $$FeatureCard, { "src": "/code.png", "title": "develop", "content": p1, "width": "210", "heigh": "240" })} ${renderComponent($$result, "Card", $$FeatureCard, { "src": "/Grow.png", "title": "grow", "content": p1, "width": "300", "heigh": "240" })} </div> </section>`;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/components/features-section/Features.astro", void 0);

const $$Astro$6 = createAstro();
const $$ServicesCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ServicesCard;
  const { src, title, content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full h-auto rounded-4xl p-2 lg:p-5 card bg-[#282828B2] flex flex-col justify-between items-center"> <div class="w-full h-fit flex justify-center"> <img${addAttribute(src, "src")} alt="ecom-assest" class="object-center w-full h-full"> </div> <div class="w-full text-white flex flex-col gap-2 px-2"> <span class="font-semibold text-lg capitalize">${title}</span> <p class="opacity-70"> ${content} </p> <button class="bg-[#282828B8] cursor-pointer opacity-70 text-white rounded-full w-fit py-3 px-8 mt-4 border-[0.5px] border-[#282828B2] font-bold">
Discover
</button> </div> </div>`;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/components/service-section/servicesCard.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    {
      src: "/ecom.png",
      title: "ecommerce development",
      content: "High-performance Ecommerce solutions tailored to accelerate the success of your business."
    },
    {
      src: "/mobile.png",
      title: "mobile development",
      content: "Custom mobile applications designed to be intuitive and engaging, driving customer acquisition and retention."
    },
    {
      src: "/web.png",
      title: "web app development",
      content: "Creating custom web apps that transform ideas into powerful user-centric solutions for digital success."
    },
    {
      src: "/ux.png",
      title: "UI/UX design",
      content: "Crafting exceptional experiences by elevating your digital presence with user-centric UI/UX design that captivates, converts and delights."
    },
    {
      src: "/lowCode.png",
      title: "low code development",
      content: "Accelerate innovation by empowering your team with low-code solutions that turn ideas into powerful applications at lightning speed."
    },
    {
      src: "/Website.png",
      title: "website development",
      content: "Forging your digital identity using expert website development that transforms vision into engaging online experiences."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center gap-16 max-w-480 mx-auto"> <div class="h-full flex flex-col items-center gap-5 w-auto md:w-[60%] lg:w-[40%]"> <div class="flex flex-col justify-between gap-5 items-center text-white w-145.25"> <button class="bg-[#282828B8] cursor-pointer opacity-70 text-white rounded-full w-fit py-3 px-8 mt-4 border-[0.5px] border-[#282828B2] font-bold">
Services
</button> <h2 class="font-semibold text-3xl lg:text-5xl">
How we can help <i class="font-light">you?</i> </h2> <p class="text-center text-lg opacity-70 w-fit">
We'll help you shape your brand, create a strong online presence, and
        connect with your target audience effectively.
</p> </div> </div> <div class="w-auto lg:w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:justify-items-center gap-2 lg:gap-5 mx-5 lg:mx-20"> ${cards.map((data) => {
    return renderTemplate`${renderComponent($$result, "ServicesCard", $$ServicesCard, { ...data })}`;
  })} </div> </section>`;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/components/service-section/services.astro", void 0);

const $$Astro$5 = createAstro();
const $$ProcessCard1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ProcessCard1;
  const { src, title, content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="h-auto rounded-4xl p-5 card bg-[#282828B2] flex flex-col justify-between"> <div class="w-full flex justify-center"> <img${addAttribute(src, "src")} class="object-cover h-full w-full"> </div> <div class="w-full text-white flex flex-col gap-2 px-2 pb-3"> <span class="font-semibold text-lg capitalize">${title}</span> <p class="opacity-70"> ${content} </p> </div> </div>`;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/components/process-section/processCard1.astro", void 0);

const $$Astro$4 = createAstro();
const $$ProcessCard2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ProcessCard2;
  const { src, title, content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative bg-[#282828B2] rounded-4xl md:w-[50%] p-2 lg:p-5 card flex flex-col justify-between"> <div class="flex justify-center items-center w-full h-full"> <img${addAttribute(src, "src")}${addAttribute(title, "alt")}> </div> <div class="w-full text-white flex flex-col gap-2 px-2 pb-3 h-full justify-end"> <span class="font-semibold text-lg capitalize"> ${title} </span> <p class="opacity-70"> ${content} </p> </div> </div>`;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/components/process-section/ProcessCard2.astro", void 0);

const $$Process = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    {
      src: "/requirement.png",
      title: "Requirement Gathering",
      content: "We take the time to understand your goals, target audience, and brand identity to craft solutions that truly resonates. "
    },
    {
      src: "/functional.png",
      title: "Functionality Mapping & Wireframe",
      content: "We strategically plan key features and functionalities to ensure your website is user-friendly and meets your objectives."
    },
    {
      src: "/processUx.png",
      title: "UI & UX Designing",
      content: "We create visually stunning, user-centric interfaces that are intuitive and engaging, delivering a seamless user experience."
    }
  ];
  const bottomCards = [
    {
      src: "/Deployment.png",
      title: "Deployment",
      content: "Effortless deployment with precision. We ensure seamless launches, smooth transitions, minimal downtime, and a flawless launch for your digital product\u2019s success."
    },
    {
      src: "/support.png",
      title: "Support & Maintenance ",
      content: "Keeping you ahead of the curve. We provide continuous ongoing support and maintenance to ensure your digital products stays secure, up-to-date, and performing optimally."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center gap-5 my-20 max-w-480 mx-auto"> <div class="h-full flex flex-col items-center gap-5 mx-20 w-full"> <div class="flex flex-col justify-between gap-5 mb-10 items-center text-white w-[90%] md:w-[77%] lg:w-[55%]"> <button class="bg-[#282828B8] cursor-pointer opacity-70 text-white rounded-full w-fit py-3 px-8 mt-4 border-[0.5px] border-[#282828B2] font-bold">
Process
</button> <h2 class="font-semibold text-5xl text-center">
Our development <i class="font-light">process?</i> </h2> <p class="text-center text-lg opacity-70">
We believe in a transparent and collaborative development process. From
        concept to launch, we'll keep you informed at every stage.
</p> </div> </div> <div class="grid md:grid-cols-3 justify-items-center gap-2 lg:gap-5 mx-5 lg:mx-20 lg:w-[90%]"> ${cards.map((data) => {
    return renderTemplate`${renderComponent($$result, "ProcessCard1", $$ProcessCard1, { ...data })}`;
  })} </div> <div class="lg:w-[90%] mx-5 rounded-4xl min-h-100 flex flex-col md:flex-row justify-center items-center bg-[#282828B2] card"> <div class="w-fit h-fit"> <img src="/Agile.png" class="w-fit h-fit object-center"> </div> <div class="w-fit h-full text-white flex flex-col md:justify-center px-5"> <h2 class="text-white block relative text-3xl lg:text-5xl font-extrabold font-poppins capitalize md:text-center">
Agile Development
</h2> <p class="opacity-70 md:text-center">
Tailored to your needs, our agile development approach involves ongoing
        refinement and integration of your feedback. This ensures that your
        digital products evolve seamlessly with your changing needs, delivering
        a solution that stays relevant and effective throughout its lifecycle.
        Your input drives continuous improvement for optimal results.
</p> </div> </div> <div class="w-auto lg:w-[90%] lg:mx-20 flex flex-col md:flex-row justify-between h-fit text-white gap-2 mx-5 lg:gap-5"> ${bottomCards.map((data) => {
    return renderTemplate`${renderComponent($$result, "ProcessCard2", $$ProcessCard2, { ...data })}`;
  })} <!-- <div class='bg-[#282828B2] rounded-4xl h-[394px] w-[50%] card'>adsf</div> --> </div> </section>`;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/components/process-section/process.astro", void 0);

const $$Astro$3 = createAstro();
const $$WhyusCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$WhyusCard;
  const { src, title, content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="h-auto bg-[#282828B2] rounded-4xl relative flex flex-col gap-5 p-5 card"> <div class="w-[20%] md:w-[30%]"> <img${addAttribute(src, "src")} alt="customerSupport" class="w-full h-full object-cover"> </div> <div class="w-full text-white flex flex-col gap-2 px-2 pb-3 h-full justify-end"> <span class="font-semibold text-lg capitalize"> ${title} </span> <p class="opacity-70"> ${content} </p> </div> </div>`;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/components/whyus-section/WhyusCard.astro", void 0);

const $$Whyus = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    {
      src: "/customerSupport.png",
      title: "Excellent Customer Service",
      content: `We don't just solve problems, we build relationships. Get the exceptional
      service your brand deserves.`
    },
    {
      src: "/medal.png",
      title: "Prove Track Record",
      content: `We are trusted by countless clients, backed by verifiable success stories. We consistently exceed expectations through expertise and dedication.`
    },
    {
      src: "/coins.png",
      title: "Competitive Price",
      content: `Don\u2019t trade quality for cost. We deliver top-notch design & development services at competitive rates without compromise . `
    },
    {
      src: "/peoples.png",
      title: "Team of Experts in their niche",
      content: `Our domain-expert teams collaborate seamlessly to turn your vision into reality with precision and creativity. `
    },
    {
      src: "/chart.png",
      title: "Honest & Valuable Advice ",
      content: `We provide honest advice to help you make a meaningful impact and achieve significant results for your business.`
    },
    {
      src: "/desk.png",
      title: "Personal Account Manager",
      content: `You\u2019ll have a dedicated solutions partner to guide you through every step of the process with expertise. `
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center gap-16 max-w-480 mx-auto"> <div class="flex flex-col justify-between gap-5 items-center text-white w-[60%]"> <button class="bg-[#282828B8] cursor-pointer opacity-70 text-white rounded-full w-fit py-3 px-8 mt-4 border-[0.5px] border-[#282828B2] font-bold">
Why us?
</button> <h2 class="font-semibold text-3xl lg:text-5xl text-center">
Why work with <i class="font-light">us?</i> </h2> <p class="text-center text-lg opacity-70">
We craft digital experiences that deliver results, helping you achieve
      your business goals, from boosting brand awareness to accelerating sales
      growth.
</p> </div> <div class="w-auto lg:w-[90%] mx-5 lg:mx-20 h-fit text-white gap-2 lg:gap-5 grid grid-cols-1 md:grid-cols-3"> ${cards.map((data) => {
    return renderTemplate`${renderComponent($$result, "WhyusCard", $$WhyusCard, { ...data })}`;
  })} </div> </section>`;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/components/whyus-section/Whyus.astro", void 0);

const $$Astro$2 = createAstro();
const $$TechnologyCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TechnologyCard;
  const { src, title, content, reverse } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`w-auto lg:w-[90%] m-5 lg:m-20 flex ${reverse ? "flex-col-reverse sm:flex-row-reverse" : "flex-col-reverse sm:flex-row"} justify-between items-center`, "class")}> <div class="text-white sm:w-[45%] lg:w-[40%] h-full flex flex-col justify-start items-start gap-5"> <h2 class="text-3xl font-bold">Application Monitoring</h2> <p class="opacity-70 leading-7">
In a continuous delivery environment, constant application monitoring is
      essential for addressing issues in real time. Tools such as real-time
      error monitoring and performance monitoring services play a critical role
      in this process. They enable teams to identify and resolve problems
      quickly, ensuring that applications function smoothly and efficiently. By
      using these tools, organizations can enhance workflow efficiency, maintain
      high performance levels, and continuously improve the user experience.
      This proactive approach to monitoring helps prevent disruptions, optimize
      performance, and deliver a seamless, high-quality experience for users,
      ultimately contributing to overall success and satisfaction.
</p> </div> <div class="sm:w-[50%] lg:w-[40%] my-5"> <img${addAttribute(src, "src")} class="object-cover"> </div> </div>`;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/components/technology-section/TechnologyCard.astro", void 0);

const $$Technology = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    {
      src: "/monitoring.png",
      title: "Application Monitoring",
      content: `In a continuous delivery environment, constant application monitoring is essential for addressing issues in real time. Tools such as real-time error monitoring and performance monitoring services play a critical role in this process. They enable teams to identify and resolve problems quickly, ensuring that applications function smoothly and efficiently. By using these tools, organizations can enhance workflow efficiency, maintain high performance levels, and continuously improve the user experience. This proactive approach to monitoring helps prevent disruptions, optimize performance, and deliver a seamless, high-quality experience for users, ultimately contributing to overall success and satisfaction.`
    },
    {
      src: "/font-end.png",
      title: "Application Monitoring",
      content: `In a continuous delivery environment, constant application monitoring is essential for addressing issues in real time. Tools such as real-time error monitoring and performance monitoring services play a critical role in this process. They enable teams to identify and resolve problems quickly, ensuring that applications function smoothly and efficiently. By using these tools, organizations can enhance workflow efficiency, maintain high performance levels, and continuously improve the user experience. This proactive approach to monitoring helps prevent disruptions, optimize performance, and deliver a seamless, high-quality experience for users, ultimately contributing to overall success and satisfaction.`
    },
    {
      src: "/mobile-design.png",
      title: "Application Monitoring",
      content: `In a continuous delivery environment, constant application monitoring is essential for addressing issues in real time. Tools such as real-time error monitoring and performance monitoring services play a critical role in this process. They enable teams to identify and resolve problems quickly, ensuring that applications function smoothly and efficiently. By using these tools, organizations can enhance workflow efficiency, maintain high performance levels, and continuously improve the user experience. This proactive approach to monitoring helps prevent disruptions, optimize performance, and deliver a seamless, high-quality experience for users, ultimately contributing to overall success and satisfaction.`
    },
    {
      src: "/back-end.png",
      title: "Application Monitoring",
      content: `In a continuous delivery environment, constant application monitoring is essential for addressing issues in real time. Tools such as real-time error monitoring and performance monitoring services play a critical role in this process. They enable teams to identify and resolve problems quickly, ensuring that applications function smoothly and efficiently. By using these tools, organizations can enhance workflow efficiency, maintain high performance levels, and continuously improve the user experience. This proactive approach to monitoring helps prevent disruptions, optimize performance, and deliver a seamless, high-quality experience for users, ultimately contributing to overall success and satisfaction.`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center gap-10 max-w-480 mx-auto my-20"> <div class="flex flex-col justify-between gap-5 items-center text-white w-[90%] md:w-[60%] lg:w-[40%]"> <button class="bg-[#282828B8] cursor-pointer opacity-70 text-white rounded-full w-fit py-3 px-8 mt-4 border-[0.5px] border-[#282828B2] font-bold">
Technologies
</button> <h2 class="font-semibold text-3xl lg:text-5xl text-center">
Technologies we <i class="font-light">use?</i> </h2> <p class="text-center text-lg opacity-70">
We leverage cutting-edge technologies to deliver innovative,
      high-performance solutions that drive success and exceed your expectations
</p> </div> ${cards.map((data, index) => {
    return renderTemplate`${renderComponent($$result, "TechnologyCard", $$TechnologyCard, { ...data, "reverse": index & 1 })}`;
  })} </section>`;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/components/technology-section/Technology.astro", void 0);

const $$Astro$1 = createAstro();
const $$ExperienceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ExperienceCard;
  const { src, title, content, list } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="h-auto w-[50%] lg:w-[28%] bg-[#282828B2] rounded-4xl relative flex flex-col gap-5 p-5 card shrink-0"> <div class="w-[40%]"> <img${addAttribute(src, "src")} alt="customerSupport" class="object-cover"> </div> <div class="w-full text-white flex flex-col gap-2 px-2 pb-3 h-full"> <span class="font-semibold text-lg capitalize"> ${title} </span> <p class="opacity-70"> ${content} </p> </div> <ul class="text-white list-disc px-6 space-y-2"> ${list?.map((data) => {
    return renderTemplate`<li>${data}</li>`;
  })} </ul> </div>`;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/components/experience-section/ExperienceCard.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    {
      src: "/medicalKit.png",
      title: "healthcare",
      content: "We develop apps & websites that streamline operations, improve patient care, and empower the healthcare industry.",
      list: [
        "Telemedicine Platform",
        "Patient Health Management System",
        "Virtual Health Coaching"
      ]
    },
    {
      src: "/suitcase.png",
      title: "eCommerce",
      content: "We craft user-friendly eCommerce solutions that drive conversions and build customer loyalty.",
      list: ["Multi-Channel Retail Platforms", "Doctor-On-Demand", "Fitness App"]
    },
    {
      src: "/tennis.png",
      title: "Sports",
      content: "We design and develop fan-centric sports platforms that drive engagement and connect communities.",
      list: [
        "Fitness Tracking Apps",
        "Personal Training & Coaching Solutions",
        "Activity and Performance Tracking solutions"
      ]
    },
    {
      src: "/medicalKit.png",
      title: "healthcare",
      content: "We develop apps & websites that streamline operations, improve patient care, and empower the healthcare industry.",
      list: [
        "Telemedicine Platform",
        "Patient Health Management System",
        "Virtual Health Coaching"
      ]
    },
    {
      src: "/suitcase.png",
      title: "eCommerce",
      content: "We craft user-friendly eCommerce solutions that drive conversions and build customer loyalty.",
      list: ["Multi-Channel Retail Platforms", "Doctor-On-Demand", "Fitness App"]
    },
    {
      src: "/tennis.png",
      title: "Sports",
      content: "We design and develop fan-centric sports platforms that drive engagement and connect communities.",
      list: [
        "Fitness Tracking Apps",
        "Personal Training & Coaching Solutions",
        "Activity and Performance Tracking solutions"
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center gap-16 max-w-480 mt-10 mx-auto"> <div class="h-full flex flex-col items-center gap-5 mx-20 w-full"> <div class="flex flex-col justify-between gap-5 mb-10 items-center text-white w-[95%] md:w-[60%] lg:w-[43%]"> <button class="bg-[#282828B8] cursor-pointer opacity-70 text-white rounded-full w-fit py-3 px-8 mt-4 border-[0.5px] border-[#282828B2] font-bold">
Industries we Serve
</button> <h2 class="font-semibold text-3xl md:text-5xl text-center">
Our Diverse Industry <i class="font-light">Experiences?</i> </h2> <p class="text-center text-lg opacity-70">
We believe in a transparent and collaborative development process. From
        concept to launch, we'll keep you informed at every stage.
</p> </div> </div> <div class="w-[90%] mx-5 lg:mx-20 overflow-auto flex gap-5 no-scrollbar"> ${cards.map((data) => {
    return renderTemplate`${renderComponent($$result, "ExperienceCard", $$ExperienceCard, { ...data })}`;
  })} </div> </section>`;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/components/experience-section/Experience.astro", void 0);

const $$Astro = createAstro();
const $$TestimonialCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TestimonialCard;
  const star = "/Filled.png";
  const stars = Array.from({ length: 5 }, (_, i) => star);
  const { title, name, review } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="testimonial-card overflow-hidden relative min-w-[45%] max-w-[80%] lg:max-w-[45%] h-auto bg-[#282828B2] text-white p-6 flex flex-col justify-between gap-5 rounded-4xl" data-astro-cid-2zxv74sb> <div class="flex items-center gap-5 w-full" data-astro-cid-2zxv74sb> ${stars.map((path) => {
    return renderTemplate`<img${addAttribute(path, "src")} width="24" height="24" data-astro-cid-2zxv74sb>`;
  })} </div> <p class="" data-astro-cid-2zxv74sb>
"${review}"
</p> <div class="text-white flex justify-evenly gap-5" data-astro-cid-2zxv74sb> <img src="/lady.png" width="50" height="50" data-astro-cid-2zxv74sb> <div class="w-full" data-astro-cid-2zxv74sb> <span class="block" data-astro-cid-2zxv74sb>${title}</span> <span class="block" data-astro-cid-2zxv74sb>${name}</span> </div> </div> <span class="w-full absolute h-full bg-white/50 inset-0 -top-full -left-full rounded-4xl" data-astro-cid-2zxv74sb></span> </div> `;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/components/testimonials-section/testimonialCard.astro", void 0);

const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    {
      name: "John Mark",
      title: "CEO of Facebook",
      review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti
    obcaec temporibus autem alias ratione ducimus, minus, consectetur
    adipisicing elit.`
    },
    {
      name: "John Mark",
      title: "CEO of Facebook",
      review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti
    obcaec height='28'ati, temporibus autem alias ratione ducimus, minus, consectetur
    adipisicing elit.  reprehenderit distinctio ipsum. Laboriosam ad ea ut doloremque
    corrupti sapiente magnam veniam! Lorem ipsum dolor sit amet, consectetur
    adipisicing elit.`
    },
    {
      name: "John Mark",
      title: "CEO of Facebook",
      review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti
    obcaec height='28'ati, temporibus autem alias ratione ducimus, minus, consectetur
    adipisicing elit.`
    },
    {
      name: "John Mark",
      title: "CEO of Facebook",
      review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti
    obcaec height='28'ati, temporibus autem alias ratione ducimus, minus, consectetur
    adipisicing elit.`
    },
    {
      name: "John Mark",
      title: "CEO of Facebook",
      review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti
    obcaec height='28'ati, temporibus autem alias ratione ducimus, minus, consectetur
    adipisicing elit.`
    },
    {
      name: "John Mark",
      title: "CEO of Facebook",
      review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti
    obcaec height='28'ati, temporibus autem alias ratione ducimus, minus, consectetur
    adipisicing elit.`
    },
    {
      name: "John Mark",
      title: "CEO of Facebook",
      review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti
    obcaec height='28'ati, temporibus autem alias ratione ducimus, minus, consectetur
    adipisicing elit.`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center gap-16 max-w-480 mx-auto my-20" data-astro-cid-rt2hwbdu> <div class="flex flex-col justify-between gap-5 items-center text-white w-[90%] md:w-[70%] lg:w-[40%]" data-astro-cid-rt2hwbdu> <button class="bg-[#282828B8] cursor-pointer opacity-70 text-white rounded-full w-fit py-3 px-8 mt-4 border-[0.5px] border-[#282828B2] font-bold" data-astro-cid-rt2hwbdu>
Testimonials
</button> <h2 class="font-semibold text-3xl md:text-5xl text-center" data-astro-cid-rt2hwbdu>
There are reason people are <i class="font-light" data-astro-cid-rt2hwbdu>raving</i> about us.
</h2> <p class="text-center text-lg opacity-70" data-astro-cid-rt2hwbdu>
Don't just take our word for it. Explore what our satisfied clients have
      to say about their experience working with our agency.
</p> </div> <div class="relative w-[90%] mx-20" data-astro-cid-rt2hwbdu> <div class="flex overflow-auto no-scrollbar gap-5 endless-scroll" data-astro-cid-rt2hwbdu> ${cards.map((data) => {
    return renderTemplate`${renderComponent($$result, "TestimonialCard", $$TestimonialCard, { ...data, "data-astro-cid-rt2hwbdu": true })}`;
  })} </div> <span class="left-blur" data-astro-cid-rt2hwbdu></span> <span class="right-blur" data-astro-cid-rt2hwbdu></span> </div> </section>  ${renderScript($$result, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/components/testimonials-section/Testimonial.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/components/testimonials-section/Testimonial.astro", void 0);

const $$Work = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center gap-16 max-w-480 mt-10 mx-auto"> <div class="h-full flex flex-col items-center gap-5 mx-20 w-full"> <div class="flex flex-col justify-between gap-5 mb-10 items-center text-white w-[90%] md:w-[60%] lg:w-[37%]"> <button class="bg-[#282828B8] cursor-pointer opacity-70 text-white rounded-full w-fit py-3 px-8 mt-4 border-[0.5px] border-[#282828B2] font-bold">
Work
</button> <h2 class="font-semibold text-3xl md:text-5xl text-center">
See our Recent <i class="font-light">Projects?</i> </h2> <p class="text-center text-lg opacity-70">
Explore our showcase of our recent projects to see tha solutions we’ve
        recently brought to life.
</p> </div> </div> <div class="max-w-480 mx-2 lg:mx-20"> <div class="gap-5 grid grid-cols-1 md:grid-cols-2"> <div class="relative md:row-start-1 md:col-start-1 md:row-end-5 md:col-end-2"> <img src="/work-mobile.png" class="h-full"> <div class="w-fit text-white flex flex-col gap-2 px-2 pb-3 absolute bottom-5 left-5 bg-transparent backdrop-blur-sm right-0"> <span class="font-semibold text-lg capitalize"> SWAP app </span> <p class="opacity-70">
SWAP app is a sleek and intuitive mobile application designed to
            make buying, selling,
</p> </div> </div> <div class="relative md:row-start-1 md:col-start-2 md:row-end-4 md:col-end-3"> <img src="/work-mobile2.png"> <div class="w-fit text-white flex flex-col gap-2 px-2 pb-3 absolute bottom-5 left-5 bg-transparent backdrop-blur-sm right-0"> <span class="font-semibold text-lg capitalize"> SWAP app </span> <p class="opacity-70">
SWAP app is a sleek and intuitive mobile application designed to
            make buying, selling,
</p> </div> </div> <div class="relative md:row-start-5 md:col-start-1 md:row-end-9 md:col-end-2"> <img src="/work-mobile2.png" class="h-full"> <div class="w-fit text-white flex flex-col gap-2 px-2 pb-3 absolute bottom-5 left-5 bg-transparent backdrop-blur-sm right-0"> <span class="font-semibold text-lg capitalize"> SWAP app </span> <p class="opacity-70">
SWAP app is a sleek and intuitive mobile application designed to
            make buying, selling,
</p> </div> </div> <div class="relative md:row-start-4 md:col-start-2 md:row-end-8 md:col-end-3"> <img src="/work-mobile.png"> <div class="w-fit text-white flex flex-col gap-2 px-2 pb-3 absolute bottom-5 left-5 bg-transparent backdrop-blur-sm right-0"> <span class="font-semibold text-lg capitalize"> SWAP app </span> <p class="opacity-70">
SWAP app is a sleek and intuitive mobile application designed to
            make buying, selling,
</p> </div> </div> <div class="relative md:row-start-9 md:col-start-1 md:row-end-11 md:col-end-2"> <img src="/work-mobile2.png"> <div class="w-fit text-white flex flex-col gap-2 px-2 pb-3 absolute bottom-5 left-5 bg-transparent backdrop-blur-sm right-0"> <span class="font-semibold text-lg capitalize"> SWAP app </span> <p class="opacity-70">
SWAP app is a sleek and intuitive mobile application designed to
            make buying, selling,
</p> </div> </div> <div class="relative md:row-start-8 md:col-start-2 md:row-end-11 md:col-end-3"> <img src="/work-mobile.png"> <div class="w-fit text-white flex flex-col gap-2 px-2 pb-3 absolute bottom-5 left-5 bg-transparent backdrop-blur-sm right-0"> <span class="font-semibold text-lg capitalize"> SWAP app </span> <p class="opacity-70">
SWAP app is a sleek and intuitive mobile application designed to
            make buying, selling,
</p> </div> </div> </div> </div> </section> `;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/components/work/Work.astro", void 0);

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center gap-16 max-w-480 mt-10 mx-auto"> <div class="flex flex-col justify-between gap-5 mb-10 items-center text-white w-[90%] md:w-[70%] lg:w-[43%]"> <button class="bg-[#282828B8] cursor-pointer opacity-70 text-white rounded-full w-fit py-3 px-8 mt-4 border-[0.5px] border-[#282828B2] font-bold">
Blog
</button> <h2 class="font-semibold text-3xl lg:text-5xl text-center">
See our recent <i class="font-light">Blog</i> Posts.
</h2> <p class="text-center text-lg opacity-70">
Explore our blog to discover the latest industry trends and and gain
      valuable insights from our team of experts.
</p> </div> <div class="w-auto mx-5 lg:w-[90%] max-h-182.5 overflow-auto no-scrollbar"> <div class="w-full flex gap-4 overflow-auto no-scrollbar"> <div class="flex w-[30%] bg-[#282828B2] shrink-0"> <img src="/blogImg1.png" class="object-fill rounded-4xl shrink-0 w-full"> </div> <div class="flex flex-col gap-5 justify-between"> <div class="min-w-150 flex justify-between items-end bg-[#282828B2] p-4 rounded-4xl"> <div class="min-w-150 flex justify-between items-end bg-[#FCCE62] rounded-4xl"> <img src="blogImg2.png" width="300"> <div class="p-5"> <span class="text-xl font-bold">Found's Digital Journey</span> <p>Join us on a journey of innovation and transformation ...</p> </div> </div> </div> <div class="min-w-150 flex justify-between items-end bg-[#282828B2] p-4 rounded-4xl"> <div class="min-w-150 flex justify-between items-start text-white bg-[#111717] rounded-4xl"> <img src="blogImg3.png" width="300"> <div class="p-5"> <span class="text-xl font-bold">Found's Digital Journey</span> <p>Join us on a journey of innovation and transformation ...</p> </div> </div> </div> </div> <div class="flex bg-[#282828B2] rounded-4xl p-4 shrink-0 max-w-[50%]"> <img src="/blogImg4.png" class="object-fill rounded-4xl"> </div> </div> </div> </section>`;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/components/blogs/Blog.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="max-w-480 min-h-130.5 my-20 mx-auto"> <div class="w-full lg:w-[90%] lg:mx-20 h-fit md:p-0 pb-10 flex flex-col md:flex-row justify-between items-center rounded-4xl bg-[#282828B2]"> <div class="text-white w-full md:w-[40%] flex flex-col justify-between gap-4 md:gap-10 p-10 m-5"> <h2 class="text-4xl md:text-5xl lg:text-7xl font-bold">
Let’s Work Together.
</h2> <p class="text-lg opacity-55">
Contact us today to collaborate and bring your vision to life with
        expert guidance and innovative solutions.
</p> <div class="px-5 md:px-8 text-xl font-bold py-5 rounded-full bg-[#F79A12] w-fit md:mt-10 cursor-pointer"> <button class="w-full h-full flex justify-between items-center gap-2">
Request a Quote ${renderComponent($$result, "ArrowUpRight", ArrowUpRight, {})}</button> </div> </div> <div class="relative"> <span class="block absolute -top-10 md:-top-20 left-30 bg-red-200 w-16 h-16 md:w-20 md:h-20 rounded-full" style="background: linear-gradient(rgb(255, 156, 0) 0%, rgb(245, 99, 0) 100%)"></span> <span class="w-10 h-10 rounded-full shadow-2xl absolute bottom-0 left-30" style="background: linear-gradient(206.92deg, rgb(255, 255, 255) 59.29%, rgb(153, 153, 153) 85.78%);"></span> <span class="w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl absolute -bottom-5 right-30" style="background: linear-gradient(206.92deg, rgb(255, 255, 255) 59.29%, rgb(153, 153, 153) 85.78%);"></span> <img src="/work-together.webp" alt="work-together-image" width="650" class="md:my-0"> </div> </div> </section>`;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/components/contact-section/contact.astro", void 0);

const $$FooterServices = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="text-white"> <span class="font-bold block py-2 text-center md:text-left">Our Services
</span> <ul class="flex flex-col items-center md:items-start gap-4"> <li><a href="#">eCommerce Development</a></li> <li><a href="#">Web App Development</a></li> <li><a href="#">Mobile App Development</a></li> <li><a href="#">UI/UX Design</a></li> <li><a href="#">Low Code Development</a></li> <li><a href="#">Admin Development</a></li> <li><a href="#">CMS Development</a></li> <li><a href="#">Headless CMS Development</a></li> <li><a href="#">Website Development</a></li> </ul> </div>`;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/components/footer-section/footer-services.astro", void 0);

const $$FooterCompany = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="text-white"> <span class="font-bold block pb-2 text-center md:text-left">Company</span> <ul class="flex flex-col gap-3 capitalize items-center md:items-start"> <li><a href="#">Home</a></li> <li><a href="#">capabilities</a></li> <li><a href="#">our work</a></li> <li><a href="#">why sookshum labs</a></li> <li><a href="#">careers</a></li> <li><a href="#">blog</a></li> </ul> </div>`;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/components/footer-section/footer-company.astro", void 0);

const $$FooterAddress = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="text-white w-[50%] lg:max-w-[17%] flex flex-col gap-5"> <span class="font-bold block pb-2 text-center md:text-left">Office</span> <p class="text-center md:text-left">
A-708, Tower-A, 7th Floor, Bestech Business Towers, Sector 66, Mohali,
    Punjab, India - 160066
</p> <div class=""> <span class="font-bold block pb-2 text-center md:text-left">Contact</span> <p class="text-center md:text-left">info@sookshum-labs.com</p> </div> </div>`;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/components/footer-section/footer-address.astro", void 0);

const $$SocialLinks = createComponent(($$result, $$props, $$slots) => {
  const url = [
    "/upwork.png",
    "/be.png",
    "/yt.png",
    "/linked.png",
    "/facebook.png",
    "/insta.png",
    "/x.png"
  ];
  return renderTemplate`${maybeRenderHead()}<div class="h-fit w-[90%] text-white flex justify-between md:flex-row flex-col-reverse mx-20 my-5 items-center"> <span class="md:my-0 my-5 text-center">© 2024 Sookshum Labs Technologies Private Limited. All Rights Reserved</span> <div class="flex justify-center items-center gap-3"> ${url.map((src) => {
    return renderTemplate`<span class=" w-10 h-10 block"> <img${addAttribute(src, "src")}${addAttribute(src.replace("/", ""), "alt")}${addAttribute(`aspect-square h-full w-full object-fill cursor-pointer`, "class")}> </span>`;
  })} </div> </div>`;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/components/footer-section/social-links.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="max-w-480 pt-5 bg-[#282828B8] flex flex-col mx-auto"> <div class="md:w-[90%] mx-5 lg:m-20 flex flex-col items-center md:items-start w-full md:flex-row justify-between flex-wrap gap-10 lg:gap-20"> <div class="text-white w-[50%] md:w-[25%] flex flex-col md:items-start items-center gap-10 py-10 md:p-0"> <span class="inline-block"> <img src="sookshum-logo.svg" alt="sookshum-logo" width="155" height="45" class="object-contain"> </span> <p class="text-center">
We deliver excellence through our innovative solutions and exceptionally
        reliable service.
</p> <div class="w-full flex md:flex-row flex-col gap-3 items-center shrink-0"> <div class="px-5 font-bold py-3 rounded-full bg-[#F79A12] w-fit cursor-pointer"> <button class="w-full h-full flex justify-between items-center gap-2">
Request a Quote ${renderComponent($$result, "ArrowUpRight", ArrowUpRight, {})}</button> </div> <button class="bg-[#282828B2] rounded-full py-3 px-5 cursor-pointer">Refer Us</button> </div> </div> ${renderComponent($$result, "OurServices", $$FooterServices, {})} ${renderComponent($$result, "Company", $$FooterCompany, {})} ${renderComponent($$result, "Address", $$FooterAddress, {})} </div> <div class="flex justify-center items-center"> ${renderComponent($$result, "SocialLinks", $$SocialLinks, {})} </div> </section>`;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/components/footer-section/footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Process", $$Process, {})} ${renderComponent($$result2, "Whyus", $$Whyus, {})} ${renderComponent($$result2, "Technology", $$Technology, {})} ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "Testimonial", $$Testimonial, {})} ${renderComponent($$result2, "Work", $$Work, {})} ${renderComponent($$result2, "Blog", $$Blog, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/pages/index.astro", void 0);

const $$file = "/home/sookshum/Jasminder-Projects/Training Projects/astro-app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
