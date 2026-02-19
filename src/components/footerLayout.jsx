export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--secondary)] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-[var(--logoColor)] mb-6">
            craveBite
          </h3>
          <p className="text-[var(--muted-foreground)] leading-relaxed max-w-xs">
            The best food delivery experience, bringing you closer to your
            favorite restaurants.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-[var(--foreground)]">Company</h4>
          <div className="flex flex-col gap-3 text-[var(--muted-foreground)]">
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Team</a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-[var(--foreground)]">Contact</h4>
          <div className="flex flex-col gap-3 text-[var(--muted-foreground)]">
            <a href="#">Help & Support</a>
            <a href="#">Partner with us</a>
            <a href="#">Ride with us</a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-[var(--foreground)]">Legal</h4>
          <div className="flex flex-col gap-3 text-[var(--muted-foreground)]">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
