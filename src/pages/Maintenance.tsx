const ALT_TEXT =
  "Rajiv Sanitations — Website under maintenance. We're working behind the scenes to enhance your experience, back soon. For queries, reach us at 9971517300."

export default function Maintenance() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1c1712]">
      <img
        src="/maintenance-graphic-mobile.png"
        alt={ALT_TEXT}
        className="max-h-screen w-full object-contain sm:hidden"
      />
      <img
        src="/maintenance-graphic.png"
        alt={ALT_TEXT}
        className="hidden max-h-screen w-full object-contain sm:block"
      />
    </div>
  )
}
