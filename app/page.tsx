const services = [
  {
    title: "日常清爽洗护",
    description: "适合每月护理，温和清洁皮脂和浮毛，吹干后蓬松不塌。",
    tag: "犬猫通用",
    price: "¥98起",
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=82",
    alt: "金毛犬在洗护店清洁"
  },
  {
    title: "精修造型套餐",
    description: "脸型、身体线条和尾巴造型同步调整，适合贵宾、比熊、雪纳瑞。",
    tag: "含基础洗护",
    price: "¥188起",
    image:
      "https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=900&q=82",
    alt: "小型犬美容修剪"
  },
  {
    title: "猫咪舒缓护理",
    description: "独立安静房间，低噪吹风与控时操作，减少应激和等待。",
    tag: "短毛猫适用",
    price: "¥158起",
    image:
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=900&q=82",
    alt: "猫咪护理"
  }
];

const stats = [
  ["45分钟", "基础洗护最快完成"],
  ["1v1", "专属美容师全程照看"],
  ["独立区", "猫咪安静护理空间"],
  ["9:00-21:00", "周末与节假日营业"]
];

const steps = [
  ["01", "皮毛检查", "记录打结、皮屑、泪痕和敏感部位，确认适合的洗护方案。"],
  ["02", "可视洗护", "透明护理间全程可见，洗、护、吹、修按宠物状态调整节奏。"],
  ["03", "护理反馈", "完成后同步照片、护理建议和下次护理时间，方便持续维护。"]
];

const storeScenes = [
  {
    title: "接待与零售区",
    description: "进门即可看到香波陈列、等候沙发和透明洗护间，整体保持温暖、干净、可视。",
    image: "/assets/store/interior-reception.png",
    alt: "中国高端宠物洗护店接待与零售区"
  },
  {
    title: "透明洗护区",
    description: "玻璃隔断、专业不锈钢浴缸和低噪设备，让洗护过程明亮、卫生、安心。",
    image: "/assets/store/interior-wash.png",
    alt: "中国高端宠物洗护店透明洗护区"
  },
  {
    title: "美容修剪区",
    description: "独立修剪台、工具墙和烘干设备分区清晰，适合精修造型与皮毛护理。",
    image: "/assets/store/interior-grooming.png",
    alt: "中国高端宠物洗护店美容修剪区"
  }
];

const benefits = [
  ["充值赠送", "满 1000 赠 180"],
  ["免费接送", "3 公里内可预约"],
  ["生日护理", "当月赠香氛护理"],
  ["用品折扣", "零食玩具 9 折"]
];

const reviews = [
  [
    "家里柯基毛特别厚，之前总吹不透。这里洗完能摸到皮肤是干爽的，回家也没有香味刺鼻的问题。",
    "豆",
    "豆包家长"
  ],
  [
    "猫咪胆子小，美容师会先让它适应房间。整个过程比我想象中安静很多，照片也同步得很快。",
    "栗",
    "栗子家长"
  ],
  [
    "比熊修脸很考验审美，这次剪得圆但不夸张，眼周也清爽。已经办了次卡，周末预约很方便。",
    "米",
    "米糕家长"
  ]
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-ink/10 bg-paper/90 backdrop-blur-2xl">
        <nav
          className="container-page flex min-h-[68px] items-center justify-between gap-5"
          aria-label="主导航"
        >
          <a className="flex items-center gap-2.5 whitespace-nowrap font-extrabold" href="#">
            <span
              className="grid size-[38px] place-items-center rounded-lg border-2 border-ink bg-yellow text-xl"
              aria-hidden="true"
            >
              爪
            </span>
            <span>绒光宠物洗护店</span>
          </a>
          <div className="flex items-center gap-6 text-sm text-muted max-[900px]:hidden">
            <a className="hover:text-green" href="#services">
              服务
            </a>
            <a className="hover:text-green" href="#process">
              流程
            </a>
            <a className="hover:text-green" href="#store">
              环境
            </a>
            <a className="hover:text-green" href="#member">
              会员
            </a>
            <a className="hover:text-green" href="#reviews">
              评价
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <a className="btn btn-ghost max-[560px]:hidden" href="tel:4008806620">
              400-880-6620
            </a>
            <a className="btn btn-primary" href="#booking">
              预约
            </a>
          </div>
        </nav>
      </header>

      <main className="overflow-hidden">
        <section
          className="grid min-h-[calc(100svh-68px)] items-end bg-[linear-gradient(90deg,rgba(13,28,24,.82)_0%,rgba(13,28,24,.56)_44%,rgba(13,28,24,.15)_100%),url('https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=1800&q=86')] bg-cover bg-[center_40%] max-[560px]:min-h-[760px] max-[560px]:bg-[62%_center]"
          aria-label="绒光宠物洗护店介绍"
        >
          <div>
            <div className="container-page py-[88px] pb-[52px] text-white max-[560px]:pb-[34px]">
              <div className="max-w-[650px]">
                <span className="eyebrow">犬猫洗护 · 美容修剪 · 皮毛护理</span>
                <h1 className="mb-[18px] mt-0 text-[clamp(42px,8vw,84px)] font-extrabold leading-[.98] tracking-normal">
                  把每一只小朋友洗得松软发光
                </h1>
                <p className="mb-7 max-w-[560px] text-lg text-white/85 max-[560px]:text-base">
                  透明可视洗护间、低敏香波、分犬猫独立护理区。我们用安静、耐心和专业手法，让洗澡不再是一场硬仗。
                </p>
                <div className="flex flex-wrap gap-3">
                  <a className="btn btn-primary" href="#booking">
                    立即预约
                  </a>
                  <a className="btn btn-ghost" href="#services">
                    查看套餐
                  </a>
                </div>
                <label className="mt-5 grid max-w-[520px] gap-2 rounded-lg border border-white/35 bg-white/15 p-3 text-sm font-bold text-white shadow-[0_18px_36px_rgba(13,28,24,.18)] backdrop-blur-md">
                  期待到店时间
                  <input
                    className="min-h-[46px] w-full rounded-lg border border-white/45 bg-white px-3 py-2.5 font-sans text-ink outline-none focus:border-yellow focus:shadow-[0_0_0_4px_rgba(239,212,107,.28)]"
                    type="datetime-local"
                    name="arrivalTime"
                    form="booking-form"
                    aria-label="期待到店时间"
                  />
                  <span className="text-xs font-medium text-white/78">
                    可先选时间，再继续填写宠物信息。
                  </span>
                </label>
              </div>
            </div>
            <div
              className="container-page grid translate-y-[42px] grid-cols-4 overflow-hidden rounded-lg border border-line bg-white text-ink shadow-soft max-[900px]:translate-y-6 max-[900px]:grid-cols-1"
              aria-label="门店亮点"
            >
              {stats.map(([value, label]) => (
                <div
                  className="min-h-[104px] border-r border-line p-5 last:border-r-0 max-[900px]:border-b max-[900px]:border-r-0 max-[900px]:last:border-b-0"
                  key={value}
                >
                  <strong className="block text-[28px] leading-[1.1]">{value}</strong>
                  <span className="text-sm text-muted">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad" id="services">
          <div className="container-page">
            <div className="section-head">
              <h2 className="section-title">按毛量、性格和皮肤状态定制洗护</h2>
              <p className="section-copy">
                从日常清洁到造型修剪，每项服务都包含耳道清洁、足底毛修理、指甲打磨和护理反馈。
              </p>
            </div>
            <div className="grid grid-cols-3 gap-[18px] max-[900px]:grid-cols-1">
              {services.map((service) => (
                <article
                  className="flex min-h-[330px] flex-col justify-between overflow-hidden rounded-lg border border-line bg-white"
                  key={service.title}
                >
                  <img
                    className="h-[170px] w-full object-cover"
                    src={service.image}
                    alt={service.alt}
                  />
                  <div className="p-5">
                    <h3 className="mb-2 mt-0 text-[22px] font-bold">{service.title}</h3>
                    <p className="text-muted">{service.description}</p>
                    <div className="flex items-center justify-between gap-3 border-t border-line pt-3.5 font-extrabold">
                      <small>{service.tag}</small>
                      <span className="text-[22px] text-green">{service.price}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-mint" id="store">
          <div className="container-page">
            <div className="section-head">
              <h2 className="section-title">真实门店感的高端洗护环境</h2>
              <p className="section-copy">
                三个区域分别对应接待、洗护和美容修剪，整体以中国高端宠物洗护店的明净、温润和专业感呈现。
              </p>
            </div>
            <div className="overflow-hidden rounded-lg border border-line bg-white shadow-soft">
              <div className="store-carousel-track flex w-[300%]">
                {storeScenes.map((scene) => (
                  <figure className="relative m-0 w-1/3 shrink-0" key={scene.title}>
                    <img
                      className="aspect-[16/9] h-auto w-full object-cover"
                      src={scene.image}
                      alt={scene.alt}
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(13,28,24,.78),rgba(13,28,24,0))] px-7 pb-6 pt-24 text-white max-[560px]:px-4 max-[560px]:pb-4 max-[560px]:pt-16">
                      <strong className="block text-[clamp(22px,3vw,34px)] leading-tight">
                        {scene.title}
                      </strong>
                      <span className="mt-2 block max-w-[560px] text-sm text-white/84">
                        {scene.description}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <div className="mt-4 flex justify-center gap-2" aria-hidden="true">
              {storeScenes.map((scene) => (
                <span className="size-2 rounded-full bg-green/45" key={scene.title} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-sky" id="process">
          <div className="container-page grid grid-cols-[.9fr_1.1fr] items-center gap-12 max-[900px]:grid-cols-1">
            <img
              className="aspect-[4/5] rounded-lg object-cover shadow-soft"
              src="https://images.unsplash.com/photo-1525253013412-55c1a69a5738?auto=format&fit=crop&w=900&q=82"
              alt="美容师抱着洗护后的狗狗"
            />
            <div>
              <div className="section-head">
                <h2 className="section-title">从进店到回家，都让你心里有数</h2>
              </div>
              <div className="grid gap-3.5">
                {steps.map(([number, title, description]) => (
                  <div
                    className="grid grid-cols-[54px_1fr] items-start gap-4 rounded-lg border border-green/20 bg-white/70 p-[18px]"
                    key={number}
                  >
                    <div className="grid size-[54px] place-items-center rounded-lg bg-green text-lg font-extrabold text-white">
                      {number}
                    </div>
                    <div>
                      <h3 className="mb-1 mt-0 text-[19px] font-bold">{title}</h3>
                      <p className="mb-0 text-muted">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad" id="member">
          <div className="container-page grid grid-cols-[1.05fr_.95fr] gap-[18px] max-[900px]:grid-cols-1">
            <div className="rounded-lg border border-line bg-green p-[34px] text-white max-[560px]:p-6">
              <span className="eyebrow">会员卡 · 次卡 · 新客礼</span>
              <h2 className="mb-3 mt-0 text-[clamp(30px,4vw,48px)] font-bold leading-[1.1]">
                常来洗澡的小朋友，应该更省心一点
              </h2>
              <p className="text-white/80">
                开卡即建档，记录过敏源、常用香波、修剪偏好和情绪习惯。固定美容师可优先预约。
              </p>
              <div className="my-6 grid grid-cols-2 gap-3 max-[560px]:grid-cols-1">
                {benefits.map(([title, text]) => (
                  <div
                    className="min-h-[90px] rounded-lg border border-white/20 bg-white/10 p-4"
                    key={title}
                  >
                    <strong className="mb-1 block">{title}</strong>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
              <a className="btn btn-primary" href="#booking">
                咨询会员
              </a>
            </div>
            <div className="grid grid-cols-2 gap-[18px] max-[900px]:grid-cols-1">
              <img
                className="h-full min-h-[260px] w-full rounded-lg object-cover"
                src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=720&q=82"
                alt="洗护后开心的小狗"
              />
              <img
                className="h-full min-h-[260px] w-full rounded-lg object-cover"
                src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=720&q=82"
                alt="安静的猫咪"
              />
            </div>
          </div>
        </section>

        <section className="section-pad" id="reviews">
          <div className="container-page">
            <div className="section-head">
              <h2 className="section-title">附近铲屎官的真实反馈</h2>
              <p className="section-copy">
                我们更在意长期信任：洗得干净、吹得透、沟通及时，也照顾每只宠物的小脾气。
              </p>
            </div>
            <div className="grid grid-cols-3 gap-[18px] max-[900px]:grid-cols-1">
              {reviews.map(([text, avatar, name]) => (
                <article className="rounded-lg border border-line bg-white p-[22px]" key={name}>
                  <div className="mb-3 font-black text-coral">★★★★★</div>
                  <p className="text-muted">{text}</p>
                  <div className="mt-[18px] flex items-center gap-3 font-extrabold">
                    <span className="grid size-[42px] place-items-center rounded-lg bg-mint">
                      {avatar}
                    </span>
                    <span>{name}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="bg-[linear-gradient(180deg,#fbfaf4_0_24%,#b7dfcf_24%_100%)] pb-24 pt-0 max-[900px]:bg-mint"
          id="booking"
        >
          <div className="container-page grid grid-cols-[.85fr_1.15fr] items-stretch gap-7 overflow-hidden rounded-lg border border-line bg-white shadow-soft max-[900px]:grid-cols-1">
            <div className="flex min-h-[460px] flex-col justify-end bg-[linear-gradient(0deg,rgba(23,33,31,.72),rgba(23,33,31,.18)),url('https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&w=1000&q=84')] bg-cover bg-center p-[34px] text-white max-[560px]:p-6">
              <span className="eyebrow">预约到店</span>
              <h2 className="mb-3 mt-0 text-[clamp(30px,4vw,46px)] font-bold leading-[1.08]">
                告诉我们宠物的情况，先帮你留好护理时间
              </h2>
              <p className="text-white/85">
                提交后门店会在 20 分钟内联系确认体型、毛量、是否打结和到店时间。
              </p>
            </div>
            <form
              className="grid grid-cols-2 content-center gap-4 p-[34px] max-[560px]:grid-cols-1 max-[560px]:p-6"
              id="booking-form"
            >
              <label className="grid gap-[7px] text-sm font-bold text-muted">
                姓名
                <input
                  className="min-h-[46px] w-full rounded-lg border border-line bg-[#fffefa] px-3 py-2.5 font-sans text-ink outline-none focus:border-green focus:shadow-[0_0_0_4px_rgba(47,114,93,.12)]"
                  type="text"
                  name="name"
                  placeholder="你的称呼"
                />
              </label>
              <label className="grid gap-[7px] text-sm font-bold text-muted">
                手机
                <input
                  className="min-h-[46px] w-full rounded-lg border border-line bg-[#fffefa] px-3 py-2.5 font-sans text-ink outline-none focus:border-green focus:shadow-[0_0_0_4px_rgba(47,114,93,.12)]"
                  type="tel"
                  name="phone"
                  placeholder="用于确认预约"
                />
              </label>
              <label className="grid gap-[7px] text-sm font-bold text-muted">
                宠物类型
                <select
                  className="min-h-[46px] w-full rounded-lg border border-line bg-[#fffefa] px-3 py-2.5 font-sans text-ink outline-none focus:border-green focus:shadow-[0_0_0_4px_rgba(47,114,93,.12)]"
                  name="pet"
                  defaultValue="小型犬"
                >
                  <option>小型犬</option>
                  <option>中大型犬</option>
                  <option>短毛猫</option>
                  <option>长毛猫</option>
                </select>
              </label>
              <label className="grid gap-[7px] text-sm font-bold text-muted">
                预约服务
                <select
                  className="min-h-[46px] w-full rounded-lg border border-line bg-[#fffefa] px-3 py-2.5 font-sans text-ink outline-none focus:border-green focus:shadow-[0_0_0_4px_rgba(47,114,93,.12)]"
                  name="service"
                  defaultValue="日常清爽洗护"
                >
                  <option>日常清爽洗护</option>
                  <option>精修造型套餐</option>
                  <option>猫咪舒缓护理</option>
                  <option>皮毛深层护理</option>
                </select>
              </label>
              <label className="col-span-full grid gap-[7px] text-sm font-bold text-muted">
                备注
                <textarea
                  className="min-h-[104px] w-full resize-y rounded-lg border border-line bg-[#fffefa] px-3 py-2.5 font-sans text-ink outline-none focus:border-green focus:shadow-[0_0_0_4px_rgba(47,114,93,.12)]"
                  name="note"
                  placeholder="例如：容易紧张、毛发打结、皮肤敏感、希望周日下午到店"
                />
              </label>
              <p className="col-span-full m-0 text-[13px] text-muted">
                本表单为页面演示，不会真的提交数据。正式使用时可接入微信、电话或后台系统。
              </p>
              <button className="btn btn-primary col-span-full" type="button">
                提交预约信息
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-ink py-[34px] text-white">
        <div className="container-page flex items-center justify-between gap-[18px] text-sm text-white/75 max-[560px]:grid">
          <div>
            <strong className="text-white">绒光宠物洗护店</strong> · 上海市梧桐路 88 号 1F
          </div>
          <div>营业时间 09:00-21:00 · 400-880-6620</div>
        </div>
      </footer>
    </>
  );
}
