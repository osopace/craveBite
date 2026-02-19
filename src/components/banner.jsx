export default function PromoBanner() {
  return (
    <section className="relative bg-[var(--logoColor)] text-[var(--primary-foreground)] rounded-[var(--radius-xl)] overflow-hidden mx-4 my-6 md:mx-20 md:my-16">
      <div className="flex flex-col md:flex-row items-center md:justify-between justify-start gap-10 px-6 py-12 md:px-16 md:py-20">
        {/* Content */}
        <div className="relative z-10 max-w-xl">
          <div className="uppercase bg-white/20 px-3 py-1 rounded-md text-xs font-semibold mb-4 inline-block">
            Free Delivery
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            Get 50% off your first order
          </h2>

          <p className="opacity-90 mb-6 text-base md:text-lg leading-relaxed">
            Taste the best local food without leaving your couch. Use code{" "}
            <span className="font-semibold">WELCOME50</span> at checkout.
          </p>

          <button className="px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold rounded-[var(--radius-xl)] bg-[var(--background)] text-[var(--foreground)] hover:opacity-90 transition">
            Claim Offer
          </button>
        </div>

        {/* Image */}
        <div className="relative z-0 w-full max-w-md md:max-w-lg">
          <img
            src="https://storage.googleapis.com/banani-generated-images/generated-images/e37c4161-1816-4212-b88b-5439cee2f54f.jpg"
            alt="Food spread"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Optional subtle decorative blur */}
      <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}
