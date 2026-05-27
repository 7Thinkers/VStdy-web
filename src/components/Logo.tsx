export default function Logo({ white = false }: { white?: boolean }) {
  return (
    <a href="#top" aria-label="VStdy home" className="inline-flex items-center">
      <span className="font-serif text-[43px] leading-none">
        <span
          className={
            white
              ? "text-white"
              : "bg-gradient-to-r from-[#1aacfb] to-[#eb14fb] bg-clip-text text-transparent"
          }
          aria-hidden
        >
          V
        </span>
        <span className={white ? "text-white" : "text-[#1e1e1e]"}>Stdy</span>
      </span>
    </a>
  );
}
