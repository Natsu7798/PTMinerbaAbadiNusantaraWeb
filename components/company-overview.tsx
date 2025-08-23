import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CompanyOverview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">PT Minerba Abadi Nusantara at a Glance</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            PT Minerba Abadi Nusantara is a company engaged in the trading of mining products and minerals such as coal, nickel, 
            and gold. Supported by a wide network and trusted partners, we are committed to providing professional, 
            transparent, and highly competitive trading services.

            </p>
          </div>
          <div className="lg:w-1/3 flex justify-end">
            <Link href="/About" target="_blank" rel="noopener noreferrer">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-lg">
                Find Out More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
