import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <header className="flex flex-col md:flex-row md:items-center  items-start justify-start md:justify-between gap-y-10 md:gap-16 md:p-20 p-6 bg-[var(--background)]">
      <div className="flex-1 max-w-lg">
        <h1 className="md:text-5xl text-4xl  font-extrabold mb-6 text-[var(--foreground)] md:leading-tight leading-tight  ">
          It's Not <br /> Just Food, it's an{" "}
          <span className="text-[var(--logoColor)]">Experience.</span>
        </h1>
        <p className="text-[var(--muted-foreground)] text-lg mb-10">
          Order from top-rated restaurants and get fresh food delivered to your
          doorstep in minutes. Craving something specific?
        </p>
        <button className="px-8 py-4 text-lg font-semibold rounded-[var(--radius-xl)] bg-[var(--logoColor)] text-[var(--primary-foreground)]">
          <Link to="/menu">Order Now</Link>
        </button>
      </div>

      <div className="relative flex-1 h-[500px] rounded-[var(--radius-xl)] overflow-hidden">
        <img
          src="https://storage.googleapis.com/banani-generated-images/generated-images/8c497a41-6d67-4702-9977-1842a1e1de9f.jpg"
          alt="Delicious pizza spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute  animate-float bottom-10 left-[-5px] flex items-center gap-3 p-4 bg-[var(--card)] rounded-[var(--radius-lg)] shadow-lg border border-[var(--border)]">
          <div className="w-10 h-10 rounded-full bg-[var(--success)] flex items-center justify-center text-[var(--success-foreground)]">
            <Icon icon="lucide:clock" width={20} />
          </div>
          <div>
            <div className="font-bold text-sm">Fast Delivery</div>
            <div className="text-xs text-[var(--muted-foreground)]">
              25-30 min
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
